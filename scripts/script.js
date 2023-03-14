const courseList = [
    {
      code: "ACIT 1620",
      name: "Web Fundamental Technologies"
    },
    {
      code: "ACIT 1515",
      name: "Scripting for IT"
    },
    {
      code: "ACIT 1420",
      name: "Database Systems"
    }
  ];

let input;
do{
    input = prompt("Enter a course code: ");
} while(isNaN(input) === true || input.length !==4);
let courseFound = false;
for (let i of courseList){
    if (i.code.includes(input)){
        console.log(`Yes I am taking the course:  ${i.code} - ${i.name}`);
        courseFound = true;
        break;
    }    
}
if (!courseFound) {  
    courseList.push({ code: input, name: null });
    console.log(`Added course ${input} successful`);
}
