
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function CelToFar(celcius) {
    return (celcius * 9) / 5 + 32;
}
module.exports = { generateRandomNumber, CelToFar };

module.exports = generateRandomNumber; 