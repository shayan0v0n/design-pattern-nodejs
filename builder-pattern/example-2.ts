class User {
  public name: string;
  public email?: string;
  public age?: number;

  constructor(name: string, email?: string, age?: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class UserBuilder {
  public user: User;

  constructor(name: string) {
    this.user = new User(name);
  }

  setEmail(email: string) {
    this.user.email = email;
    return this;
  }

  setAge(age: number) {
    this.user.age = age;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder("shayan")
  .setEmail("shayanwqhw@gmal.com")
  .setAge(18)
  .build();

console.log(user);
