/*  const btn = document.querySelector('.btn');




btn.addEventListener('click', () => {
  myAnimation ();
})

 */
/*

function logger () {
  if(i == 3) {
    clearInterval(timerId);
  }
  console.log('text');
  i++;
}

let id = setTimeout(function log(){
    console.log('helloooo');
    id = setTimeout(log, 1000);
}, 2000);
 */

/* function myAnimation () {
    const box = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
       if (pos == 220) {
         clearInterval(id);
       } else {
         pos++;
         box.style.top = pos + 'px';
         box.style.left = pos + 'px';
       }
    }
} */


const now = new Date();
const ttt = Date.parse('2021-05-01');

console.log(ttt);

/* console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getTimezoneOffset());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getUTCHours()); */

//console.log(Date(now.getTime()));

//Setters


console.log(now.setHours(40));

console.log(now);

console.time('st');

let start = new Date();

for (let i = 0; i < 100000; i++){

  const some = i**3;
}

let end = new Date();
console.timeEnd('st');


console.log(end - start);



