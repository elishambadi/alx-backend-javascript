// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for their name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    // Output the user's name
    console.log(`Your name is: ${name}`);

    // Prepare to close the program
    rl.close();
});

// Event listener for the 'close' event
rl.on('close', () => {
    // Message when the program is closing
    console.log('This important software is now closing\n');
});
