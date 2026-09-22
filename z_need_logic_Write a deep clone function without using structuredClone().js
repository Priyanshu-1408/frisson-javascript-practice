function deepClone(obj) {
    // Primitive values
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Array
    if (Array.isArray(obj)) {
        const result = [];

        for (let i = 0; i < obj.length; i++) {
            result[i] = deepClone(obj[i]);
        }

        return result;
    }

    // Object
    const result = {};

    for (let key in obj) {
        result[key] = deepClone(obj[key]);
    }

    return result;
}



const original = {
    name: "Priyanshu",
    age: 21,
    address: {
        city: "Delhi",
        pincode: 110001
    },
    skills: ["JavaScript", "Java"]
};

const clone = deepClone(original);

console.log(clone);