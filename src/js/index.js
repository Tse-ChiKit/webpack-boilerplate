import EventBus from './EventBus';
import msg from './ClassTest';

let eb = new EventBus();

eb.on('click', (arg1, arg2) => {console.log('click event', 'arg1: ' + arg1 + ' arg2: ' + arg2)});
eb.emit('click','aa','bb');

const amsg = new msg();

// function say(param){
//     console.log(param)
// }

console.log('statring !!');

function test(arg){
    // 1. 形参 arg 是 "hi"
    // 2. 因为函数声明比变量声明优先级高，所以此时 arg 是 function
    console.log(arg);
    var arg = 'hello'; // 3.var arg 变量声明被覆盖， arg = 'word'被执行
    function arg(){
        console.log('hello world')
    }
    var arg = 'word';
    console.log(arg.s.s);
}
test('hi');

console.log('xxxxxx')
