import * as Yup from 'yup'
import {
  REQUIRED_EMAIL_ERROR_MSG,
  REQUIRED_PASSWORD_ERROR_MSG,
  WRONG_EMAIL_FORMAT_ERROR_MSG
} from '../errors/formErrorMessages'

export const loginSchema = Yup.object({
  email: Yup.string()
    .email(WRONG_EMAIL_FORMAT_ERROR_MSG)
    .required(REQUIRED_EMAIL_ERROR_MSG),
  password: Yup.string().required(REQUIRED_PASSWORD_ERROR_MSG)
})
