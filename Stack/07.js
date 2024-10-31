// 좌표가 벗어낫는지 확인하는 함수 - 좌표 시작 5,5
const isValidRoot = (x, y) => {
	return x >= -5 && x <= 5 && y >= 0 - 5 && x <= 5;
};

// dirs 가 어떤 것인지 판단
const updateLocation = (x, y, dirs) => {
	switch (dirs) {
		case "U":
			return [x, y + 1];
		case "D":
			return [x, y - 1];
		case "L":
			return [x - 1, y];
		case "R":
			return [x + 1, y];
	}
};

function solution(dirs) {
	// 좌표 배열에서 하나씩 뽑아서 경로로 태우기
	let x = 0;
	let y = 0;
	const visited = new Set();

	for (const dir of dirs) {
		const [ux, uy] = updateLocation(x, y, dir);
		console.log("🚀 ~ solution ~ ux, uy:", ux, uy);

		if (!isValidRoot) continue;

		visited.add(`${x}${y}${ux}${uy}`);
		visited.add(`${ux}${uy}${x}${y}`);

		[x, y] = [ux, uy];
	}
	console.log("🚀 ~ solution ~ visited:", visited);

	return visited.size / 2;
}

const dirs = "ULURRDLLU";
solution(dirs);

