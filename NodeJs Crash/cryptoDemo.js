// provides cryptographic functionality

import crypto, { createCipheriv, createDecipheriv } from 'crypto';

// crateHash()

const hash = crypto.createHash('sha256'); //sha256 algorith is used.
hash.update('password1234'); // to hash something update method is used.
// console.log(hash.digest('hex')); // hash is returned using hash.digest('hex')


//random bytes
crypto.randomBytes(16, (err, buf) => {  // it generates given amount of bytes of hash. used to generate random hashes. 
    if (err) throw err;
    // console.log(buf.toString('hex')); // the hash is in the buff variable    
})

// cyphertext means unreadable/ encrypted data. cryptographic algorithms and key is required. for decrypting as well.
// IV ensures even if the plain text is same but the hashes are different everytime.

//createCipheriv & createDecipheriv

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update('Hello, this is a secret message', 'utf-8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted); 


const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8'); 
console.log(decrypted); 
