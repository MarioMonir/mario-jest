const axios = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    isUndefined: () => undefined,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: "mario" };
        user.lastName = "monir";
        return user;
    },
    fetchedUser: () =>
        axios
            .get("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.data)
            .catch((err) => console.error(err)),
};

module.exports = functions;
