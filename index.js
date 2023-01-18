import {appendFileSync} from 'fs';
import { data } from './data.js';

const Contact = (id,name,phone,email,age,category) => {
    const csv = `${id},${name},${phone},${email},${age},${category}\n`;
    try {
        appendFileSync("./contacts.csv",csv)
    } catch (error) {
        console.log(error)
    }
}

const result = data.map(contact => contact);

function checkCategory(num){
    if (num > 0 && num <= 25){
        return 'Young Blud'
   }else if (num >25 && num <=45){
        return 'Mature'
   }else{
        return 'Agba !!!'
   }    
}


const startApp = () => {
    result.forEach(contact => {
        const {id,name,phone,email,age} = contact;
        const contact1 = Contact(id,name,phone,email,age,checkCategory(age));
        return contact1;
    })
}

startApp();