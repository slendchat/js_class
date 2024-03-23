const test_obj = {
  balance:100,
  rate:10,
  count_rate(){
    this.balance += this.balance * (this.rate/100);
  }
}

console.log(test_obj);
test_obj.count_rate();
console.log(test_obj);

let {balance: b,rate: x} = test_obj;

person = {};

Object.assign(person,test_obj);

person.count_rate();
console.log(person);