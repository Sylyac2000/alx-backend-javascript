const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const students = data.split('\n').slice(1); // Ignore the header row
    const fields = {};
    let total = 0;
    students.forEach((student) => {
      const row = student.split(',');
      if (row.length === 4 && row[0] && row[1]) { // Check for valid row
        const field = row[3];
        if (!(field in fields)) {
          fields[field] = [];
        }
        fields[field].push(row[0]);
        total += 1;
      }
    });
    console.log(`Number of students: ${total}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const count = fields[field].length;
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
