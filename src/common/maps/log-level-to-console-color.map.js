import { LogLevel } from "../enums/enums.js";

const LogLevelToConsoleColor = {
  [LogLevel.LOG]: "\x1b[32m",
  [LogLevel.WARNING]: "\x1b[33m",
  RESET: "\x1b[0m",
};

export { LogLevelToConsoleColor };
