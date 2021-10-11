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



/* console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getTimezoneOffset());
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getUTCHours()); */

//console.log(Date(now.getTime()));

//Setters




/* let start = new Date();

for (let i = 0; i < 100000; i++){

  const some = i**3;
}



let end = new Date();
console.timeEnd('st');


console.log(end - start); */

/* 
function show(a, b) {
   console.log(this);
   function sum() {
      console.log(this);
      return a + b;
   }
   console.log(sum());
}


show(4, 5); */

/* const obj = {
  a: 20,
  b: 15,
  sum: function() {
    console.log(this);

    function shout() {
      console.log(this);
    }
    shout();
  }
}

obj.sum(); */

/* function sayUser(surname) {
    console.log(this );
    console.log(this.name + surname);
    
}

let ivan = {
  name: 'Jony'
};

sayUser.call(ivan, ' smit');
sayUser.apply(ivan, [' smit']);

console.log(ivan);

function count(num) {
  return this * num;
}

let double = count.bind(10);
console.log(double(4)); */

'use strict';

/* const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  console.log(this);
  e.target.innerText = 'Oii';
}); */

/* const obj = {
  num: 5,
  sayNum: function() {
      const say = () => {
        console.log(this.num);
      }
      say();
  }
}

obj.sayNum(); */

/* 
//concept
const div = document.querySelector('.div');


class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    calcArea() {
      return this.width * this.height;
    }
    render() {

    }
}

//extend

class RectangleWithText extends Rectangle {
    constructor(height, width, color, text) {
        super(height, width, color, text);  // allways first in construct
        this.text = text;
    }
    showProps() {
      console.log(`text : ${this.text}, color : ${this.color}`);
    }

}

//copy
const squera = new Rectangle(100, 200, 'red');
const long = new Rectangle(200, 2000, 'blue');

const element = new RectangleWithText(250, 100, 'red', 'this is text');
element.showProps();
console.log(element);
//console.log(long);



 */
/* 
const person = {
  name: 'Alex',
  tel: '+7521478632',
  parents: {
            mom: 'Olga',
            dad: 'Danil'
          },
  say() {
    console.log(this)
  }
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = 'Tertuha';

console.log(clone);
console.log(person);
 */

const inputUsd = document.getElementById('usd'),
      inputUah = document.getElementById('uah');

inputUah.addEventListener('input', () => {
    const requst = new XMLHttpRequest();

    requst.open('GET', 'current.json');
    requst.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    requst.send();

    requst.addEventListener('readystatechange', () => {
      if (requst.status === 200) {
          console.log(requst.response);
          const data = JSON.parse(requst.response);
          inputUsd.value = (+inputUah.value * data.current.usd).toFixed(1); 
      } else {
        inputUsd.value = 'Vait or try later';
      }

    });

    //load if requset loaded fuulifile
    //status
    //status text
    //response
    //readyState

});
