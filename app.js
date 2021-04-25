let input = document.getElementById('main_input');
document.getElementById('btn').onclick = () => {
    console.log(input.value)
    polindrom (input.value)
    input.value = ''};
 
// test function
// let a = '123321';
// let arr = a.split('').reverse().join('');
// console.log('intresult a'+' '+ a)
// console.log('result arr'+' '+arr)

function polindrom (str){
    str = str.toLowerCase()
    if (str===str.split('').reverse().join(''))
    {return console.log('it`s polindrome')}
    else {console.log('it`s not polindrome')}
    };
    
console.log('work end');