class CustomLogManager {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() { }

    private static _loggers: CustomLogger[] = [];

    public static isDevelopment = false;

    public static addLogger(logger: CustomLogger): void {
        this._loggers.push(logger);
    }
    public static removeLogger(predicate: (logger: CustomLogger) => boolean): void {
        this._loggers = this._loggers.filter(x => !predicate(x));
    }

    public static log(level: LogLevel, message): void {
        if (level === LogLevel.Debug && !this.isDevelopment) {
            return;
        }

        for (const logger of this._loggers) {
            logger.log(level, message);
        }
    }

    public static assert(condition: boolean, message): void {
        if (!condition) {
            for (const logger of this._loggers) {
                logger.log(LogLevel.Error, message);
            }
        }
    }

    public static exception(error: Error): void {
        for (const logger of this._loggers) {
            logger.exception(error);
        }
    }
}
