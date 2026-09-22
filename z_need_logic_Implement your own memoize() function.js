function memoize(fn) {
    const cache = {};

    return function (n) {

        if (cache[n] !== undefined) {
            return cache[n];
        }

        const result = fn(n);

        cache[n] = result;

        return result;
    };
}

const fibonacci = memoize(function (n) {

    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10));