export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'HELLO';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const exampple2: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example1;
