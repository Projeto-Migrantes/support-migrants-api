import { generate } from "generate-password";

/*
* Generate password with length 12
* Contains numbers, symbols and letters (upper and lower case)
*/
const generatePassword = () => {
    const password = generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase:true
    });

    return password
};

export default generatePassword;