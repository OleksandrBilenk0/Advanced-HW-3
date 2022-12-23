// #1
let number = 1234567890;

function getMaxDigit(number) {
  if(number == 0){
        return 0;
    }
    else{
        return Math.max(number%10, getMaxDigit(Math.floor(number/10)));
    }
}


// #2
let a = 2;
let b = 3;

function pow(a , b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}


// #3
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


// Ще знайшов такий варіант №3 !!!
// const name = "joHn"

// const result = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

// console.log(result)

// #4
const tax = 18 + 1.5;

function getSalaryAfterTax(salary , tax) {
    return result = salary - (salary / 100 * tax);
}



// #5
function getRandomNumber(N , M) {
    return Math.floor(Math.random() * (M - N + 1)) + N;
}


// #6
function countChars_short(str,) {
    return str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
}


// #11
function deleteLetters(str,letter){
    return str.replaceAll(letter,'');
}



console.log('Функція #1 - ', getMaxDigit(number));
console.log('Функція #2 - ', (pow(a, b)));
console.log('Функція #3 - ', (ucFirst("JOhnSOn")));
console.log('Функція #4 - ', (getSalaryAfterTax(1000, tax)));
console.log('Функція #5 - ', (getRandomNumber(1, 10)));
console.log('Функція #6 - ', (countChars_short("Абревіатура")));
console.log('Функція #11 - ', (deleteLetters("blablabla", "a")));