function compose(...functions) {
    return function (value) {
        let result = value;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
}

const fn = compose(
    x => x + 2,
    x => x * 3
);

console.log(fn(4));