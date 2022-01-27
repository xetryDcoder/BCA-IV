for (statement 1; statement 2; statement 3) {



  // code block to be executed
}

for(where; when; how) {

}

for(initialization; comparison; inc/dec) {
    //code
}



for (let i = 0; i < 5; i++) {
  console.log(i)

  //0
  //1
  //2
  //3
  //4
}
//for loop end


cars = ["bmw", "suzuki", "ford"]
for (let i = 2, len = cars.length, text = ""; 2 < len; i++) {
  text += cars[1] + "<br>";
}

let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

//for in
for (variable in object) {
  statement
}


// for in example
const object = { 
  a: 1,
  b: 2,
  c: 3 
};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
var a = 5;
console.log(`hello this is a : ${a}`)