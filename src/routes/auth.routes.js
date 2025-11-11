import { Router } from "express";
import { forgotPasswordRequest, getCurrentUser, registerUser, resetForgotPassword, verifyEmail,refreshAccessToken, changePassword, resendEmailVerification } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userForgotPasswordValidator, userLoginValidator, userRegistrationValidator, userResetForgotPasswordValidator } from "../validators/index.js";
import { login, logout } from "../controllers/auth.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route('/register').post(userRegistrationValidator(),validate, registerUser);

router.route('/login').post(userLoginValidator(), validate, login);

router.route('/verify-email/:verificationToken').get(verifyEmail);

router.route('/refresh-token').post(refreshAccessToken);

router.route('/forgot-password').post(userForgotPasswordValidator(),validate, forgotPasswordRequest);

router.route('/reset-password/:resetToken').post(userResetForgotPasswordValidator(),validate, resetForgotPassword);


//secure routes
router.route('/logout').post(verifyJWT, logout);

router.route('/current-user').post(verifyJWT, getCurrentUser);

router.route('/change-password').post(verifyJWT, userForgotPasswordValidator(), validate, changePassword);

router.route('/resend-verification-email').post(verifyJWT, resendEmailVerification);


export default router;