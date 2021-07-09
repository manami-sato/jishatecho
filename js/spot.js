{


  // window.addEventListner("load",function(){
  //  ここに書くと確実性が上がる
  // });
  // 関数サンプル
  // const func = (a,b) => {
  //   console.log(a + b); // a + bの結果が表示
  // }
  // func(1,1);
  // func(2,5);






  // next,prev 
  const imageChange = (small, large) => {

    const imgs = document.querySelectorAll(".mainImg>ul>li");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const thumbnail = document.querySelectorAll(".thumbnail>li");
    let count1 = 0;

    let smallSize = small;
    let largeSize = large;
    // console.log(smallSize, largeSize);

    const imgGet = () =>{
      imgs[count1].style.display = "flex";
      imgs[count1].style.width = "100vw";
      imgs[count1].style.justifyContent = "center";
      thumbnail[count1].style.width = `${large}%`;
      // 数値 + 数値 = 計算された数値
      // 数値 + 文字 = 連結された文字列
      // 1 + "hello" = 1hello
    }
    const imgRemove = () =>{
      imgs[count1].style.display = "none";
      thumbnail[count1].style.width = `${small}%`;
    }

    next.addEventListener("click",function(){
      // 最後の要素をクリックした
      if(count1 >= imgs.length -1){
        imgRemove();
        count1 = 0;
        imgGet();
      } else {
        // 現在表示してる要素を消す
        imgRemove();
        count1++
        imgGet();
      }
    });
    prev.addEventListener("click",function(){
      // 最初の要素をクリックした
      if(count1 <= 0){ 
        imgRemove();
        count1 = imgs.length - 1;
        imgGet();
      } else {
        // 現在表示してる要素を消す
        imgRemove();
        count1--;
        imgGet();
      }
    });

    // const thumbnailAdd = document.getElementById("thumbnailAdd");
    // for (let thumbnailCount = 0; thumbnailCount < thumbnail.length; thumbnailCount++) {
    //   thumbnail[thumbnailCount].addEventListener("click",function(){
    //     thumbnailAdd.style.width = `${small}%`;
    //     thumbnailAdd.removeAttribute("id");
    //     thumbnail[thumbnailCount].style.width = `${large}%`;
    //     thumbnail[thumbnailCount].setAttribute("id","thumbnailAdd");
    //     console.log(thumbnailAdd);
    //   });
    // }

  }





  function switchByWidth(){
    if (window.matchMedia('(max-width: 999px)').matches) {
      // 
      // スマホ版
      // 
      imageChange(25,30);

      const fix = document.querySelector(".fix");
      window.addEventListener("scroll",function(){
        let scroll = window.pageYOffset;
        // console.log(scroll);
        // let scrollEnd = document.querySelector(".phoneFooter").offsetTop;
        // console.log(scrollEnd);
        // console.log(scroll);
        // 実数値じゃなくて、オブジェクトの座標で指定したほうがいい
        if(scroll > 200){
          fix.style.transform = "translateY(0)";
        }
        if(scroll<249){
          fix.style.transform = "translateY(100px)";
        }
        if(scroll>1200){
          fix.style.transform = "translateY(100px)";
        }
      });
      // 
      // fixList
      // 
      const list = document.querySelector(".fixList");
      const listTxt = document.querySelector(".fixList>p");
      const fixListIcon = document.querySelector(".fixListIcon");
      const borderAdd = "3px #7f3838 solid";
      const borderRemove = "3px #aaa solid";
      let count2 = 0;
      list.addEventListener("click",function(){
        count2++;
        if(count2 % 2 !== 0){
          // ボーダースタイルは変数化する
          fixListIcon.style.borderBottom = borderAdd;
          fixListIcon.style.borderRight = borderAdd;
          listTxt.innerHTML = "リストに追加しました";
        }else{
          fixListIcon.style.borderBottom = borderRemove;
          fixListIcon.style.borderRight = borderRemove;
          listTxt.innerHTML = "気になるリスト";
        }
      });

      // 
      // SNSボタンクリック時
      // 
      const shere = document.querySelector(".fixShere");
      const shereBtn = document.querySelector(".fixShereBtn");
      const background = document.querySelector(".background");
      const remove = () =>{
        shereBtn.style.transform = "translateY(200px)";
        background.style.display = "none";
        shereBtn.classList.add('ogura');
      }
      shere.addEventListener("click",function(){
        // 消す処理
        if(shereBtn.classList.contains('ogura')) {
          // 表示処理
          shereBtn.style.transform = "translateY(0)";
          background.style.display = "block";
          shereBtn.classList.remove('ogura');
        } else {
          remove();
        }
      });
      // 背景クリック時
      background.addEventListener("click",function(){
        if(!shereBtn.classList.contains('ogura')) {
          remove();
        }
      });
    } else if (window.matchMedia('(min-width:1000px)').matches) {
      // 
      // PC版
      // 
      imageChange(85,100);
      // 
      // 気になるリスト
      // 
      const check = document.querySelector(".check");
      const checkBtn = document.querySelector(".st0");
      const onColor = "#7f3838";
      const outColor = "#aaaaaa";
      let checkCount = 0;
      check.addEventListener("click", function(){
        checkCount ++;
        if(checkCount %2 !== 0){
          check.classList.add("checkAdd");
          checkBtn.style.fill = onColor;
        }if(checkCount %2 === 0){
          check.classList.remove("checkAdd");
          checkBtn.style.fill = outColor;
        }
      });
      /*
        // 
        // changeBtn
        // 
        let cb2 = document.querySelectorAll(".cb2");
        let boxDisplay = document.getElementById("boxDisplay");
        let box = document.querySelectorAll(".changeBtnBox>div");
        for (let i = 0; i < cb2.length; i++) {
          cb2[i].onclick = function(){
            // console.log(boxDisplay);
            boxDisplay.removeAttribute('id');
            console.log(boxDisplay);
            box[i].setAttribute('id','boxDisplay');
          }
        };
      */
      const spotShere = document.querySelector(".spotShere");
      const back = document.getElementById("back");
      window.addEventListener('scroll', ()=> {
        let scroll = window.pageYOffset;
        // console.log(scroll);
        if(scroll>300){
          spotShere.style.transform = "translateX(0)";
        }else{
          spotShere.style.transform = "translateX(100px)";
        }
        if (scroll>350){
					back.style.transform = "translateY(0)";
				}else{
					back.style.transform = "translateY(200px)";
				}
      });
    }
  }
  //ロードとリサイズの両方で同じ処理を付与する
  window.onload = switchByWidth;
  window.onresize = switchByWidth;
}