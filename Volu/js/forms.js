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
  
  