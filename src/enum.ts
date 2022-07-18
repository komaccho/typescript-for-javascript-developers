export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  Auguest,
  September,
  October,
  November,
  December,
}

console.log('January' + Months.January);
console.log('February' + Months.February);
console.log('December' + Months.December);

//const MonthsJs = {
//  January: 0,
//  February: 1,
//};
//console.log(MonthsJs.January);
//console.log(MonthsJs.February);

enum Colors {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008800',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = Colors.GREEN;
console.log({ green });

enum Colors {
  YELLOW = '#FFFF00',
  //  GRAY,
}
Colors.YELLOW;
