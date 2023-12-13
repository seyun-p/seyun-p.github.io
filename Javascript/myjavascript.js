function show()
{
	/* Get image and change value of src attribute */
	let image = document.getElementById("mydiv100");
	image.src ="images/wp6124202.JPG"
	document.getElementById("btnID")
	.style.display = "none";
}


function validateForm() 
{
    // Complicated, but accesses "myForm" form, 
    // then access the input "fname" and gets the value the 
    // user has entered into the box
    let x = document.forms["myForm"]["myname"].value;

    // Checks if the value of the form box is empty ""
    if (x == "") {
        // If so, pop up an alert for the user!
        alert("Name must be filled out");
        return false;
    }
}
