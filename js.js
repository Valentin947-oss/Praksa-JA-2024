window.addEventListener('scroll', function() {
	var textbox1 = document.querySelector('.slika1');
	var textbox2 = document.querySelector('.slika2');
	var textbox3 = document.querySelector('.slika3');

	var scrollPosition = window.scrollY;

	// Calculate the scroll position at which you want the elements to appear
	var appearancePosition = 500;

	// Check if the scroll position meets the criteria and modify CSS accordingly
	if (scrollPosition > appearancePosition) {
		slika1.classList.add('visible');
		slika2.classList.add('visible');
		slika3.classList.add('visible');
	}
});