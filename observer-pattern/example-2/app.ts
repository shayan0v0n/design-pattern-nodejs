type FuncType = (x: string) => void;

class Observable {
  protected observers: FuncType[];

  constructor() {
    this.observers = [];
  }

  subscribe(func: FuncType) {
    this.observers.push(func);
  }

  unsubscribe(func: FuncType) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  trigger(data: string) {
    this.observers.forEach((observer) => observer(data));
  }
}

const catSound = (notif: string) => {
  console.log(`${notif} cat sound`);
};

const dogSound = (notif: string) => {
  console.log(`${notif} dog sound`);
};

const obs1 = new Observable();
const obs2 = new Observable();

obs1.subscribe(catSound);
obs1.subscribe(dogSound);
obs2.subscribe(catSound);
obs2.subscribe(dogSound);
obs2.unsubscribe(dogSound);

obs1.trigger("obs 1");
obs2.trigger("obs 2");
