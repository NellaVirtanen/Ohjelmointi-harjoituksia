function laskutehtava(ekaNumero, tokaNumero, kolmasNumero, neljasNumero){
 return ekaNumero + tokaNumero + kolmasNumero + neljasNumero; 
}

const name = 'Nella';
console.log (name);

let age = 24;
console.log (age);

const student=true;
const school = studen = true ? 'opiskelija!' : 'ammattilainen!';

const tervehdys = `Hei sivuilleni surffaaja, olen ${name} ja olen ${age} vuotias`;

console.log (tervehdys + ' ' + school);

const kaverit = ['Brad Terry', 'Simon Anderson', 'Rini Mayers', 'Henna Virta'];
console.log(kaverit);

const ystavani = [
{
  kaveri: '1. Brad Terry'
},
{
  kaveri: '2. Simon Anderson'
},
{
  kaveri: '3. Rini Mayers'
},
{
  kaveri: '4. Henna Virta'
}
];

console.log (ystavani);

const perhe = [
{
  id: 1,
  perhenimi: 'Terhi',
  perheika: 51,
  taysiika: true
},
{
  id: 2,
  perhenimi: 'Emma',
  perheika: 23,
  taysiika: true
},
{
  id: 3,
  perhenimi: 'Anni',
  perheika: 19,
  taysiika: true
},
{
  id: 4,
  perhenimi: 'Vili',
  perheika: 16,
  taysiika: false
}
];

for(let i=18; i<perhe.length; i++){
console.log(perhe[i].perhenimi);
}

const perheenJasenet = perhe.map(function(perheen){
 return perheen.perhenimi;
});

console.log(perheenJasenet);

const aikuisetJasenet = perhe.filter(function(perheen){
return perheen.taysiika === true;
}).map(function(perheen){
 return perheen.perhenimi;
});

console.log(aikuisetJasenet);

const nuoretJasenet = perhe.filter(function(perheen){
return perheen.taysiika === false;
}).map(function(perheen){
 return perheen.perhenimi;
});

console.log(nuoretJasenet);

const perheenIat = perhe.map(function(perheen){
 return perheen.perheika;
});

console.log (perheenIat);

console.log ('Perheen yhteen laskettu ikä on:' + ' ' + laskutehtava(16, 19, 23, 51));