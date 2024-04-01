# Explaintion

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

# Pros

- You avoid tight coupling between concrete products and client code.

- Single Responsibility Principle. You can extract the product creation code into one place, making the code easier to support.

- Open/Closed Principle. You can introduce new variants of products without breaking existing client code.

# Cons

- The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.
