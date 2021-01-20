import EventBus from './EventBus';
import msg from './ClassTest';
import { Dep, Watcher, observe} from './Dep';


const testdata = {
    name:'xie',
    age:29
}

observe(testdata);
new Watcher(testdata, () => {
    console.log('watcher')
})

testdata.age;
