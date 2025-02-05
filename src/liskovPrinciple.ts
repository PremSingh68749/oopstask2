// liskov principle states that if clas A has Subclass S1,S2,S3 then instance of A can substituted with subclass instance;

abstract class CustomError {
    error: Error;
    errorMessage!: string;
    constructor(error: Error) {
      this.error = error;
    }
    abstract createErrorMessage(): void;
    abstract logError(): void;
  }
  
  class ConnectionError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
    createErrorMessage(): void {
      this.errorMessage = `Connection error: ${this.error.message}`;
    }
    logError(): void {
      console.log(this.errorMessage);
    }
  }
  
  class AlertSystem {
    public sendAlert(message: string) {
      console.log("Alert sent");
    }
  }
  
  class DBError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
  
    createErrorMessage(): void {
      this.errorMessage = `DB error: ${this.error.message}`;
    }
  
    logError(): void {
      console.log(this.errorMessage);
      const alert = new AlertSystem();
      alert.sendAlert(this.errorMessage);
    }
  }
  
  const errorDecorator1 = (customError: CustomError) => {
    customError.createErrorMessage();
    customError.logError();
  };
  
  const main1 = () => {
    const dbError = new DBError(new Error("DB err1"));
    errorDecorator1(dbError);
  };
  
  main1();