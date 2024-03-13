# What is command pattern?

In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
on the other hand, Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

# Real-World Analogy.

After a long walk through the city, you get to a nice restaurant and sit at the table by the window. A friendly waiter approaches you and quickly takes your order, writing it down on a piece of paper. The waiter goes to the kitchen and sticks the order on the wall. After a while, the order gets to the chef, who reads it and cooks the meal accordingly. The cook places the meal on a tray along with the order. The waiter discovers the tray, checks the order to make sure everything is as you wanted it, and brings everything to your table.

The paper order serves as a command. It remains in a queue until the chef is ready to serve it. The order contains all the relevant information required to cook the meal. It allows the chef to start cooking right away instead of running around clarifying the order details from you directly.

# what's command pattern point?

Encapsulation of Requests: Commands encapsulate requests as objects, allowing them to be passed around like any other object. This encapsulation includes all the necessary information for executing the request.

Decoupling Sender and Receiver: The Command Pattern decouples the sender (invoker) of a request from the receiver (executor) by introducing an intermediate object. The sender doesn't need to know anything about how the request is executed; it simply invokes the command, leaving the details to the command itself.

Parameterization: Commands can be parameterized with additional data if needed. This allows for flexibility in executing different requests with varying parameters without altering the command or the invoker.

Undo/Redo Operations: Commands can often support undo and redo operations by maintaining state information or by providing reverse commands.

Queuing and Logging: Commands can be queued, logged, or stored for later use, enabling features like transactional behavior, audit trails, or macro recording.

Flexibility and Extensibility: The Command Pattern makes it easy to add new commands without modifying existing code. It promotes a more modular and flexible design, as new commands can be introduced without affecting other parts of the system.
