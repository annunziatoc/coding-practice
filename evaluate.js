function addLogging(originalFn) {
    return function(...args) {
        console.log(`Calling ${originalFn.name} with args:`, args);
        const result = originalFn.apply(this, args);
        console.log(`${originalFn.name} returned:`, result);
        return result;
    };
}