const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 1245;

const arg = process.argv[2];

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
        if (row.length === 4 && row[0] && row[3]) { // Check for valid row
          const field = row[3];
          if (!(field in fields)) {
            fields[field] = [];
          }
          fields[field].push(row[0]);
          total += 1;
        }
      });
      let strOutput = '';

      strOutput += 'This is the list of our students\n';
      strOutput += `Number of students: ${total}\n`;
      let strLine = '';
      // count object length, size
      const nbreElt = Object.keys(fields).length;
      let cpt = 0;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          cpt += 1;
          if (nbreElt === cpt) {
            strLine += `Number of students in ${field}: ${count}. List: ${list}`;
          } else {
            strLine += `Number of students in ${field}: ${count}. List: ${list}\n`;
          }
        }
      }
      strOutput += strLine;
      resolve(strOutput);
    });
  });
}

const app = http.createServer(async (req, res) => {
  const path = url.parse(req.url).pathname;
  // console.log(`Received request for path: ${path}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (path === '/') {
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    if (arg !== '') {
      let strMessage = '';
      await countStudents(arg)
        .then((themessage) => {
          strMessage += themessage;
          res.end(strMessage);
        })
        .catch((err) => {
          strMessage += err.message;
          res.end(strMessage);
        });
    }
  }
});

// module.exports = countStudents;

app.listen(port, () => '');

module.exports = app;
