import { appendFileSync } from 'fs';
import axios from 'axios';

// The Users function takes user information and appends it to a CSV file.
const Users = (id, name, username, email, address) => {
    const csv = `${id},${name},${username},${email},${address}\n`; // Construct a CSV row
    try {
        appendFileSync("./contacts.csv", csv); // Append the CSV row to the file
    } catch (error) {
        console.log(error);
    }
};

// Fetch JSON data from a URL using Axios and directly process it
const fetchAndProcessData = async () => {
    try {
        const jsonData = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = jsonData?.data; // Extract the data property from the response
        
        data.forEach(contact => {
            const { id, name, username, email, address } = contact; // Destructure contact properties
            const { street, city, zipcode } = address; // Destructure address properties
            const fullAddress = `${street},${city},${zipcode}`; // Combine address properties
            Users(id, name, username, email, fullAddress); // Call Users function to append to CSV
        });
        
        console.log('CSV creation successful!');
    } catch (error) {
        console.log('Error fetching or processing data:', error);
    }
};

// Start the application by calling the fetchAndProcessData function
fetchAndProcessData();
