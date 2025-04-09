import crypto from 'crypto';

const hash = crypto.createHash('sha256');

hash.update('password1234');
// console.log(hash.digest('hex'));


// randombytes
crypto.randomBytes(16, (err, buff) => {
    if (err) throw err;
    // console.log(buff.toString('hex'));
    
})


// encrypt decrypt ciphertext, iv, key, cryptographic algo

// createCipheriv() && createDecipheriv()

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, secret message', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const deCipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = deCipher.update(encrypted, 'hex', 'utf-8');
decrypted += deCipher.final('utf-8');
console.log(decrypted);

