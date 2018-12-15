var eventManager = new Object();
var subscribers = [];
eventManager.subscribe = function (eventName, eventFunction) {
    subscribers[eventName] = eventFunction;
}
eventManager.broadcast = function (eventName, data) {
    var func = subscribers[eventName];
    func(data);
}
// var eventManager = new Object();
// var subscribers = new Object();
// var index = 0;
// eventManager.subscribe = function (eventName, eventFunction) {
    // subscribers.eventName = eventName;
    // subscribers.eventFunction[index] = eventFunction;
    // console.log(index);
    // console.log(eventFunction);
    // index++;
    // // subscribers[eventName] = eventFunction;
// }
// eventManager.broadcast = function (eventName, data) {
    // for (var i = 0; i < subscribers.eventFunction.length; i++) {
        // var func = subscribers[eventName];
        // func(data);
    // }
// }