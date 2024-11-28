const DatepopReact = (function () {
  let states = [];
  let index = 0;

  function useState(initialValue) {
    const currentIndex = index; // 현재 상태 인덱스를 고정
    let state = states[currentIndex] !== undefined ?
      states[currentIndex] : initialValue;

    const setState = function (newValue) {
      // states[currentIndex] = newValue; // 상태 업데이트
      // render(DatepopComponent); // 상태 업데이트 후 재렌더링

      if (typeof newValue === "function") {
        states[currentIndex] = newValue(states[currentIndex]); // 이전 상태값으로 인자를 어떻게 넣어주면 될까요?
      } else {
        states[currentIndex] = newValue;
      }


    };

    states[currentIndex] = state; // 초기 상태 저장
    index += 1; // 다음 상태를 위해 인덱스를 증가

    return [state, setState];
  }

  function render(Component) {
    index = 0; // 렌더링 시 인덱스 초기화
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function DatepopComponent() {
  const [count, setCount] = DatepopReact.useState(0);
  const [text, setText] = DatepopReact.useState("popdeal");

  return {
    render: function () {
      console.log("render: ", { count, text });
    },
    click: function () {
      setCount(prev => prev + 1);
    },
    type: function (value) {
      setText(value);
    },
  };
}

// 실행 코드
let App = DatepopReact.render(DatepopComponent);
// 출력: render: {count: 0, text: "popdeal"}
App.click();
App = DatepopReact.render(DatepopComponent);
// 출력 예상: render: {count: 1, text: "popdeal"}
App.type("poppass-----");
App = DatepopReact.render(DatepopComponent);
// 출력 예상: render: {count: 1, text: "poppass"}
