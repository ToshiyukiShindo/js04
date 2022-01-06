'use strict'
let url = 'https://pixabay.com/api/?key=25111984-bb0d282d458c28cf67632de67&per_page=200';
let numArr = [];

// ランダムな９つの数値による配列を作成（重複なし）
for (let j=0; j<8;j++){
    while(true){
        let num = Math.floor(Math.random()*200);
        if(!numArr.includes(num)){
            numArr.push(num);
            break;
        }
    }
}    

// APIで画像を取得し、配列に含まれた番号の画像をページに表示する
fetch( url )
.then( function( data ) {
    return data.json();  //JSONデータとして取得
})
.then( function( json){
    for(let i=0; i<8;i++){
        const img = document.createElement('img');
        img.src = `${json.hits[numArr[i]].largeImageURL}` 
        document.getElementById('gallary').append(img);
    }
    // クリックした絵を拡大する
    const onImgs = document.querySelectorAll('img');
    onImgs.forEach(onImg=>{
        onImg.addEventListener('click',()=>{
            imgNarrower();
            onImg.classList.add('active');
        });
    });
    function imgNarrower(){
    onImgs.forEach(onImg=>{
            onImg.classList.remove('active');
        });
    };
})
