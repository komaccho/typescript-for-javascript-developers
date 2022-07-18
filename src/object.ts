export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1900 };

let profile2: {
  name: string;
} = { name: 'Ham' };
// profile2 = { birthYear: 1900 };
profile2 = { name: 'test' };
