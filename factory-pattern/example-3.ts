// Define an interface for the products
interface Product {
  operation(): string;
}

// Concrete products implementing the Product interface
class ConcreteProduct1 implements Product {
  public operation(): string {
    return "ConcreteProduct1 operation";
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return "ConcreteProduct2 operation";
  }
}

// The factory interface
interface Factory {
  createProduct(): Product;
}

// Concrete factory implementing the Factory interface
class ConcreteFactory1 implements Factory {
  public createProduct(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteFactory2 implements Factory {
  public createProduct(): Product {
    return new ConcreteProduct2();
  }
}

// Client code
function clientCode(factory: Factory) {
  const product = factory.createProduct();
  console.log(product.operation());
}

// Usage
console.log("Client: Using ConcreteFactory1");
clientCode(new ConcreteFactory1());

console.log("");

console.log("Client: Using ConcreteFactory2");
clientCode(new ConcreteFactory2());
