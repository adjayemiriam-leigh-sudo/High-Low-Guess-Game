// Using DOCUMENT OBJECT TO MANIPULATE HTML ELEMENTS
// WAYS TO TARGET YOUR HTML ELEMENTS ;
// 1.ID
// 2.TAG NAME
// 3.CLASS NAME
// 4.SELECTOR



// 1. ID.
document.getElementById("title").innerHTML = "Hello DOM";
document.getElementById("description").innerHTML = "This is a simple example of a DOM manipulation."



// 2..CLASS NAME
document.getElementsByClassName("highlight")[0].innerHTML = "This is the updated highlight version"
document.getElementsByClassName("highlight1")[0].innerHTML = "Changes have been made to this current highlight"

let  changeName = document.getElementsByClassName("highlight2")[0];
changeName.innerHTML="Hello Bruce Willies !";

// 3. Tag Name
document.getElementsByTagName("p")[0].innerHTML = "This is the first Paragraph Tag";
document.getElementsByTagName("p")[1].innerHTML = "This is the second Paragraph "
document.getElementsByTagName("p")[2].innerHTML = "This is the third paragraph tag"

let nameChange = document.getElementsByTagName("h1")[0];
nameChange.innerHTML = "This is the Heading ";



// STYLING TARGETING THE ID

let title = document.getElementById('title');

title.style.backgroundImage = 'linear-gradient(90deg, #9B081E, #180105) ';
title.style.fontSize = "30px";
title.style.fontFamily = "Arial, sans-serif";
title.style.paddingLeft = "20px"

// styling using the Tag Name

let tagName = document.getElementsByTagName("p");
tagName[0].style.color="Blue";

let paragraph = document.getElementsByTagName("p")
for(let i = 0; i, paragraph.length; i++){

    paragraph[i].style.color = "green";
};































































// const titleSelector = document.getElementById("title");
// console.log(titleSelector);

// titleSelector.textContent="Welcome, CodeTrain Learner!";



// const paragraphSelector = document.getElementsByClassName("message")[0]
// console.log(paragraphSelector);

// // paragraphSelector.innerText="This message has been updated with Javascript";
// paragraphSelector.textContent = "This message has been updated with Javascript";
