const names = ["Ram", "Shyam", "Seeta", "Geeta"];

//Print a name from array for 5 seconds in the h2.
const heading = document.querySelector("h2");
const para = document.querySelector("p");
let namePrint = setInterval(print, 1000);
let i = 0;
let count = 5;

print();
function print() {
  heading.innerText = names[i];

  para.innerText = count--;

  if (count <= 0) {
    heading.innerText = names[i];
    i++;
    count = 5;
  }
  if (i > names.length) {
    clearInterval(print);
  }
}
