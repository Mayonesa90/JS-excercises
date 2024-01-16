let information = {
name: "Maya",
age: 33,
occupation: "student"
}

console.log(information)


let name = prompt("What's your name?");
let text = document.querySelector("#text").innerHTML = "Hello " + name + ", and welcome!";



console.log("Hello " + name + ", and welcome!");


let greeting = 'Goodbye world!';
{
    greeting = 'Hello World';
}
console.log(greeting);


const buttonE2 = document.querySelector("#button");

buttonE2.addEventListener('click', () => {
    let number1 = parseFloat(document.querySelector("#number1").value);
    let number2 = parseFloat(document.querySelector("#number2").value);
    result = number1 + number2;
    sum.innerHTML = "<strong>" + result + "</strong>";
    console.log(result);
    resultProduct = number1 * number2;
    product.innerHTML = "<strong>" + resultProduct + "</strong>";
    if (number1 > number2) {
        difference.innerHTML ="<strong>" + (number1 - number2) + "</strong>";    
    } else {
        difference.innerHTML = "<strong>" + (number2 - number1) + "</strong>"    
    }
});

const btn_roundItUp = document.querySelector("#btn_roundItUp");
btn_roundItUp.addEventListener("click", () => {
    let number3 = parseFloat(document.querySelector("#number3").value);
    round.innerHTML = "This is the result without any decimal: " + Math.round(number3);
    lessRound.innerHTML = "This is the result with one decimal: " + number3.toFixed(1);
})

const btn_checkPassword = document.querySelector("#btn_checkPassword");
btn_checkPassword.addEventListener("click", () => {
    const password = "password";
    let passwordInput = document.querySelector("#passwordInput").value;
    let button = document.querySelector(".checkPassword");
    if (passwordInput == password) {
        button.innerHTML ="Logged in!";
        button.style.backgroundColor = "green";
    } else {
        button.innerHTML ="Try again";
        button.style.backgroundColor = "red";
    }
})

const btn_checkNumber = document.querySelector("#btn_checkNumber");
btn_checkNumber.addEventListener("click", () => {
    let number4 = document.querySelector("#number4").value;
    if (number4 < 100) {
        answer.innerHTML = "Your number is below 100!";
    } else if (number4 => 100) {
        answer.innerHTML = "Your number is 100 or greater!"; 
    } else {
        answer.innerHTML = "What are you doing?";
    }
})

const btn_guessTheNumber = document.querySelector("#btn_guessTheNumber");
btn_guessTheNumber.addEventListener("click", () => {
    let answer = 27;
    let guess = document.querySelector("#guess").value;
    if (guess == answer) {
        message.innerHTML = "Damn you're smart ;)";
    } else if (guess > 100 || guess < 1) {
        message.innerHTML = "Are you dumb?";
    } else if (guess == 26 || guess == 28) {
        message.innerHTML = "Sooooo close!"
    } else if (guess > 27) {
        message.innerHTML = "Too high!";
    } else if (guess < 27) {
        message.innerHTML = "Higher..";
    }
})

const btn_DOM1 = document.querySelector("#btn_DOM-1");
btn_DOM1.addEventListener("click", () => {
    console.log("Hello gorgeous");
})

const btn_DOM2 = document.querySelector("#btn_DOM-2");
let text_DOM2 = document.querySelector("#text_DOM-2");
let counter = 0;
btn_DOM2.addEventListener("click", () => {
    counter++;
    text_DOM2.innerHTML = counter;
})


const btn_DOM3 = document.querySelector("#btn_DOM-3");
let text_DOM3 = document.querySelector(".btn_DOM-3");
btn_DOM3.addEventListener("click", () => {
    if (text_DOM3.innerHTML == "On") {
        text_DOM3.innerHTML = "Off";
        text_DOM3.style.backgroundColor = "red";
    } else {
        text_DOM3.innerHTML = "On";
        text_DOM3.style.backgroundColor = "green";
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var headings = document.querySelectorAll('.heading');

    headings.forEach(function(heading) {
        heading.textContent = heading.textContent.toUpperCase();
    });
});

window.addEventListener("load", (event) => {
    let text = document.querySelector("#changeText");
    text.innerText = "I promise I have changed!!";
} )

let div = document.querySelector("#changeDivText");
let secondChild = div.children[1];
secondChild.innerText = "Time may change me, but I can't change time";


const addItem_btn = document.querySelector("#addListElement_btn");
addItem_btn.addEventListener("click", () => {
    let list = document.querySelector("#addListELement_list");
    let newItem = list.appendChild(document.createElement("li"));
    newItem.innerText = "Spices";
})

/*
const changeValue_btn = document.querySelector("#changeValue_btn");
let changeValue_div = document.getElementsByClassName("changeValue_div");
changeValue_btn.addEventListener("click", () => {
    if (changeValue_div.innerHTML == "Change me") {
        changeValue_div.innerHTML = "Change me back!";
    } else {
        changeValue_div.innerHTML = "Change me";
    }
    console.log(changeValue_div);
    console.log(changeValue_div.innerHTML);
})
*/

const changeValue_btn = document.querySelector("#changeValue_btn");
let changeValue_div = document.getElementsByClassName("changeValue_div");
changeValue_btn.addEventListener("click", () => {
    for (var i = 0; i < changeValue_div.length; i++) {
            if (changeValue_div[i].innerHTML == "Telling javascript to do something") {
                changeValue_div[i].innerHTML = 'Javascript';
                changeValue_div[i].style.backgroundImage = 'url("images/cat.jpeg")';

            } else {
                changeValue_div[i].innerHTML = 'Telling javascript to do something';
                changeValue_div[i].style.backgroundImage = 'url("images/woman.jpeg")';
            }
        }
})


const btn_changeClass = document.querySelector("#changeClass_id");
let classHappy = document.querySelector(".class_happy");
btn_changeClass.addEventListener("click", () => {
    classHappy.classList.toggle("classSad");

})


const btn_changeSections = document.querySelector("#changeSectionClasses_btn");
btn_changeSections.addEventListener("click", () => {
    const sections = document.getElementsByTagName("section");
    for (i=0; i<sections.length; i++) {
        sections[i].classList.add("second-style");
    }
    console.log(sections);
})

const theList_btn = document.querySelector("#theList_btn");
theList_btn.addEventListener("click", () => {
    let message = document.querySelector("#theList_message");
    let listParent = document.querySelector("#theList_parent");
  
    let countChildren = listParent.childElementCount;
    let countChildNodes = listParent.childNodes.length;
    let children = listParent.firstChild;
    let names;
    while (children) {
        names += `<li>${children.nodeName}</li>`;
        children = children.nextSibling;
    }
    console.log(countChildNodes);
    message.innerHTML = `This list has: <br>${countChildren} childElements`;
    message.innerHTML += ` <br>${countChildNodes} childNodes`;
    message.innerHTML += `<br><br> Their nodeNames are:<br>${names}`;


    let listChild = listParent.children;
    for (i=0; i < listChild.length; i++) {
        listChild[i].innerHTML += "!";
    }
})

let child = document.querySelector("#deleteElement_element");

const delete_btn = document.querySelector("#deleteElement_btn");
delete_btn.addEventListener("click", () => {
    let parent = document.querySelector("#deleteElement");
    
    console.log(parent.childNodes.length);
    if (parent.childNodes.length >= 7) {
        parent.removeChild(child);
        delete_btn.innerText = "Add element";
    } else {
        parent.append(child);
        delete_btn.innerText = "Delete element";
    }
})


const twoLists_btn = document.querySelector("#twoLists_btn");
twoLists_btn.addEventListener("click", () => {
    let todo = document.querySelector("#todo");
    let done = document.querySelector("#done");
    let todoChild = todo.children[0];
   
    if (todo.childElementCount > 0) {
        done.append(todoChild);
    }
    

    console.log(todoChild);
})

