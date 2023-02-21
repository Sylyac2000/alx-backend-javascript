const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      // const dataArray = data.trim().split('\n').map((line) => line.split(','));
      const fields = {};
      let total = 0;
      const students = data.split('\n').slice(1); // Ignore the header row
      // console.log(students);

      students.forEach((student) => {
        // console.log(student);
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

      /* const keys = dataArray.shift();
      // const students = {};
      students = {};
      for (const key of keys) {
        if (key) students[key] = [];
      }
      for (const item of dataArray) {
        if (item.length !== keys.length) continue;
        for (const [index, value] of item.entries()) {
          if (keys[index] && value.trim()) students[keys[index]].push(value);
        }
      }
      const totalStudents = dataArray.length;

      for (const [field, list] of Object.entries(students)) {
        const count = list.length;
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      } */
      console.log(`Number of students: ${total}`);
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
