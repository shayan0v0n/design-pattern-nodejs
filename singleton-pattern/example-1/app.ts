class Singleton {
  private static instance: Singleton | null = null;
  private sum: number = 0;

  public static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }

  public inc() {
    this.sum += 1;
  }

  public dec() {
    this.sum -= 1;
  }

  public indicate(): number {
    return this.sum;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);

instance1.inc();
instance1.inc();
instance1.inc();
instance2.dec();
instance2.dec();

console.log(instance2.indicate());
