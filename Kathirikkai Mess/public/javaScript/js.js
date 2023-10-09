function openNav() {
    var banner = document.getElementById("banner");
    var slide = document.getElementById("menuBar");
    if (slide.style.display === "none" || slide.style.display === "") {
        slide.style.display = "block";
        slide.style.opacity = "1";
        // banner.style.marginTop = "-50px";
    } else {
        slide.style.display = "none";
        banner.style.marginTop = "0";
        slide.style.opacity = "0";

    }
}

const aboutLookup = document.getElementById("about-lookup");
const openabout = document.getElementById("open-about");
function openLookup() {
    // Display the loading spinner
    document.getElementById('loading-spinner').style.display = 'inline-block';

    // Simulate some operation (e.g., loading data) with a setTimeout
    setTimeout(function () {
        // Your operation is complete

        // Hide the loading spinner
        document.getElementById('loading-spinner').style.display = 'none';

        // Show the "close" element (assuming it's initially hidden)
        document.getElementById('close').style.display = 'block';
    }, 1000); // Adjust the delay as needed (2 seconds in this example)
}
function openAboutLookup() {
    // Display the loading spinner
    document.getElementById('loading-spinner').style.display = 'inline-block';

    // Simulate some operation (e.g., loading data) with a setTimeout
    setTimeout(function () {
        // Your operation is complete

        // Hide the loading spinner
        document.getElementById('loading-spinner').style.display = 'none';

        // Show the "close" element (assuming it's initially hidden)
        aboutLookup.style.display = "block"; 
    }, 1000); // Adjust the delay as needed (2 seconds in this example)
}
function aboutcloseLookup(){
    aboutLookup.style.display = "none";

}

function closeLookup(){
    var aboutFood = document.getElementById("close");
    aboutFood.style.display = "none";
    aboutLookup.style.display = "none";

}
function closeNavBar(){
    var navBar = document.getElementById("menuBar");
    navBar.style.display = "none";
}

var note = document.getElementById("note");
var monday = document.getElementById("monday");
var monday = document.getElementById("tuesday");
var monday = document.getElementById("wednesday");
var monday = document.getElementById("thursday");
var monday = document.getElementById("friday");

function openDishMenu(){
    var dishbtn = document.getElementById("openMenu");
   
    setTimeout(function (){
        dishbtn.style.display = "block";
        note.style.display ="none"
    },500);
}
function closeDishMenu(){
    var dishbtn = document.getElementById("openMenu");
    dishbtn.style.display = "none";
    note.style.display ="block";
}

function showMenu(day) {
    // Hide all lunch and dinner menu items
    const menuItems = document.querySelectorAll('.food-lunch, .food-dinner');
    menuItems.forEach(item => {
        item.style.display = 'none';
    });

    // Show the selected day's lunch menu
    const selectedLunchMenu = document.getElementById(day);
    if (selectedLunchMenu) {
        selectedLunchMenu.style.display = 'block';
    }

    // Show the selected day's dinner menu
    const selectedDinnerMenu = document.getElementById(day + '-dinner');
    if (selectedDinnerMenu) {
        selectedDinnerMenu.style.display = 'block';
    }
    openDishMenu();
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var queryBox = document.getElementById("queryBox");
var body = document.body;

function openQueryBox(){
        queryBox.style.display = "block";
        body.classList.add("blur-background");
    }

function closeQueryBox(){
        queryBox.style.display = "none";
}
var orderBox = document.getElementById("orderBox");
function openOrderBox(){
    orderBox.style.display = "block";
}
function closeOrderBox(){
    orderBox.style.display = "none";
}




// const firebaseConfig = {
//     apiKey: "AIzaSyA_pFZ0sXzjQHJWOIBvOECmvqs_v9bi050",
//     authDomain: "kathirikkai-mess.firebaseapp.com",
//     databaseURL: "https://kathirikkai-mess-default-rtdb.firebaseio.com",
//     projectId: "kathirikkai-mess",
//     storageBucket: "kathirikkai-mess.appspot.com",
//     messagingSenderId: "977625214576",
//     appId: "1:977625214576:web:cea1f18d7c0e610e878eb5",
//     measurementId: "G-6C0GE79WW3"
//   };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_pFZ0sXzjQHJWOIBvOECmvqs_v9bi050",
    authDomain: "kathirikkai-mess.firebaseapp.com",
    databaseURL: "https://kathirikkai-mess-default-rtdb.firebaseio.com",
    projectId: "kathirikkai-mess",
    storageBucket: "kathirikkai-mess.appspot.com",
    messagingSenderId: "977625214576",
    appId: "1:977625214576:web:cea1f18d7c0e610e878eb5",
    measurementId: "G-6C0GE79WW3"
  };
  
firebase.initializeApp(firebaseConfig);
var orderFormDB = firebase.database().ref('orderForm');

document.getElementById("orderForm").addEventListener("submit",submitForm);
function submitForm(e){
  e.preventDefault();


  var name = getElementVal('name');
  var mobile = getElementVal('mobile');
  var orderItem = getElementVal('OrderItem');
  var quantity = getElementVal('quantity');
  var email = getElementVal('email');
  var address = getElementVal('address');
  var location = getElementVal('location');

  saveMessages(name,mobile,orderItem,quantity,email,address,location);


//   document.querySelector('.alert').style.display = "block";


//   setTimeout(() => {
//     document.querySelector('.alert').style.display = "none";
//   },3000);

  document.getElementById("orderForm").reset();

}

const saveMessages = (name,email,mobile,subject,message) => {
  var newOrderForm = orderFormDB.push();

  newOrderForm.set({
    Name : name,
    Mobile : mobile,
    OrderItem: OrderItem,
    Quantity: quantity,
    Email: email,
    Address: address,
    Location: location,
  });
}

const getElementVal = (id)=>{
  return document.getElementById(id).value;
}