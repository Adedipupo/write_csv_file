import {appendFileSync} from 'fs';
import axios from 'axios';

const Contact = (id,name,username,email,address) => {
    const csv = `${id},${name},${username},${email},${address}\n`;
    try {
        appendFileSync("./contacts.csv",csv)
    } catch (error) {
        console.log(error)
    }
}

 const users = await axios.get("https://jsonplaceholder.typicode.com/users");
 const data = users.data;

const result = data.map(contact => contact);

// function checkCategory(num){
//     if (num > 0 && num <= 25){
//         return 'Young Blud'
//    }else if (num >25 && num <=45){
//         return 'Mature'
//    }else{
//         return 'Agba !!!'
//    }    
// }


const startApp = () => {
    result.forEach(contact => {
        const {id,name,username,email} = contact;
        const {street,city,zipcode} = contact.address;
        const address = `${street},${city},${zipcode}`;
        const contact1 = Contact(id,name,username,email,address);
        return contact1;
    })
}

startApp();