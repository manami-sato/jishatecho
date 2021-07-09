{

	let headImgs = document.querySelectorAll(".indexHeaderImg>li");
	window.addEventListener("load",function(){
		headImgs[i].setAttribute("id","indexHeaderImgAdd");
	});
	let i = 0;
	setTimeout("imgChange()",5000);
	function imgChange(){
		// カウントが最後まで行った時
		if(i >= headImgs.length -1){
			headImgs[i].removeAttribute("id");
			i = 0;
			headImgs[i].setAttribute("id","indexHeaderImgAdd");
		}else{
			headImgs[i].removeAttribute("id");
			i++;
			headImgs[i].setAttribute("id","indexHeaderImgAdd");
		}
		setTimeout("imgChange()",5000);
	}

}