function returnFirstElementOfArray<T>(arr: T[]): T {
  return arr[0];
}

const a: number[] = [1, 2, 3, 4, 5];
const b = returnFirstElementOfArray(a);

const c: string[] = ['abc', 'def'];
const d = returnFirstElementOfArray(c);

//
function sample(params: { name: string; [k: string]: any }): string {
  return params.name;
}

sample({ first_name: 'jovin', last_name: 'Mwilanga', name: 'has' });

//
interface IDog {
  type: 'dog';
  bark: string;
}

interface ICat {
  type: 'cat';
  meow: string;
}

type TAnimal = IDog | ICat;

function printAnimal(animal: TAnimal): void {
  if (animal.type === 'cat') {
    console.log(animal.meow);
  }
  if (animal.type === 'dog') {
    console.log(animal.bark);
  }
}
