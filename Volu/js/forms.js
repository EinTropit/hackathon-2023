(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyDGPeD5wV5FThb0mO0n6jcYvruF9XwmYQ0",
        authDomain: "volu-30e9a.firebaseapp.com",
        projectId: "volu-30e9a",
        storageBucket: "volu-30e9a.appspot.com",
        messagingSenderId: "12096235857",
        appId: "1:12096235857:web:3028849510b190243acb70",
        measurementId: "G-BZG3RK5ZS1"
    };

  firebase.initializeApp(firebaseConfig);

  var push_to_firebase = function(data){
    var db = firebase.firestore();

    db.collection("items").add({
        fullName: data["fullName"],
        yearOfBirth: data["yearOfBirth"],
        currentHospital: data["currentHospital"],
        Basketball: data["Basketball"],
        Soccer: data["Soccer"],
        Tennis: data["Tennis"],
        Gym: data["Gym"],
        Action: data["Action"],
        Adventure: data["Adventure"],
        Simulation: data["Simulation"],
        Strategy: data["Strategy"],
        Guitar: data["Guitar"],
        Piano: data["Piano"],
        Drums: data["Drums"],
        Singing: data["Singing"],
        Fiction: data["Fiction"],
        NonFiction: data["NonFiction"],
        Comics: data["Comics"],
        Mystery: data["Mystery"],
        Monopoly: data["Monopoly"],
        Chess: data["Chess"],
        SettlersOfCatan: data["SettlersOfCatan"],
        CardTricks: data["CardTricks"],
        CoinTricks: data["CoinTricks"],
        Mentalism: data["Mentalism"],
        Illusions: data["Illusions"],
        Baking: data["Baking"],
        Grilling: data["Grilling"],
        SousVide: data["SousVide"],
        EthnicCuisine: data["EthnicCuisine"],
        Astronomy: data["Astronomy"],
        Biology: data["Biology"],
        Chemistry: data["Chemistry"],
        Physics: data["Physics"]
    })
    .then(function(docRef) {
        console.log("Submission sent, ID: ", docRef.id);
        location.reload();
    })
    .catch(function(error) {
        alert("Submission could not be sent: ");
    });
  }

  var contact_submit = function(){
    var fullName = document.getElementById("fullName");
    var yearOfBirth = document.getElementById("yearOfBirth");
    var currentHospital = document.getElementById("current-hospital");
    var Basketball = document.getElementById("Basketball");
    var Soccer = document.getElementById("Soccer");
    var Tennis = document.getElementById("Tennis");
    var Gym = document.getElementById("Gym");
    var Action = document.getElementById("Action");
    var Adventure = document.getElementById("Adventure");
    var Simulation = document.getElementById("Simulation");
    var Strategy = document.getElementById("Strategy");
    var Guitar = document.getElementById("Guitar");
    var Piano = document.getElementById("Piano");
    var Drums = document.getElementById("Drums");
    var Singing = document.getElementById("Singing");
    var Fiction = document.getElementById("Fiction");
    var NonFiction = document.getElementById("NonFiction");
    var Comics = document.getElementById("Comics");
    var Mystery = document.getElementById("Mystery");
    var Monopoly = document.getElementById("Monopoly");
    var Chess = document.getElementById("Chess");
    var SettlersOfCatan = document.getElementById("SettlersOfCatan");
    var CardTricks = document.getElementById("CardTricks");
    var CoinTricks = document.getElementById("CoinTricks");
    var Mentalism = document.getElementById("Mentalism");
    var Illusions = document.getElementById("Illusions");
    var Baking = document.getElementById("Baking");
    var Grilling = document.getElementById("Grilling");
    var SousVide = document.getElementById("SousVide");
    var EthnicCuisine = document.getElementById("EthnicCuisine");
    var Astronomy = document.getElementById("Astronomy");
    var Biology = document.getElementById("Biology");
    var Chemistry = document.getElementById("Chemistry");
    var Physics = document.getElementById("Physics");

    var data = {
      "fullName": fullName.value,
      "yearOfBirth": yearOfBirth.value,
      "currentHospital": currentHospital.value,
      "Basketball": Basketball.checked,
      "Soccer": Soccer.checked,
      "Tennis": Tennis.checked,
      "Gym": Gym.checked,
      "Action": Action.checked,
      "Adventure": Adventure.checked,
      "Simulation": Simulation.checked,
      "Strategy": Strategy.checked,
      "Guitar": Guitar.checked,
      "Piano": Piano.checked,
      "Drums": Drums.checked,
      "Singing": Singing.checked,
      "Fiction": Fiction.checked,
      "NonFiction": NonFiction.checked,
      "Comics": Comics.checked,
      "Mystery": Mystery.checked,
      "Monopoly": Monopoly.checked,
      "Chess": Chess.checked,
      "SettlersOfCatan": SettlersOfCatan.checked,
      "CardTricks": CardTricks.checked,
      "CoinTricks": CoinTricks.checked,
      "Mentalism": Mentalism.checked,
      "Illusions": Illusions.checked,
      "Baking": Baking.checked,
      "Grilling": Grilling.checked,
      "SousVide": SousVide.checked,
      "EthnicCuisine": EthnicCuisine.checked,
      "Astronomy": Astronomy.checked,
      "Biology": Biology.checked,
      "Chemistry": Chemistry.checked,
      "Physics": Physics.checked
    }

    console.log(data);
    push_to_firebase(data);
    alert("You successfully sent us your hobbies!");

  }
  document.addEventListener("DOMContentLoaded", function() {
    // Your code that depends on the submit button goes here
    document.getElementById("submit").addEventListener("click", contact_submit);
  });
})();


function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const yearOfBirth = document.getElementById("yearOfBirth").value;
    const currentHospital = document.getElementById("currentHospital").value;
  
    // Check if full name is empty
    if (fullName === "") {
      alert("יש להכניס שם מלא");
      return false;
    }
  
    // Check if year of birth is a valid number
    if (isNaN(yearOfBirth)) {
      alert("יש להכניס שנת לידה");
      return false;
    }
  
    // Check if year of birth is within a reasonable range
    if (yearOfBirth < 1900 || yearOfBirth > 2023) {
      alert("שנת הלידה צריכה להיות בין 1900 ל 2023");
      return false;
    }
  
    // Check if a hospital has been selected
    if (currentHospital === "") {
      alert("יש לבחור את בית החולים");
      return false;
    }
  
    // If all checks pass, the form is valid
    alert("הטופס הוגש בהצלחה");
    return true;
  }

  function showHobbyOptions(optionsId) {
    var options = document.getElementById(optionsId);
    if (options.style.display === "none") {
      options.style.display = "block";
    } else {
      options.style.display = "none";
    }
  }
  
  function toggleSports() {
    var sportsDiv = document.getElementById("sports");
    if (sportsDiv.style.display === "none") {
      sportsDiv.style.display = "block";
    } else {
      sportsDiv.style.display = "none";
    }
  }
  
  function toggleVideoGames() {
    var videoGamesDiv = document.getElementById("video-games");
    if (videoGamesDiv.style.display === "none") {
      videoGamesDiv.style.display = "block";
    } else {
      videoGamesDiv.style.display = "none";
    }
  }
  
  function toggleMusic() {
    var musicDiv = document.getElementById("music");
    if (musicDiv.style.display === "none") {
      musicDiv.style.display = "block";
    } else {
      musicDiv.style.display = "none";
    }
  }