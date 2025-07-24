let newbtn = document.createElement("button");
newbtn.innerText = "click me !";

newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend("newbtn");

// use of classlist
let para = document.querySelector("p");
para.classList.add("newclass");