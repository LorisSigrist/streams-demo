import express from 'express';
import cors from 'cors';
import { zocker } from 'zocker';
import { ContactSchema } from './shared.js';

const app = express();
app.use(cors());



const contactZock = zocker(ContactSchema);

app.get('/', async (req, res) => {

    const todos = contactZock.generateMany(5);

    const stringified = JSON.stringify(todos);

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Transfer-Encoding': 'chunked'
    });

    //Choose a random number between 1 and 5
    let i = 0;
    while (i < stringified.length) {
        const chunkSize = Math.floor(Math.random() * 50) + 1;
        const chunk = stringified.substr(i, chunkSize);
        res.write(chunk);
        i += chunkSize;


        const delay = Math.floor(Math.random() * 150) + 1;
        await sleep(delay);
    }

    res.end();
});
    
app.listen(3000, () => {
    console.log('Serving Backed Server on http://localhost:3000');
});


/**
 * @param {number} ms 
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}