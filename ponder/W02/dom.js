const title = document.querySelector("#title");
title.textContent = "Web Page Components";

let topics = document.querySelector("#content");
topics.style.color = "red";

document.getElementById("topics").style.color = "purple";

const list = document.querySelector(".list");
list.style.border = "3px solid black";

const lists = document.querySelectorAll(".list");

lists.forEach(list => {
    list.style.border = "3px solid black";
});

const paragraph = document.querySelector("p");

//paragraph.style.backgroundColor = "lightblue";

paragraph.classList.add("background");

//document.querySelector("body").classList.add("background");

const image = document.querySelector("img");

image.setAttribute("src", "/images/html_js_css.jpg");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = "red";
})
