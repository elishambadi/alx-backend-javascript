const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the data into lines and remove any empty lines
        const lines = data.split('\n').filter(line => line.trim());

        // Skip the header and map each line to an object
        const students = lines.slice(1).map(line => {
            const [firstname, , , field] = line.split(',');
            return { firstname, field };
        });

        // Count the total number of students
        console.log(`Number of students: ${students.length}`);

        // Count the number of students in each field
        const fieldCounts = students.reduce((acc, student) => {
            acc[student.field] = acc[student.field] || [];
            acc[student.field].push(student.firstname);
            return acc;
        }, {});

        // Log the details for each field
        for (const field in fieldCounts) {
            console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
