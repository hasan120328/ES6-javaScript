
class Parents{
    constructor(){
        this.fatherName="liyakot ali kha";
    }
}
class Child extends Parents{
    constructor(name){
        super();
         this.name=name;
    }
    getName(){
        return this.name+ " "+this.fatherName;
    }
}

const baby=new Child("shuvo");
const baby2=new Child("arman");
console.log(baby.getName());
console.log(baby2.getName());
