import { LogLevel } from "../enums/enums.js";

const logLevelToConsoleColor = {
  [LogLevel.LOG]: "\x1b[32m",
  [LogLevel.WARNING]: "\x1b[33m",
  reset: "\x1b[0m",
};

export { logLevelToConsoleColor };
