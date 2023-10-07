// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// クリック後の表示を変化させる
btn.addEventListener('click', () => {
  
  // h2要素の中身を取得し、定数に代入する
  const h2Text = document.getElementById('text');

  // textを書き換える
  h2Text.innerHTML ='ボタンをクリックしました';
});