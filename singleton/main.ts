import Counter from "./counter";

const instance = Counter.getInstance();

console.log(instance.getCount());

instance.decrement();

console.log(instance.getCount());
const instance2 = Counter.getInstance();
console.log(instance2.getCount());

instance2.decrement();
console.log(instance.getCount());
console.log(instance2.getCount());

//  Cannot add property hoge, object is not extensible
// (instance2 as any).hoge = 9;
