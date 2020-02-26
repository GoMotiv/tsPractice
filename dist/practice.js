"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var count = 0;
count += 1;
var message = 'hello typescript';
var done = true;
var numbers = [1, 2, 3];
var msg = ['hello', 'world'];
var mightBeUndefined = undefined;
var nullableNumber = null;
var color = 'red';
color = 'yellow';
function sum(x, y) {
    return x + y;
}
/**
 *
 * @param {number[]} numbers
 */
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
function returnNothing() {
    console.log('nothing');
}
var total = sumArray([1, 2, 3, 4]);
returnNothing();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var man = {
    name: '홍길동',
    age: 20
};
var expert = {
    name: '강동기',
    skills: ['javascript', 'react']
};
var people = [man, expert];
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function mergee(a, b) {
    return __assign(__assign({}, a), b);
}
var mergeed = mergee(man, expert);
console.log(mergeed);
function warp(param) {
    return param;
}
var wrapped = warp([10]);
console.log(wrapped);
var items = {
    list: [1, 2, 3]
};
console.log(items);
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: true,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
