//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i]) === true) {
      counter += 1;
    }
  }

  let roomNum;

  if (array === studentScoresRoom1) {
    roomNum = 1;
  } else if (array === studentScoresRoom2) {
    roomNum = 2;
  } else if (array === studentScoresRoom3) {
    roomNum = 3;
  }

  if (counter >= 5) {
    console.log(`นักเรียนห้องที่ ${roomNum} ผ่านเกณฑ์ ✅`);
  } else {
    console.log(`นักเรียนห้องที่ ${roomNum} ไม่ผ่านเกณฑ์ ❌`);
  }
}

function checkScore(score) {
  if (score > 70) {
    return true;
  } else {
    return false;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore);
scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore);
scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScore);
