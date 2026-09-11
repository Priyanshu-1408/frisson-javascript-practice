function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

let ans = outer();

ans();