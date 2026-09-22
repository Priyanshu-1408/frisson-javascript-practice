function flattenObject(obj) {
    const result = {};

    function flatten(current, parentKey) {

        for (let key in current) {

            let newKey;

            if (parentKey === "") {
                newKey = key;
            } else {
                newKey = parentKey + "." + key;
            }

            if (
                typeof current[key] === "object" &&
                current[key] !== null
            ) {
                flatten(current[key], newKey);
            } else {
                result[newKey] = current[key];
            }
        }
    }

    flatten(obj, "");

    return result;
}


const obj = {
    user: {
        name: "John",
        address: {
            city: "Delhi"
        }
    }
};

console.log(flattenObject(obj));