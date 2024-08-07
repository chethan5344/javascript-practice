class EventEmitter {


    constructor() {
        this.events = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = [callback]
        }

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(e => e !== callback)
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const res = []
        const ExecutionEvent = this.events[eventName]
        if(!ExecutionEvent) return res
        ExecutionEvent.forEach((f) => {
            res.push(f(...args))
        })
        return res
    }
}


// const emitter = new EventEmitter();

// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() { return 99 }
// const sub = emitter.subscribe('onClick', onClickCallback);

// console.log(emitter.emit('onClick')); // [99]
// sub.unsubscribe(); // undefined
// console.log(emitter.emit('onClick')); // []

// const emitter = new EventEmitter();
// console.log(emitter.emit("firstEvent")); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// console.log(emitter.emit("firstEvent"))

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]);
