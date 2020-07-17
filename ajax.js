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
//var element = document.getElementById("main-content");
//element.innerHTML = xhttp.responseText;
}
