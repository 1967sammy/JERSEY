
        
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getDatabase, ref, set , get, child } from "https://www.gstatic.com/firebasejs/8.10.1/firebase.database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAX8I6YiuWu1pgv1DGz_gqzB5vUNP3TVhI",
  authDomain: "jersey-hub-e063c.firebaseapp.com",
  projectId: "jersey-hub-e063c",
  storageBucket: "jersey-hub-e063c.appspot.com",
  messagingSenderId: "909528030348",
  appId: "1:909528030348:web:406bd1b56da13f1ce46fa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementByld('submit').addEventListener('click', function(e){
  
      set(ref(db, 'user/' + document.getElementById("name").value),
    {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        
    });
    alert("Login sucessfull !");
})




document.getElementById("cart").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  
  document.getElementById("cart2").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    
  });
  
  document.getElementById("cart3").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    
  });
  document.getElementById("cart4").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  
  document.getElementById("cart5").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  
  document.getElementById("cart6").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  document.getElementById("cart7").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  document.getElementById("cart8").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  
  document.getElementById("cart9").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    
  });
  document.getElementById("cart10").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    
  });
  document.getElementById("cart11").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
    
  });
  document.getElementById("cart12").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
     
  });
  
  
  document.getElementById("close").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("modal").style.display = "none";
  });