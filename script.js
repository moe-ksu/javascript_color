// JavaScript
//console.log('Hello world!');
//console.log(document.getElementById('myColor').value);
//document.getElementById('ID名')　　.value:値を取得
//document.getElementById('bodyText').textContent = '文字の置き換え';

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//text.textContent = color.value;

function changeColor(){
    // カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent = 'カラーコード：' + color.value + '(white)';
    } else if (color.value === '#000000') {
        text.textContent = 'カラーコード：' + color.value + '(black)';
    } else {
        text.textContent = 'カラーコード：' + color.value;
    }

    // 背景色を変更
    document.body.style.backgroundColor = color.value;
}

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);