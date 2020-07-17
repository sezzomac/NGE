function getHome() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		document.getElementById("main-content").innerHTML =
		this.responseText;
	}
}

xhttp.open("GET", "snippets/mainsnippet.html", true);
xhttp.send();
}


function getProj() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		document.getElementById("main-content").innerHTML =
		this.responseText;
	}
}

xhttp.open("GET", "snippets/projects.html", true);
xhttp.send();
}


function getAbout() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		document.getElementById("main-content").innerHTML =
		this.responseText;
	}
}

xhttp.open("GET", "snippets/aboutus.html", true);
xhttp.send();
}


function getContact() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		document.getElementById("main-content").innerHTML =
		this.responseText;
	}
}

xhttp.open("GET", "snippets/contact.html", true);
xhttp.send();
}
