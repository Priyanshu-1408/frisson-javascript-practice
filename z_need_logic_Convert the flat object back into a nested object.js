function unflattenObject(obj) {
    const result = {};

    for (let key in obj) {
        let current = result;
        let start = 0;
        let part = "";

        for (let i = 0; i <= key.length; i++) {

            if (key[i] === "." || i === key.length) {

                part = "";

                for (let j = start; j < i; j++) {
                    part = part + key[j];
                }

                if (i === key.length) {
                    current[part] = obj[key];
                } else {
                    if (current[part] === undefined) {
                        current[part] = {};
                    }

                    current = current[part];
                }

                start = i + 1;
            }
        }
    }

    return result;
}