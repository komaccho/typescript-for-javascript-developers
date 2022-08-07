export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

console.log(1);
bmi(1.6, 50, true);
console.log(2);
bmi(1.6, 50, false);
console.log(3);
bmi(1.6, 50);

// bmi(身長, 体重, console.logで出力するかどうか？)
// bmi(1.6, 50, true); 出力する
// bmi(1.6, 50, false); 出力しない
// bmi(1.6, 50); 出力しない
