function mobileNav() {


	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-nav-btn');
	const mobileNavFade = document.querySelector('.mobile-nav-fade');
	const nav = document.querySelector('.mobile-nav');

	navBtnOpen.onclick = function () {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}


	function closeMobileNav() {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}

	// navBtnClose.onclick = function () {
	// 	nav.classList.remove('mobile-nav--open');
	// 	mobileNavFade.classList.remove('mobile-nav-fade--open');
	// 	document.body.classList.toggle('no-scroll');
	// }

	navBtnClose.onclick = closeMobileNav;

	mobileNavFade.onclick = closeMobileNav;
}

export default mobileNav;