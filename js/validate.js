import Joi from 'joi'

console.log(Joi)

const pasSchema = Joi.string().min(3).max(10)
export default function validatePassword(password) {
    return pasSchema.validate(password)
}