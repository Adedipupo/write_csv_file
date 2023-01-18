import {appendFileSync} from 'fs';

const Contact = (name,phone,email) => {
    const csv = `${name},${phone},${email}\n`;
    try {
        appendFileSync("./contacts.csv",csv)

    } catch (error) {
        console.log(error)
    }
}


const startApp = () => {
    const contact1 = Contact("Bill", "+00123456789", "bill@codingthesmartway.com");
    return contact1;
}

startApp();