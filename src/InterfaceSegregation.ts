//instead of creating a single interface segregate it into multile interface that can be inherited into different class types;

interface PaymentProvider {
    getPaymentCommission: () => number;
    processPayment: () => string;
  }
  
  interface PaymentValidator {
    validate: () => boolean;
  }
  
  interface PaymentVerifier {
    verifyPayment: () => boolean;
  }

  // Credit card method do not have a method to verif payement so it can skip to implement payement verifier interface

  class CreditCardPaymentProvider implements PaymentProvider, PaymentValidator {
    validate() {
      // Payment is validated
      console.log("Payment Card Validated");
      return true;
    }
    getPaymentCommission() {
      // Commission is returned
      return 10;
    }
    processPayment() {
      // Payment processed
      console.log("Payment Processed");
      return "Payment Fingerprint";
    }
  }

// Wallet provider has no api to validate payement so it can skip to implement  payment validator interface.

  class WalletPaymentProvider implements PaymentProvider, PaymentVerifier {
    getPaymentCommission() {
      // Commission is returned
      return 5;
    }
    processPayment() {
      // Payment processed
      console.log("Payment Processed");
      return "Payment Fingerprint";
    }
    verifyPayment() {
      // Payment verification
      console.log("Payment Verified");
      return false;
    }
  }