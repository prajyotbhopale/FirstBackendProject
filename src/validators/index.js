import { body } from "express-validator";


const userRegistrationValidator = () => {

    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is not valid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLength({ min: 3, max: 30 })
            .withMessage("Username must be between 3 and 30 characters")
            .isLowercase()
            .withMessage("Username must be in lowercase"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
        body("fullName")
            .optional()
            .trim()
            .isLength({ min: 3, max: 50 })
            .withMessage("Full name must be between 3 and 50 characters"),

    ]
}

const userLoginValidator = () =>{
    return [
        body("email")
        .optional()
        .isEmail()
        .withMessage("Email is not valid"),
        body("password")
        .notEmpty()
        .withMessage("Password is required"),
    ]
}

const userChangeCurrentPasswordValidator = () =>{
    return[
        body("oldPassword").notEmpty().withMessage("Old password is required"),
        body("newPassword").notEmpty().withMessage("New password is required"),
    ];
}

const userForgotPasswordValidator = () =>{
    return[
        body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is not valid")
    ]
}

const userResetForgotPasswordValidator = () =>{
    return[body("newPassword").notEmpty().withMessage("New password is required")]
}

export { userRegistrationValidator,
         userLoginValidator,
         userChangeCurrentPasswordValidator,
         userForgotPasswordValidator,
         userResetForgotPasswordValidator
         };