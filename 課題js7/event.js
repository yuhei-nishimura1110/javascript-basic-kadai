//定義
const addbtn = document.getElementById('btn');
const addtext = document.getElementById('text');



addbtn.addEventListener('click', () => {
    setTimeout(() => {
        addtext.textContent = 'ボタンをクリックしました';
    },2000)
});

