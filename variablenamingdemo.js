const students = [
  { name: "nikhil", id: 1, std: 1, div: "c" },
  { name: "ketan", id: 2, std: 2, div: "a" },
  { name: "vishal", id: 3, std: 2, div: "b" },
  { name: "satyam", id: 4, std: 1, div: "d" },
  { name: "amir", id: 5, std: 2, div: "c" },
];

let productData = [];
let productArray = [];
let productDetails = [];
//all the above declaration is bad naming convention

//all the below follows correct naming conventions
let products = [];
let chargeGroups = [];
let chargeGroup;
let product;
let student;

function findStudentById(studentId) {
  //todo: accept a studentId and do a db lookup
  //to fetch student based on the given id

  let idx = students.findIndex((student) => student.id == studentId);
  console.log("student is", students[idx]);
}

function addStudent(name, id, std, div) {
  students.push({ name: name, div: div, std: std, id: id });
}

let tenants;

function removeStudent() {}

//things to avoid for variable naming convention
/*
should use non related name for variables


*/
function add(num1, num2) {
  return num1 + num2;
}
//-----------------------------------------------------------------------------------------

//not defining context

add("5", "6");

// function printTicket(){
// /*    let ticketId='t0-388373-337';
//     let uname="Mr Suraj Kuamr";
//     let tname="Rajdhani Express";
//     let sdate="20-07-2022:16:20:00";
// */
//     let ticketId='t0-388373-337';
//     let full_name="Mr Suraj Kuamr";
//     let train_name="Rajdhani Express";
//     let journey_state_date="20-07-2022:16:20:00";

// }

// function printTicket() {
//   let ticketId = "t0-388373-337";
//   let full_name = "Mr Suraj Kuamr";
//   let train_name = "Rajdhani Express";
//   let journey_state_date = "20-07-2022:16:20:00";
// }


function printTicket(){
    //new implementation
}
class Car {
  //all attributes and method would be under the context of car
  //3: avoid too much context
  id;
  name;
  bodyType; //follow programming language recommendation (case) //avoid noise
  milage;
  max_no_of_passenger; //too much noise //bad coding practise
  maxNoOfPassenger; //camel case //good cding practise
}

//another developer using car class
const carObj = new Car();

carObj.id = "CH03838";
//id is within the conetxt of car
carObj.body_type = "SUV";
carObj.name = "TATA Nexon";
carObj.milage = 18;

addStudent("chandan", 6, 4, "c");
findStudentById(6);
