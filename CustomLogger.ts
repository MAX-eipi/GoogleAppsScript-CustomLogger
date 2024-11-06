interface CustomLogger {
    log(level: LogLevel, message): void;
    exception(error: Error): void;
}
