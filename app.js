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

/* const inputUsd = document.getElementById('usd'),
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
*/
/* 
console.log('pending');

const req = new Promise(function(resolve, reject) {
  setTimeout( ()=>{
    console.log('prepaining');
  
    const product = {
        name : 'TV',
        price: 2000
    };
  
        resolve(product);
  }, 2000);

}).then((product) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
          },2000);
      });
     
  }).then(data => {
      data.modify = true;
      return data;
    
  }).then((data) => {
    console.log(data);
  }).catch(() => {
      console.error('error was find')
  }).finally(() => {
      console.log('finaly');
  });
  
   */

/*   const test = time => {
      return new Promise(resolve => {
          setTimeout(() => {resolve()}, time);
      });
  }; */
  
/* test(1000).then(()=> console.log('1000'));
test(2000).then(()=> console.log('2000')); */

/* Promise.all([test(1000), test(2000)]).then(() => {
    console.log('then');
}); */

/* Promise.race([test(1000), test(2000)]).then(() => {
    console.log(test);
}); */


//working with ARRAY method
/* 

const names = ['anna' , 'sergey', 'Ksenia', 'ket', 'Voldemar'];

const shortNames = names.filter( item => item.length < 5);


console.log(shortNames);

//map

let result = ['IvaN', 'LidNNAd', 'FsjfHKJ ', 'sdgsgHHk'];

result = result.map(item => item.toLowerCase());

console.log(result);


//every/some boolean return

const some = [4, 4];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

 */
//reduce

/* const numbers = [4, 50, 1, 3, 1, 2];

const summ = numbers.reduce((accum, item) => item + accum);

console.log(summ); */


/* const numbers = ['tomat', 'pear', 'orange','apple'];

const summ = numbers.reduce((accum, item) =>` ${accum}, ${item}`, 45);

console.log(summ);


const obj = {
  ivan :'persone',
  anna: 'persone',
  dog: 'pet',
  cat: 'pet'
};

console.log(Object.entries(obj)
        .filter(item => item[1] == 'persone')
        .map((item) => item[0])); */

// getters and setters

/* const persone = {
    name: 'Alex',
    age : 26,

  get userAge() {
        return this.age;
  },
  set userAge(num) {
      this.age = num;
  }
};

console.log(persone.userAge);
console.log(persone.userAge = 30);
console.log(persone.userAge);
 */
class User {
    constructor(name, age){
        this.name = name;
        this._age = age;
    }
    #surname = 'Rasolni';

    say = () => console.log(`My name: ${this.name} ${this.#surname} age: ${this._age}`);
    get age() {
        return this._age;
    }
    set age(age) {
       if (typeof age === 'number' && age > 0 && age < 110) {
           this._age = age;

       } else {
           console.log('bad data');
       }
    }
}

const ivan = new User('Ivan', 26);

ivan.say();
