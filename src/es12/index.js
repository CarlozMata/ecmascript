const string = "JavasScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

//////////////////////////////////////////////////////////////////////////////

class Message {
  #show(val) {//Para volverlo metodo privado se pone "#"
    console.log(val);
  };
  get #add(val) {
    ...
  }
}

const message = new Message();
message.show('Hola!');

//////////////////////////////////////////////////////////////////////////////

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

//////////////////////////////////////////////////////////////////////////////

class anyClass {
  constructor(element) {
  this.ref = new WeakRef(element)
  }
  { ... }
}
//////////////////////////////////////////////////////////////////////////////

leet isTrue = tru;
leet isFalse = false;
console.log(isTrue &&= isFalse);

leet isTrue = tru;
leet isFalse = false;
console.log(isTrue ||= isFalse);

leet isTrue = undefined;
leet isFalse = false;
console.log(isTrue ??= isFalse);

//////////////////////////////////////////////////////////////////////////////
