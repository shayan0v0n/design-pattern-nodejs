interface Product {
  deliver(): string;
  back(): string;
}

abstract class LogisitcFactory {
  public abstract factoryMethod(): Product;

  public deliverOperation(): string {
    const product = this.factoryMethod();
    return `delivering ${product.deliver()}`;
  }

  public backOperation(): string {
    const product = this.factoryMethod();
    return `getting back ${product.back()}`;
  }
}

class RoadLogistics extends LogisitcFactory {
  public factoryMethod(): Product {
    return new Truck();
  }
}

class SeaLogistics extends LogisitcFactory {
  public factoryMethod(): Product {
    return new Ship();
  }
}

class Ship implements Product {
  public deliver(): string {
    return "{deliver of the Ship}";
  }

  public back(): string {
    return "{back of the Ship}";
  }
}

class Truck implements Product {
  public deliver(): string {
    return "{deliver of the Truck}";
  }

  public back(): string {
    return "{back of the Truck}";
  }
}

function clientCode(logisitcFactory: LogisitcFactory) {
  console.log("deliver vehicle...");
  console.log(logisitcFactory.deliverOperation());
  console.log("back vehicle...");
  console.log(logisitcFactory.backOperation());
  console.log("");
  console.log("");
}

console.log("App: Launched with the RoadLogistics.");
clientCode(new RoadLogistics());

console.log("");

console.log("App: Launched with the SeaLogistics.");
clientCode(new SeaLogistics());
