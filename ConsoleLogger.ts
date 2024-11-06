class ConsoleLogger implements CustomLogger {
    log(level: LogLevel, message: object): void {
        switch (level) {
            case LogLevel.Debug:
                console.log(message);
                break;
            case LogLevel.Info:
                console.info(message);
                break;
            case LogLevel.Warning:
                console.warn(message);
                break;
            case LogLevel.Error:
                console.error(message);
        }
    }
    exception(error: Error): void {
        console.error(error);
    }

}
