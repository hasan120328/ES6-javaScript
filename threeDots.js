const ages1=[12,13,14,15,16,17,18,19];
const ages2=[21,23,35,43,33];
const ages3=[44,46,56,45,55];
const allAges= ages1.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

const allAges1= [...ages1, ...ages2,5, ...ages3];
console.log(allAges1);

const sojib=567;
const minister=578;
const police=490;
const maximum=Math.max(sojib,minister,police);
console.log(maximum);

const takapoisa=[12,124,35,64,3,7654,21,66,21,44];
const maxTaka=Math.max(...takapoisa);
console.log(maxTaka);