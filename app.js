
<<<<<<< HEAD
let input = document.getElementById('main_input');
document.getElementById('btn').onclick = () => console.log(input.value);;
 
=======
let input = document.getElementsByClassName('main_input').input;
console.log(input);
let btn = document.getElementsByTagName('button')
btn.onclick = () => console.log('work');
>>>>>>> c75764413a8166bdd90d392e45f81ee72080c6eb

let a = '123321';
let arr = a.split('').reverse().join('');
console.log('intresult a'+' '+ a)
console.log('result arr'+' '+arr)


let str1 = 'aNna'
function polindrom (str){
    str = str.toLowerCase()
 if (str===str.split('').reverse().join('')){return true}
}
console.log('it`s polindrome'+' '+polindrom(str1))
