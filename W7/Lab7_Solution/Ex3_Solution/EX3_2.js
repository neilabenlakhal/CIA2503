/*
	The name entered should be at least 10 letters, spaces are allowed.
	Number of persons should be more than 10.
	Phone number should start with 05 or 06 or 07 followed by 6 more digits.
	User must select one of the two meal choices.
*/


function Validate() {
	//reset all error messages

	document.getElementById("phoneError").innerHTML = "";
	document.getElementById("fnameError").innerHTML = "";
	document.getElementById("numPersonsError").innerHTML = "";
	document.getElementById("mealError").innerHTML = "";


	// Capture user input 

	var fullname = document.getElementById("fullname").value; //input type =text
	var phone = document.getElementById("phone").value;
	var numPersons = document.getElementById("numPersons").value;
	var lunch = document.getElementById("lunch"); //radio button
	var dinner = document.getElementById("dinner"); //radio button

	// variable to test for validation
	let result = true;

	//The name entered should be at least 10 letters, spaces are allowed.
	regname = /^[a-zA-Z ]{10,}$/;   //pattern declaration 
	if (regname.test(fullname) == false) {
		document.getElementById("fnameError").innerHTML = "Must be at least 10 letters, spaces allowed";
		result = false;

	}

//	Phone number should start with 05 or 06 or 07 followed by 6 more digits.
	regphone = /^(02|05|06|07)[0-9]{6}$/;

	if (regphone.test(phone) == false) {
		document.getElementById("phoneError").innerHTML = "Must start with 05 or 06 or 07 followed by 6 more digits";
		result = false;
	}
	//	Number of persons should be more than 10.
	numPersons = parseInt(numPersons);//convert to integer
	if (isNaN(numPersons) || numPersons < 10) {
		document.getElementById("numPersonsError").innerHTML = "Must be at least 10 persons";
		result = false;
	}
	//User must select one of the two meal choices.
	if (lunch.checked == false && dinner.checked == false) {
		document.getElementById("mealError").innerHTML = "Must choose one meal";
		result = false;
	}



	if (result==true) { // all fields are correct
		var numPersons = document.getElementById("numPersons").value;
		var fee = 0;
		if (numPersons <= 20) {
			fee = 6000;
		}
		else {
			fee = 4500;
		}
		result = "Booking Fee: AED" + fee;
	}
	else {
		result = "Please check the form for errors";
	}
	document.getElementById("result").innerHTML = result;
}


