import { RedisLog,GrayLog } from "./utils.js";

abstract class LoggerService {
    abstract createLog: (logObject: object) => void;
  }

  class GrayLoggerService implements LoggerService {
    createLog(logObject: object) {
      const grayLog = new GrayLog();
      grayLog.saveLog(logObject);
    }
  }
  
  class RedisLoggerService implements LoggerService {
    createLog(logObject: object) {
      const logMessage = (`${logObject}`);
      const redisLog = new RedisLog();
      redisLog.sendLog(logMessage);
    }
  }

  const errorDecorator = (error: Error, loggerService: LoggerService) => {
    loggerService.createLog(error);
  };
  
  const main = () => {
    errorDecorator(new Error("Error Message"), new RedisLoggerService());
  };
  
  main();