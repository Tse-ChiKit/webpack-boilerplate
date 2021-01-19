let EventBus = function () {
    this.listeners = {};
}

EventBus.prototype.on = function (type, cb) {

if(!this.listeners[type]){
    this.listeners[type] = []
}

    this.listeners[type].push(cb)
}

EventBus.prototype.emit = function (type, ...args ){
    if(!this.listeners[type] || this.listeners[type].length < 1){
        return false;
    }
    else{
        let fns = this.listeners[type];
        fns.forEach(cb => {
            cb(...args);
        });
    }
    
}

EventBus.prototype.off = function (type, cb ){
    if(this.listeners[type] ){
       const curIndex = this.listeners[type].findIndex(it => it === cb)
       if( curIndex >= 0){
           this.listeners[type].splice(curIndex, 1);
       }

       if(this.listeners[type].length === 0){
           delete this.listeners[type];
       }
    }
    
}

export default EventBus;