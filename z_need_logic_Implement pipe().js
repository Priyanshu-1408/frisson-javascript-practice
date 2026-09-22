function pipe(...functions) {
    return function (value) {
        let result = value;

        for (let i = 0; i < functions.length; i++) {
            result = functions[i](result);
        }

        return result;
    };
}

const fn = pipe(
    x => x + 2,
    x => x * 3,
    x => x - 1
);

console.log(fn(4));