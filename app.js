// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const studentsContainer1 = document.querySelector(".students1");
const studentsContainer2 = document.querySelector(".students2");


const nameInput = studentForm["name"];
const ageInput = studentForm["date"];
const rollInput = studentForm["roll"];

/* 
// {
//   name: '',
//   age: number,
//   roll: number
// }
// */

 const students = JSON.parse(localStorage.getItem("students")) || [];

 const addStudent = (name, date, roll) => {
  students.push({
     name,
     date,
    roll,
 });

 localStorage.setItem("students", JSON.stringify(students));

  return { name, date, roll };
 };

const createStudentElement = ({ name, date, roll }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("span");
  
  const studentAge = document.createElement("span");
  const studentRoll = document.createElement("span");

  // Fill the content
  let today = new Date();
  const d = new Intl.DateTimeFormat('en-IN').format(today);
  console.log(d);
  // const  d1 = students.date;
   console.log(date);
   studentName.innerText =  name;
   studentAge.innerText =   date;
   studentRoll.innerText = "Priority: " + roll;
 
   // Add to the DOM
   studentDiv.append(studentName, studentAge, studentRoll);
  if(date===d){
         console.log("match");
 
  studentsContainer.appendChild(studentDiv);

  // studentsContainer.style.display = students.length === 0 ? "none" : "flex";
  // studentsContainer.style.justifycontent = spacearound;
}

else if(date>d)
{
  studentsContainer1.appendChild(studentDiv);

  // studentsContainer1.style.display = students.length === 0 ? "none" : "flex";
}
 else{
  studentsContainer2.appendChild(studentDiv);
 }



}
//      else
//      {
//       console.log("error");
//       studentName.innerText = "Student name: " + name;
//   studentAge.innerText = "Student age: " + date;
//   studentRoll.innerText = "Student roll: " + roll;

//   // Add to the DOM
//   studentDiv.append(studentName, studentAge, studentRoll);
//   studentsContainer1.appendChild(studentDiv);

//   studentsContainer.style.display = students.length === 0 ? "none" : "flex";
//      }
// };

// studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};
