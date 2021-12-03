let myConsoleObjest = {
    log: function (message) {
        console.log('custom log', message);
    },
    assert: function (boolean, ...data) {
        console.assert('one' === 1, 'This is true');
    },
    clear: function () {
        console.clear();
    },
    count: function (userMessageCount) {
        console.count(userMessageCount);
    },
    countReset: function (userMessageCount) {
        console.countReset(userMessageCount);
    },
    debug: function (message) {
        console.debug('custom debug', message);
    },
    dir: function (myConsoleObjest) {
        console.dir(myConsoleObjest);
    },
    dirxml: function (myConsoleObjest) {
        console.dirxml(myConsoleObjest);
    },
    error: function () {
        console.error(myConsoleObjest);
    },
    group: function (message) {
        console.group('message', message);
    },
    groupCollapsed: function (message) {
        console.groupCollapsed('message', message);
    },
    groupEnd: function (message) {
        console.groupEnd('message', message);
    },
    info: function () {
        console.info(myConsoleObjest);
    },
    table: function (message, message1, message2) {
        console.table([message, message1, message2]);
    },
    time: function (nameOfYourTimer) {
        console.time(nameOfYourTimer);
    },
    timeEnd: function (nameOfYourTimer) {
        console.timeEnd(nameOfYourTimer);
    },
    timeLog: function (nameOfYourTimer) {
        console.timeLog(nameOfYourTimer);
    },
    timeStamp: function (messageMarker) {
        console.timeStamp(messageMarker);
    },
    trace: function () {
        console.trace();
    },
    warn: function (someMessageWithWorning) {
        console.warn(someMessageWithWorning);
    }
}

myConsoleObjest.table(['info', 'table', 'log'])
myConsoleObjest.groupCollapsed('message')
myConsoleObjest.time('timer')
myConsoleObjest.timeEnd('timer')
myConsoleObjest.log('message')
myConsoleObjest.log('message')
myConsoleObjest.trace()
myConsoleObjest.log('message')
myConsoleObjest.warn('message')
myConsoleObjest.warn()
myConsoleObjest.log('message')
myConsoleObjest.timeStamp('messageForTimeStamp')
myConsoleObjest.log('message')
myConsoleObjest.count('message')
myConsoleObjest.timeStamp('messageForTimeStamp')