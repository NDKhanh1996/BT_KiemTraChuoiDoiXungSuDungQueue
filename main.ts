import {Stack} from "./stack";
import {Queue} from "./queue";

let stack: Stack<string> = new Stack();
let queue: Queue<string> = new Queue();

let str: string = "able was I ere I saw elba"

function checkSame(str: string): string {
    let arr: string[] = str.split('')
    arr.forEach(i => stack.push(i))
    arr.forEach(i => queue.enQueue(i))
    let flag: boolean = true;
    for (let i = 0; i < stack.size(); i++) {
        if (stack.pop() !== queue.deQueue()) {
            flag = false
        }
    }
    if (flag) {
        return  'same'
    } else {
        return 'not same'
    }
}

console.log(checkSame(str))


