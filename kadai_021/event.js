// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// ボタンクリック後の処理
btn.addEventListener('click',() => {

  // h2要素の取得・定数への代入
  const h2Text = document.getElementById('text');

  // 非同期処理でh2要素を書き換える
  setTimeout(()=>{
    h2Text.innerHTML='ボタンをクリックしました'},2000);
});