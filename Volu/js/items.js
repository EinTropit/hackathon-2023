// import { initializeApp } from 'firebase/app';

// (function() {
//   var firebaseConfig = {
//       apiKey: "AIzaSyDGPeD5wV5FThb0mO0n6jcYvruF9XwmYQ0",
//       authDomain: "volu-30e9a.firebaseapp.com",
//       projectId: "volu-30e9a",
//       storageBucket: "volu-30e9a.appspot.com",
//       messagingSenderId: "12096235857",
//       appId: "1:12096235857:web:3028849510b190243acb70",
//       measurementId: "G-BZG3RK5ZS1"
//   };

// firebase.initializeApp(firebaseConfig);

// var push_to_firebase = function(data){
//   var db = firebase.firestore();

//   db.collection("items").add({
//       name: data["name"],
//       amount: data["amount"]
//   })
//   .then(function(docRef) {
//       console.log("Submission sent, ID: ", docRef.id);
//       location.reload();
//   })
//   .catch(function(error) {
//       alert("Submission could not be sent: ");
//   });
// }

// var contact_submit = function(){
//   var name = document.getElementById("item-name-1");
//   var amount = document.getElementById("amount-1");

//   var data = {
//     "name": name.value,
//     "amount": amount.value,
//   }

//   console.log(data);
//   push_to_firebase(data);
//   alert("You successfully sent us your item requests!");

// }
// document.addEventListener("DOMContentLoaded", function() {
//   // Your code that depends on the submit button goes here
//   document.getElementById("submit").addEventListener("click", contact_submit);
// });
// })();

let rowCount = 1;
const MAX_ROWS = 10;
function addRow() {
// Get a reference to the "Add Row" button
const addRowButton = document.querySelector("#add-row-button");

// Get a reference to the form's container element
const formContainer = document.querySelector("#form-container");

// Define a maximum number of rows


// Create a counter variable to keep track of how many rows have been added



// Add an event listener to the "Add Row" button
// Only add a new row if we haven't reached the maximum number of rows
const lastRow = formContainer.lastElementChild;
    if (lastRow.id !== `row-${MAX_ROWS}`) {
        // Clone the last row in the form
        
        const newRow = lastRow.cloneNode(true);

        // Update the IDs of the new row's form elements to be unique
        const newRowId = `row-${rowCount + 1}`;
        newRow.id = newRowId;
        newRow.querySelector(".item-name").id = `item-name-${rowCount + 1}`;
        newRow.querySelector(".amount").id = `amount-${rowCount + 1}`;

        // Clear the value of the new row's item input
        newRow.querySelector(".item-name").value = "";
        newRow.querySelector(".amount").value = "";
        // Append the new row to the form
        formContainer.appendChild(newRow);

        // Increment the row count
        rowCount++;
    }
};

function delRow(){
    // get the form container element
const formContainer = document.getElementById("form-container");
const rows = formContainer.querySelectorAll(".form-row");

  // check if there is at least one row
  if (rows.length > 1) {
    // remove the last row
    rows[rows.length - 1].remove();
  }

}
