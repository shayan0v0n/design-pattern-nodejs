// Interface representing the type of objects to be created
interface Animal {
  speak(): void;
}

// Concrete classes implementing the Animal interface
class Dog implements Animal {
  speak(): void {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  speak(): void {
    console.log("Meow!");
  }
}

// Simple factory class responsible for creating Animal objects // our factory class
class AnimalFactory {
  // Method to create Animal objects based on the provided type
  static createAnimal(type: string): Animal {
    switch (type) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      default:
        throw new Error("Invalid animal type.");
    }
  }
}

// Client code using the factory to create objects
const dog = AnimalFactory.createAnimal("dog");
dog.speak(); // Output: Woof!

const cat = AnimalFactory.createAnimal("cat");
cat.speak(); // Output: Meow!

// Trying to create an invalid animal type
try {
  const lion = AnimalFactory.createAnimal("lion");
} catch (error) {
  console.error(error.message); // Output: Invalid animal type.
}
