{

	// 
	// マイページ タブ
	// 
	let tab = document.querySelectorAll(".tab");
	let tabLink = document.querySelectorAll(".tabLink");
	// ES6 = forEach
	
	// tab.forEach(function(el) {
	// 	console.log(el)
	// })
	
	// for (let i = 0; i < tab.length; i++) {
	// 	console.log(tab[i]);
	// }

	for (let i = 0; i < tab.length; i++) {
		tabLink[i].addEventListener("click",function(){
			let tabA = document.getElementById('tabAdd');
			let tabLinkA = document.querySelector('#tabLinkAdd');
			tabA.removeAttribute('id');
			tabLinkA.removeAttribute('id');
			tabLink[i].setAttribute('id','tabLinkAdd');
			tab[i].setAttribute('id','tabAdd');
		});
	}

}