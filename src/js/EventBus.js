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
        return false;
    }
    else{
        let fns = this.listeners[type];
        fns.forEach(cb => {
            cb(...args);
        });
    }
    
}

export default EventBus;