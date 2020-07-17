function getHome() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		document.getElementById("main-content").innerHTML =
		this.responseText;
	}
}

xhttp.open("GET", "mainsnippet.html", true);
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

xhttp.open("GET", "projects.html", true);
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

xhttp.open("GET", "aboutus.html", true);
xhttp.send();
}
