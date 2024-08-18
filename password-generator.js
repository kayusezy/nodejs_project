// Import the generate-password module
const generatePassword = require('generate-password');

// Function to generate and log a random password
function generateAndLogPassword() {
    // Generate a random password
    const password = generatePassword.generate({
        length: 12,          // Length of the password
        numbers: true,       // Include numbers
        symbols: true,       // Include symbols
        uppercase: true,     // Include uppercase letters
        excludeSimilarCharacters: true // Exclude characters that are similar (e.g., 1 and l)
    });

    // Log the generated password to the console
    console.log('Generated Password:', password);
}

// Call the function to generate and log the password
generateAndLogPassword();
