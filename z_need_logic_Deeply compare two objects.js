function deepEqual(obj1, obj2) {
    // Agar dono exactly same value hain
    if (obj1 === obj2) {
        return true;
    }

    // Agar koi ek object nahi hai
    if (
        typeof obj1 !== "object" ||
        typeof obj2 !== "object" ||
        obj1 === null ||
        obj2 === null
    ) {
        return false;
    }

    // Keys count check
    let keys1 = 0;
    let keys2 = 0;

    for (let key in obj1) {
        keys1++;
    }

    for (let key in obj2) {
        keys2++;
    }

    if (keys1 !== keys2) {
        return false;
    }

    // Har key ko compare karo
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }

        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}