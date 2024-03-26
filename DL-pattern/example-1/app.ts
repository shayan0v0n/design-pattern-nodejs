class Logger {
  protected logs: string[] = [];

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }

  showLogs() {
    console.log(this.logs);
  }
}

class UserService {
  constructor(private readonly logger: Logger) {}

  createUser(username: string) {
    this.logger.log(`createUser method called`);
    this.logger.log(`User '${username}' created.`);
    this.logger.showLogs();
  }
}

// Application entry point
const logger = new Logger();
const userService = new UserService(logger);

userService.createUser("john_doe");
