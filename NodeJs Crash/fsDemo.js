// import fs from 'fs';

// import { writeFile } from 'fs';
import fs from 'fs/promises';

// readFile() -- callback

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Readfilesync() -- synchronous version

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// readFile() -- Promise .then()

// fs.readFile('./test.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
    

// readFile() -- async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8')
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

// WriteFile()

const WriteFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello I am writing in this file');
        console.log('File written ');
    } catch (error) {
        console.log(error);
        
    }
};

WriteFile();
readFile();