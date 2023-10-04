export interface Student {
    firstName : string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };

  const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;
  

const StudentsList: Student [] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
  
    // Create the table header
    const headerRow = table.insertRow(0);
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = "First Name";
    headerCell2.textContent = "Location";
  
    // Create a row for each student
    StudentsList.forEach((student, index) => {
      const row = table.insertRow(index + 1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
  
  // Render the table when the document is ready
  document.addEventListener("DOMContentLoaded", renderTable);