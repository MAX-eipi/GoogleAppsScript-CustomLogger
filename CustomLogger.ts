export enum LogLevel {
    Debug,
    Info,
    Warning,
    Error,
}

export interface CustomLogger {
    log(level: LogLevel, message): void;
    exception(error: Error): void;
}