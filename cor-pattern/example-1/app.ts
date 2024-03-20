// Define a base handler interface
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Abstract handler class to provide default implementation for setNext and handle methods
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

// resoonsibility
class ConcreteHandler1 extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "one") {
      //elible request
      return `Handled by ConcreteHandler1: ${request}`;
    } else {
      return super.handle(request);
    }
  }
}

// resoonsibility
class ConcreteHandler2 extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "two") {
      //elible request
      return `Handled by ConcreteHandler2: ${request}`;
    } else {
      return super.handle(request);
    }
  }
}

// resoonsibility
class ConcreteHandler3 extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "three") {
      //elible request
      return `Handled by ConcreteHandler3: ${request}`;
    } else {
      return super.handle(request);
    }
  }
}

// Usage example
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2).setNext(handler3);

console.log(handler1.handle("one")); // Output: Handled by ConcreteHandler1: one
console.log(handler1.handle("two")); // Output: Handled by ConcreteHandler2: two
console.log(handler1.handle("three")); // Output: Handled by ConcreteHandler3: three
console.log(handler1.handle("four")); // Output: null
