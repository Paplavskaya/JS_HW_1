let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3';
let a4 = '5' - 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
let a12 = 5 - 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;

console.log(a1, typeof a1);  
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

let height = 23;
let width = 10;
let SPryam = height * width;
console.log(`Площадь прямоугольника равна ${SPryam}`);

let hCilindra = 10;
let VCilindra = Math.PI * hCilindra * a7 ** 2 / 4;
console.log(`Объем цилиндра равен ${VCilindra}`);

let r = 5;
let SKruga = Math.PI * r ** 2;
console.log(`Площадь круга равна ${SKruga}`);

let aTrap = 5;
let bTrap = 7;
let hTrap = 10;
let STrap = (aTrap + bTrap) * hTrap / 2;
console.log(`Площадь трапеции равна ${STrap}`);

let S = 2;
let p = 10 / 100;
let years = 5;
let Pereplata = S * p * years;
console.log(`Переплата по кредиту равна ${Pereplata} млн.руб`);

let a = 8;
let b = 3;
let equations1 = (16 - a) / 2 + b;
let equations2 = (15 * b - a) / (6 - b);
let equations3 = 23780 / (3 + a + b);
console.log(`${equations1} ${equations2} ${equations3}`);