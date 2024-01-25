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

//let names = ["David", "Christoffer", "Johan", "Maja"];
//names.splice(1, 2);

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
/*
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
*/
// FOR EACH LOOPS

// 7. Loopa arrayen och console log varje pryl


//things.forEach((element) => console.log(element));


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
    let cardNumber = 2;
    let i = 0;

    for (let i = 0; i < 4; i++) {
        let currentColor = cardColor[i];

        for (let cardNumber = 2; cardNumber < 15; cardNumber++) {
            console.log(`${currentColor} ${cardNumber}`);
        }
     
    }
}

createCards();

// 11. Loopa samtliga vänners favoritfrukter med console.log

let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
];

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].likes)
}


// LOOP ARRAYS

let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

// 1. Loopa ut följande array med en forEach()-loop. console.log varje ord

//fruits.forEach((element) => console.log(element));

//2. Loopa ut följande array med en for-of loop. console.log varje ord

//for (const element of fruits) {
//    console.log(element);
//}

// 3. Nu med for loop

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 4. Skriv med index

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} - ${fruits[i]}`);
}

// OBJECT

// Bibblan
//1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är...

const theBook = {
    title: "Oryx and Crake",
    author: "Margarate Atwood",
    numPages: 249
}

// 2. Skapa en array av pbjekt med flera stycken böcker

const manyBooks = [
    {
        title: "Djinn Patrol on the Purple Line",
        author: "Deepa Anappara",
        genre: "Mystery"
    },
    {
        title: "Dreams and Shadows",
        author: "C. Robert Cargill",
        genre: "Fantasy"
    },
    {
        title: "The Hidden Girl and Other Stories",
        author: "Ken Liu",
        genre: "Fantasy"
    }
]

// 3. Skapa en funktion som söker efter en titel i arrayen. 
// Om den hittar en så returneras objektet, annars null.
// Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar

function findBook(searchingFor) {

let i = 0;

manyBooks.forEach((element) => {
    if (element.title === searchingFor) {
        console.log(element);
    } else {
        return null
    }
})

}

findBook("Dreams and Shadows");

// PERSON

let person = {
    name: "Maya",
    age: 33,
    city: "Stockholm"
}

// 1. 
console.log(person.name)
// 2. 
console.log(person.age)
// 3. 
person.age = 34;
console.log(person.age);
// 4. 
person.country = "sweden";
console.log(person);

// 5. 
function greet() {
    console.log(`Hello ${person.name}!`)
}
greet();

// Level-up

/*
function letterFrequency(word) {
    
    let newObject = word.reduce((acc, obj) => {
        let i = 0;
        let letter = obj[0];
        if (acc[letter] == null) acc[letter] = [];
        acc[0].push(obj);
        return acc;
    })
}

function letterFrequency(word) {
    let i = 0;
    
    console.log(word);

    let keys = Object.keys(word);
    let values = Object.values(word);

    let letter = {
        currentLetter = "",
        amountOfLetters = ""
    }

    console.log(values[0])
    console.log(letter)
}

letterFrequency("Maya"); 
*/
/*
let newString = {

};

let oldString = "Maya";

let letter = 0;
oldString.map((findLetter)=> {
    
    newString.letter = letter;
    letter++;
})

console.log(oldString);

function findLetter () {

}
*/
// ÖVNINGAR FRÅN PRESENTATION

function myFunction(a, b) {
    let product = a * b;
    console.log(`The product is ${product}`)
}

myFunction(1, 2);

let result = (c, d) => "The product is " + c * d;
console.log(result(1,2));

// ÖVNINGAR: FUNCTIONS OCH HIGHER ORDER FUNCTIONS
// Övning 1.

function returnLength(string){
    return string.length;
}

console.log(returnLength("Mayonesa"));

// Övning 2

function retrieveYear(date) {
    let year = date.slice(0, 4);
    console.log(year);
}

retrieveYear("1990-07-07");

// Övning 3

function calculate(num1, num2, op) {
    let sum = num1+op+num2;
    let result = eval(sum);

    console.log(result);
}

calculate(1, 2, "-");

// Övning 4

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numResult;
for (let i = 0; i < numbers.length; i++) {
    numResult = numbers.filter((number) => ((number % 2) === 0));
}

console.log(numResult)

// Övning 5

let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
    ]

    console.log(books[0].author);
    console.log(books.length)



for (let i = 0; i < books.length; i++) {
    
    //if (books[i].author === 'Jules Verne') {
    //    console.log(books[i]);
    //}
    let book = books.filter((author) => (books[i].author === 'Jules Verne'));
    
    console.log(book[i]);
}


// Övning 6 

let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
  ]

  let ages = people.reduce(function (acc, obj) { return acc + obj.age;}, 0);
  console.log(ages);

  // Övning 7

  let numberString = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];  // HUR GÖRA MED REDUCE :(

  console.log(Math.max(...numberString));


  
  //let findHighestNum = numberString.reduce((highestNum, num) {
  //  let result =  Math.max(numberString);
  //}, 0)

// Övning 8

let booksTwo = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
  ]
  

  const titles = booksTwo.map((title) => title.title);
  console.log(titles);

  // Övning 9

  let peopleTwo = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
  ]
  
const forty = peopleTwo.map((person) => (person.age > 39) ? true : false);
console.log(forty)

// Övning 10

let countries = [
    {
        name: "Kenya",
        continent: "Africa"
    }, 
    {
        name: "Canada",
        continent: "North America"
    }, 
    {
        name: "Peru",
        continent: "South America"
    }, 
    {
        name: "Sweden",
        continent: "Europe"
    }, 
    {
        name: "Norway",
        continent: "Europe"
    }, 
    {
        name: "Japan",
        continent: "Asia"
    },
    {
        name: "Australia",
        continent: "Australia"
    }, 
]
//1.
console.log(countries.map((name) => name.name));
//2.
console.log(countries.map((cont) => cont.continent));
// 3.
let europeanCountry = countries.filter((country) => (country.continent == "Europe"))
let europeanCountries = europeanCountry.map((country) => country.name);

console.log(europeanCountries)

// 4. 

const searchBtnTwo = document.querySelector("#searchBtnTwo");
let textTwo = document.querySelector("#searchText")
let searchInput;
searchBtnTwo.addEventListener("click", () => {
searchInput = document.querySelector("#searchInput").value;
let searchResult = countries.filter((country) => 
(country.name == searchInput || country.continent == searchInput));
let countryName = searchResult.map((country) => `Name: ${country.name}<br> Continent: ${country.continent} <br>`);

textTwo.innerHTML = `Search result: <br>${countryName}`;
})

// EVENTHANTERING

// Övning 2 MOUSE EVENTS

const peeka_btn = document.querySelector("#peeka_btn");
peeka_btn.addEventListener("mouseover", () => {
    let text = document.querySelector("#peeka_txt");
    text.innerHTML = "BOOOOO!!"
})

peeka_btn.addEventListener("mouseout", () => {
    let text = document.querySelector("#peeka_txt");
    text.innerHTML = ""
})


// Övning 3 KEY EVENTS

const webpage = document.querySelector("body");
webpage.addEventListener("keydown", displayKey)


function displayKey(event) {
    let key = event.key;
    let text = document.querySelector("#key_txt");
    text.innerText = key;
}

// ÖVNING 4: FORM EVENTS

const form_btn = document.querySelector("#form_btn");
form_btn.addEventListener("click", () => {
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let occupation = document.querySelector("#occupation-options").value;
    let text = document.querySelector("#form_txt");
    text.innerHTML = `Your name is ${fname} ${lname} and you are currently ${occupation}`;
})


// ÖVNING 5: Flera event listeners

const m_over = document.querySelector("#m-over");
m_over.addEventListener("mouseover", () => {
    m_over.classList.add("change")
})

const m_out = document.querySelector("#m-out");
m_out.addEventListener("mouseout", () => {
    m_out.classList.add("change2")
})

const m_click = document.querySelector("#m-click");
m_click.addEventListener("click", () => {
    m_click.classList.toggle("change3")
})

const m_dclick = document.querySelector("#m-dclick");
m_dclick.addEventListener("dblclick", () => {
    m_dclick.classList.toggle("change4")
})


// Level-up: Evenr Bubbling och Capturing

const p_funktion = () => {
    p_element.style.backgroundColor = "yellow";
    const text = document.querySelector("#txt_v3");
    text.style.visibility = "visible";
}

const p_funktion2 = () => {
    const box = document.querySelector("#bubbling");
    const child = document.createElement("p");
    child.textContent = "Capture: A boolean value indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. If not specified, defaults to false.";
    box.append(child)
}

const div_funktion = () => {
    div_element.style.backgroundColor = "orange";
    const text = document.querySelector("#txt_v2");
    text.style.visibility = "visible";
}

const divc_funktion = () => {
    div_container.style.backgroundColor = "red";
    const text = document.querySelector("#txt_v1");
    text.style.visibility = "visible";
}

const p_element = document.querySelector("#p-element");
p_element.addEventListener("mouseover", p_funktion);

p_element.addEventListener("click", p_funktion2);

const div_element = document.querySelector("#div-element");
div_element.addEventListener("mouseover", div_funktion, false);


const div_container = document.querySelector("#div-container");
div_container.addEventListener("mouseover", divc_funktion, true);


// ÖVNINGAR: CALLBACK FUNCTIONS

// Övning 1: Grundläggande Callback

function doAfterDelay(message, timer) {
setTimeout(message, timer);
}

let message = () => console.log("Hello");

doAfterDelay(message, 5000);


// ÖVNING 2: Array Iteration med Callbacks

const husdjur = ["hund", "katt", "råtta", "hamster", "kanin", "ödla"];

let presentation = (djur) => console.log(`${djur} är ett djur`);

function presentera(callback) {
    husdjur.forEach(presentation)
}

presentera(presentation);

// ÖVNING 3: Anpassa Callbacks
let array1 = ["Fred", "Wilma", "Daphne", "Scooby Doo", "Shaggy"];
let array2 = ["Buttercup", "Blossom", "Bubbles"]
let newElement = "";
let newString = [];

let uc_btn = document.querySelector("#uc-btn");
let lc_btn = document.querySelector("#lc-btn");
let sc_btn = document.querySelector("#sc-btn");
let pp_btn = document.querySelector("#pp-btn");
let changeable_txt = document.querySelector("#changeable_text");

const func = (newElement) => {
    if (!newString.includes(newElement)) {
        newString.push(newElement);
    }
}

const make_uc = (element) => {
    newElement = element.toUpperCase();
    func(newElement);
}
const make_lc = (element) => {
    newElement = element.toLowerCase();
    func(newElement);
};
const make_invisible = () => {changeable_txt.style.visibility = "hidden"}


sc_btn.addEventListener("click", () => {
    changeable_txt.innerText = array1 
})
pp_btn.addEventListener("click", () => {
    changeable_txt.innerText = array2; 
})
uc_btn.addEventListener("click", () => {
    if (changeable_txt.innerText == array1) {
        processElements(array1, make_uc)
    } else {
        processElements(array2, make_uc)
    }
})
lc_btn.addEventListener("click", () => {
    if (changeable_txt.innerText == array2) {
        processElements(array2, make_lc)
    } else {
        processElements(array1, make_lc)
    }
})

function processElements(array, callback) {
    let result = array.forEach(callback);
    //newString = array.push(newElement);
    changeable_txt.innerText = newString;
    console.log(array)
    console.log(result)
    console.log(newElement)
    console.log(changeable_txt.textContent)
}

//processElements(array1, make_lc)
 
// ÖVNING:4 ASYNKRON CALLBACK

function callback_one(value){
    setTimeout(value, 6000)
} 

function simulateAsyncOperation(value, callback) {
    
}

simulateAsyncOperation("whattap", callback_one)