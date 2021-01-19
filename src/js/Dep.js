let Dep = function(){
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


let Watcher = function(value, getter){
    this.getter = getter;
    this.value = this.get();
    this.val = value;
}

Watcher.prototype = {
    get()
}