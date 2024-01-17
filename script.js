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


// ARRAYER

// 1. let fruits = ["apple", "banana", "kiwi", "orange", "guanabana"];
// 2. let dataTypes = ["string", 33, [1, 2, 3]];
// 3. 
/*
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
console.log(animals.length)
*/
// 4. console.log(animals[0])
// 5. console.log(animals[3])
// 6. animals[1] = "tiger";
// 7.
/*let a = [1, 2, 3];
let b = [4, 5, 6];

let together = a.concat(b);
console.log(together);
*/
// 8.
/*
let a = [1, 2, 3, 7, 8, 9];
let b = [4, 5, 6];
let c = a.splice(3, 0, ...b);

console.log(a);
*/
// 9. Klona array
/*
let arr = ["a", "b", "c"];
let arrCopy = [...arr];
console.log(arrCopy);
*/

// ARRAY METHODS

//let fruits = ["kiwi", "apple", "pear"];

// 10: Lägg till frukt i slutet av arrayen

//fruits.push("banana");

// 11. Lägg till frukt i början

//fruits.unshift("mango");

// 12. Ta bort sista frukten

//fruits.pop();

// 13. Ta bort första frukten

//fruits.shift();

// 14. Sätt in en frukt på index 1

//fruits[1] = "guanabana";

// 15. Sätt in tre frukter på index 2

//fruits.splice(2, 0, "strawberry", "blueberry", "raspberry")

// 16. Ta bort Christoffer ocg Johan

let names = ["David", "Christoffer", "Johan", "Maja"];
names.splice(1, 2);

// 17. Spegelvänd arrayen ovan

let str = 'Supercalifragilisticexpialidocious';
let split = str.split("");
let reverse = split.reverse();
let join = reverse.join("");

//console.log(join);

// 18. Kolla om stringen innehåller bokstaven n

let n = str.includes("n");

// 19. Kolla om strängen innehåller bokstaven x

let x = str.includes("x");

// 20. Vilken position har första p:et

let position = str.indexOf("p");

// 21. Plocka fram de fem första tecknena

let firstFive = str.slice(0, 5);

// 22. Plocka fram de sju sista tecknena ---- KOLLA VILKA MER METODER MAN KAN ANVÄNDA

let lastSeven = str.slice(27);


// LOOPAR
// Classic For loops

// 1. Skapa en loop som iterar 100 varv
/*
for (let i = 0; i <= 1000; i++) {
    console.log(`Du är på varv: ${i}`);
}
*/
// 2. Skapa en loop som räknar ner från 100 till 0.
/*
for (let i = 100; i > 0; i--) {
    console.log(`Varv: ${i}`);
} 
*/
// 3. loopa arrayen med en for-loop

let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`This is a ${fruits[i]}`);
}

// 4. Loopa ut arrayen, sätt vilken index varhe frukt har framför

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// FOR OF LOOPS

// 6. Loopa ut ovanstående arrat och console.log varje pryl

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
for (let i = 0; i < things.length; i++) {
    console.log(things[i]);
}

// FOR EACH LOOPS

// 7. Loopa arrayen och console log varje pryl


things.forEach((element) => console.log(element));


// 8. samma som ovan men med positionen i arrayen den har ---- FINNS DET FLER METODER?
/*
for (let i = 0; i < things.length; i++) {
    console.log(i + " " + things[i]);
}
*/
//WHILE LOOPS

// 9. skapa en while-loog som kör 1000 varv
/*
let i = 0;
while (i <= 1000) {
    console.log(`Du är på varv: ${i}`);
    i++;
}
*/
// LOOP DA LOOPS

// 10. Generera en kortlek med 52 kort där varje kort innehåller en färg (suit) och ett värde mellan 2 och 14 (ess)

function createCards() {
    let cardColor = ["hjärter", "spader", "klöver", "ruter"];
    //let cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let i = 2;
    while (i <= 13) {
        console.log(`${cardColor[0]} ${i}`);
        console.log(`${cardColor[1]} ${i}`);
        console.log(`${cardColor[2]} ${i}`);
        console.log(`${cardColor[3]} ${i}`)
        i++;
    }

}

createCards();