const person ={Name:'ben stoke', age:'21',phone:'3536432',live:'khocughet',gf:'emma watson',friends:['dipjol','bulbul','nisha','molla','ghandu'], job:'movie'}


// const gf=person.gf;
// const phone=person.phone;

const {gf,phone,friends}=person;



console.log(gf,phone,friends);
console.log(gf,phone,friends);

const friend=['arman khan','jakir khan','amir khan','yousuf khan','salman khan','sakib khan','sahruk khan'];
const [choto,next, ...otherfriend]=friend;

console.log(choto,next);
console.log(otherfriend);

const complexObject={
    name:'abc',
    info :{
        address:'kolabagan',
        leader: 'tiger babu',
    }
}

const {leader}=complexObject.info;
console.log(leader);
