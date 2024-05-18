//
//
//
//
//

import app from "../firebaseConfig"
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, applyActionCode } from "firebase/auth";
import { verifyCode } from "./auth_phone_verify_code";

const auth = getAuth(app);

export const loginWithPhoneNumber = async (phoneNumber) => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'normal',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.

    },
    'expired-callback': () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      console.log("recaptch not allowed")
    }
  });
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult
      verifyCode(789789)
      console.log(confirmationResult)
      return confirmationResult
    }).catch((error) => {
      console.log("SNS not sent\n" + error)
    })
}
