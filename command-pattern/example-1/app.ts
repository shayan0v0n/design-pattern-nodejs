class BaseCommand {
  run(): void {
    throw new Error("not implemented");
  }
}

class LogCommand extends BaseCommand {
  protected msg: string;
  constructor(msg) {
    super();
    this.msg = msg;
  }

  run(): void {
    console.log(`Log (${this.msg}) from (LogCommand)`);
  }
}

class WelcomeCommand extends BaseCommand {
  protected msg: string;
  protected lvl: string;
  constructor(msg, lvl) {
    super();
    this.msg = msg;
    this.lvl = lvl;
  }

  run(): void {
    console.log(`Log (${this.msg}, ${this.lvl}) from (WelcomeCommand)`);
  }
}

let commands = [
  new LogCommand("this is log 1"),
  new LogCommand("this is log 2"),
  new WelcomeCommand("wecome", "level 1"),
  new WelcomeCommand("wecome", "level 2"),
];

commands.forEach((c) => c.run());
