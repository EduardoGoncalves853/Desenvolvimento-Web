const Mytitle = document.querySelector("h1");
const myContainer = document.querySelector(".container");

console.log(Mytitle);
console.log(Mytitle.textContent);
console.log(Mytitle.innerHTML);

console.log(myContainer);
console.log(myContainer.textContent);
console.log(myContainer.innerHTML);

Mytitle.innerText = "Document Object Model";
Mytitle.innerText = "<i>Eduardo</i>"
Mytitle.innerHTML =  "<i>HTML</i>"

Mytitle.style.color = "#F00";
Mytitle.style.color = "peru";
Mytitle.style.backgroundColor = "lightgray";


// const boxesNodeList = document.getElementsByClassName(".box")

const boxesNodeList = document.querySelectorAll(".box");

// NodeList
console.log(boxesNodeList.forEach((node) => node.style.color = "#ff000"));

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const sumButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumber() {
    result.innerHTML = Number(num1.value) + Number(num2.value);
};

sumButton.addEventListener("click", sumNumber);

num1.addEventListener("keyup", () => {
    console.log(num1.value);
});


 