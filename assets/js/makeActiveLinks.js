var links = document.querySelectorAll('.nav-link');
for (var i = 0; i < links.length; i++) {
	if (links[i].href == window.location.href){
		links[i].classList.add("active");
	}
}