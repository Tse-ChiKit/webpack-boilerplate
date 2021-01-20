export const Dep = function(){
    this.subs = [];
}

Dep.prototype.addSub = function(sub){
    if(sub && (this.subs.indexOf(sub) === -1)){
        this.subs.push(sub);        
    }
}

Dep.prototype.notify = function(sub){
    this.subs.length > 0 && this.subs.forEach(sub => {
        sub.update();
    })
}

Dep.depTarget = null;


export const Watcher = function(value, getter){
    this.getter = getter;
    this.value = this.get();
    this.val = value;
}

Watcher.prototype.get = function(){
    Dep.depTarget = this;
    this.getter();
    Dep.depTarget = null;
    return this.val;
}

Watcher.prototype.update = function(){
    this.value = this.get();
}


export function defineReactive(obj, key, val){
    console.log('define function called');
    let dep = new Dep();
    console.log('Dep Target', Dep.depTarget);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get(){
            dep.addSub(Dep.depTarget)
            return val;
        },
        set(newValue){
            if(newValue === val) return;
            val = newValue;
            dep.notify();
        }
    })
}


const typeTo = (val) => Object.prototype.toString.call(val);

export function walk(obj) {
    Object.keys(obj).forEach(key => {
        if(typeTo(obj[key]) === '[object Object]'){
            walk(obj[key])
        }
        defineReactive(obj, key, obj[key])
    })
}

export function observe(obj){
    if(typeTo(obj) != '[object Object]'){
        return null;
    }

    walk(obj);
}


