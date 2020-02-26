let count = 0;
count += 1;

const message: string = 'hello typescript';

const done: boolean = true

const numbers: number[] = [1, 2, 3];
const msg: string[] = ['hello', 'world'];

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red'
color = 'yellow'

function sum(x: number, y: number): number {
  return x + y;
}

/**
 *  
 * @param {number[]} numbers 
 */

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

function returnNothing(): void {
  console.log('nothing')
}

const total = sumArray([1, 2, 3, 4]);
returnNothing();

interface Shape {
  getArea(): number
}

class Circle implements Shape {

  radius: number;

  constructor(radius: number) {
    this.radius = radius
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {

  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
})

interface Person {
  name: string
  age?: number;
}

interface Developer extends Person {
  skills: string[]
}

const man: Person = {
  name: '홍길동',
  age: 20
}

const expert: Developer = {
  name: '강동기',
  skills: ['javascript', 'react']
}

const people: Person[] = [man, expert]


function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  }
}

const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);

function mergee<A, B>(a: A, b: B): A | B {
  return {
    ...a,
    ...b
  }
}

const mergeed = mergee(man, expert);
console.log(mergeed)

function warp<T>(param: T): T {
  return param
}
const wrapped = warp([10]);
console.log(wrapped)

interface Items<T> {
  list: Array<T>;
}

const items: Items<number> = {
  list: [1, 2, 3]
}
console.log(items);

class Queue<T> {
  list: T[] = [];
  getlength(): number {
    return this.list.length
  }
  enqueue(item: T): void {
    this.list.push(item)
  }
  dequeue(): T | undefined {
    return this.list.shift();
  }
}

const queue = new Queue<number>();

console.log(queue);
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());