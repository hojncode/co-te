const enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
const referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
const seller = ["young", "john", "tod", "emily", "mary"];
const amount = [12, 4, 2, 5, 10];
// result [360, 958, 108,0, 450,18,180,1080];

function solution(enroll, referral, seller, amount) {
  let parent = {};

  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  let total = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100;
    let curName = seller[i];

    while (money > 0 && curName != "-") {
      total[curName] += money - Math.floor(money / 10);
      curName = parent[curName];

      money = Math.floor(money / 10);
    }
  }

  return enroll.map(name => total[name]);
}

// solution(enroll, referral, seller, amount);
console.log("🚧  solution(enroll, referral, seller, amount)", solution(enroll, referral, seller, amount));
