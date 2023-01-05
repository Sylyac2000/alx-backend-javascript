/* creates an interface Student */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std_one: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles",
};

let studentList: Student[] = [std_one, student2]

const table = document.createElement('table');

studentList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  firstNameCell.innerHTML = student.firstName;
  const locationCell = row.insertCell();
  locationCell.innerHTML = student.location;
});

document.body.appendChild(table);

