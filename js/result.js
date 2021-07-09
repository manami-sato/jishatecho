{

	const tab = document.querySelectorAll(".tab");
	const tabLink = document.querySelectorAll(".tabLink");
	for (let i = 0; i < tab.length; i++) {
		tab[0].classList.add("tabAdd");
		tabLink[0].classList.add("tabLinkAdd");
		tabLink[i].onclick = function(){
			let tabA = document.querySelector(".tabAdd");
			let tabLinkA = document.querySelector(".tabLinkAdd");
			tabA.classList.remove("tabAdd");
			tabLinkA.classList.remove("tabLinkAdd");
			tab[i].classList.add("tabAdd");
			tabLink[i].classList.add("tabLinkAdd");
		}
	}

	const filter = document.querySelectorAll(".filter");
	for (let i = 0; i < filter.length; i++) {
		let filterCount = 0;
		filter[i].onclick = function(){
			filterCount ++;
			if( filterCount %2 !== 0){
				filter[i].classList.add("filterAdd");
			}if(filterCount %2 === 0){
				filter[i].classList.remove("filterAdd");
			}
		}
	}

}