{

	function switchByWidth(){
    if (window.matchMedia('(max-width: 999px)').matches) {
			// 
			// スマホ版header
			// 
			const header = document.querySelector("header");
			(function() {
				let height     = 50;
				let offset       = 0,
						lastPosition = 0,
						ticking      = false;
				function onScroll() {
					if (lastPosition > height) {
						if (lastPosition > offset) {
							header.style.transform = "translateY(-55px)";
						} else {
							header.style.transform = "translateY(0)";
						}
						offset = lastPosition;
					}
				}
				window.addEventListener('scroll', function(e) {
					lastPosition = window.scrollY;
					if (!ticking) {
						window.requestAnimationFrame(function() {
							onScroll(lastPosition);
							ticking = false;
						});
						ticking = true;
					}
				});
			})();
			// 
			// prefNav(スマホ版ヘッダー左部分)
			// 
			const leftList = document.querySelector(".prefNav");
			const leftBtn = document.querySelector(".prefNavBtn");
			const background = document.querySelector(".background");
			let leftCount = 0;
			console.log(leftList);
			console.log(leftBtn);
			leftBtn.addEventListener("click",()=>{
				leftCount++;
				if (leftCount %2 !== 0){
					console.log("ok");
					leftList.style.transform = "translate(0)";
					leftList.style.transition = "0.5s";
					background.style.display = "block";
				}else{
					leftList.style.transform = "translate(-100%)";
					leftList.style.transition = "0.5s";
					background.style.display = "none";
				}
			});
		}if (window.matchMedia('(min-width: 1000px)').matches) {
			// 
			// spotGrid
			// 
			let spotInfo = document.querySelectorAll(".spotInfo");
			for (let i = 0; i < spotInfo.length; i++) {
				// window.addEventListener('load') HTMLが完全に読み込まれた時に実行する
				spotInfo[i].style.opacity = "0";
				spotInfo[i].onmouseover = function(){
					spotInfo[i].style.opacity = "1";
					spotInfo[i].style.transition = "0.3s";
				};
				spotInfo[i].onmouseout = function(){
					spotInfo[i].style.opacity = "0";
					spotInfo[i].style.transition = "0.3s";
				};
			}
			// 
			// #back
			// 
			const back = document.getElementById("back");
			window.addEventListener("scroll", function(){
				let scroll = window.pageYOffset;
				let height = 350;
				if (scroll>height){
					// console.log("ok");
					back.style.transform = "translateY(0)";
				}else{
					back.style.transform = "translateY(200px)";
				}
			});
			
		}
	}
	window.onload = switchByWidth;
	window.onresize = switchByWidth;


  // 
  // 右カラム
  // 
	const pref = document.querySelectorAll(".pref");
	const prefBtn = document.querySelectorAll(".prefBtn");
	const spotList = document.querySelectorAll(".spotList");
  for(let i = 0 ; i < pref.length ; i++){
		let count = 0;
    pref[i].addEventListener("click", function(){
			count++;
      if(count % 2 !== 0){
        spotList[i].style.display = "block";
        prefBtn[i].classList.add("prefBtn2");
      }else{
        spotList[i].style.display = "none";
        prefBtn[i].classList.remove("prefBtn2");
      }
    });
	}

	// 
	// 検索
	// 
	let color1 = "#666";
	let color2 = "#fafafa";
	const search = document.querySelectorAll(".search");
	const searchTxt = document.querySelectorAll(".searchTxt");
	searchTxt.onfocus = function(){
		search.style.background = color1;
	}
	searchTxt.onblur = function(){
		search.style.background = color2;
	}

}
