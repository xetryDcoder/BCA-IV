let students = new Array(2);

students[0] = "welcome"
students.push("sandhya")
students.push("Ram")
students.unshift("This is test")

for(let i = 0; i < students.length; i++) {
    console.log(students[i])
}

let meet = [
  {
    name: "Hemanta",
    picture: "asnsmkasca.jpg",
  },
  {
    name: "Rohit",
    picture: "asnsmkasca.jpg",
  },
  {
    name: "Bandana",
    picture: "asnsmkasca.jpg",
  },
];

for (let i = 0; i < meet.length; i++) {
  console.log(meet[i].name);
 /*  meet.push({}) */
}

array.foreach(function(currentValue, index, arr), thisValue)