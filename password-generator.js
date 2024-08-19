const passwordGenerator = require("generate-password");

function generateRandomPassword () {
    const password = passwordGenerator.generate({
        length: 16, // Length of the password
        numbers: true, // includes numbers
        symbols: true, // includes symbols
        uppercase: true, // includes uppercase
        lowercase: true, // includes lowercase
        excludeSimilarCharacters: true, // excludes similar characters
        strict: true // enforces at least one charcater from each option
    });

    console.log('Generated Password:', password);
}

// Call the function to generate and log a random password

generateRandomPassword();