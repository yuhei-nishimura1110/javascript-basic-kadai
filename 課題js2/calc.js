//numの宣言代入
let num = Math.floor(Math.random() * 99)+1;

/*
//条件分岐
if(num % 3 === 0 && num % 5 !== 0 ){
    console.log('3の倍数です')
};

if(num % 3 !== 0 && num % 5 === 0 ){
    console.log('5の倍数です')
};

if(num % 3 === 0 && num % 5 === 0 ){
    console.log('3と5の倍数です')
};

if(num % 3 !== 0 && num % 5 !== 0 ){
    console.log(num)
};
*/

//条件分岐
if (num % 3 === 0){
    if(num % 5 ===0){
        console.log('3と5の倍数です')
    }
    else{
        console.log('3の倍数です')
    }
}
else if (num % 5 ===0){
    console.log('5の倍数です')

}
else{
    console.log(num)
}