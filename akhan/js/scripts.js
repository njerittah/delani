  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
  var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  var dayOfBirth = Math.floor(dayOfBirth);
  if (gender === "Male") {
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
       }
       else if (gender === "Female") {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  femaleName[dayOfBirth -1];
       }

}
