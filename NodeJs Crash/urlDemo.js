import url from 'url';

const urlString = 'http://www.google.com/search?q=hello+world';

// URL Object

const urlObj = new URL(urlString);
console.log(urlObj); //returns an array of the url data


//format()
console.log(url.format(urlObj)); //returns the url in string form

// import.meta.url -- file URL

console.log(import.meta.url);

// fileURLToPath()

console.log(url.fileURLToPath(import.meta.url)); //shows the path only

//get search params

console.log(urlObj.search); //it is from urlObj array

const params = new URLSearchParams(urlObj.search); //this returns an js object
console.log(params); //URLSearchParams { 'q' => 'hello world' }

console.log(params.get('q')); //now it returns only the value

params.append('limit', '5'); //adds in the URLSearchParams object

params.delete('limit');

console.log(params);




