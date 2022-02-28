class Observable {
  observers: Array<Function> = [];

  subscribe(func: Function) {
    this.observers.push(func);
  }

  unsubscribe(func: Function) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer(data));
  }
}

const observer1 = (data: any) => {
  console.log(`observer1 fetch data`);
  console.log(data);
};
const observer2 = (data: any) => {
  console.log(`observer2 fetch data`);
  console.log(data);
};

const observable = new Observable();

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.notify("hogehoge");

observable.unsubscribe(observer2);

observable.notify({ hoge: "hoge" });
