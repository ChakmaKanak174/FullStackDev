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
    



// WriteFile()

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello I am writing in this file');
        console.log('File written ');
    } catch (error) {
        console.log(error);
        
    }
};


// appendFile()

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\ni am appending this text')
        console.log('File appended\n');
        
    } catch (error) {
        console.log(error);
        
    }
}

// readFile() -- async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8')
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}


const runAll = async () => {
    // await writeFile();
    await appendFile();
    await readFile();
};

runAll();

// writeFile();
// appendFile();
// readFile();