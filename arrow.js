function addItem(num1,num2){
  return num1+num2;
}
const total=addItem(12,12);
console.log(total);

const doubleIt= (num)=>num*2;
const doubleTotal=doubleIt(50);
console.log(doubleTotal);

const num=(x,y)=>x+y;
const numTotal=num(30,20);
console.log(numTotal);

const give5=()=>5;
const result1=give5();
console.log(result1);

const doMath=(x,y)=>{
    const sum=x+y;
    const diff=x-y;
    const result3=sum*diff;
    return result3;

    
}
const result4= doMath(5,4);
console.log(result4);


