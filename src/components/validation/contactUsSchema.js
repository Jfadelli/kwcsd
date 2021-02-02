import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const contactUsSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Name is required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    phone: Yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .max(10, 'Please double check your phone number')
        .min(10, "Phone number must include area code.")
        .required("Phone number is required"),

    intent: Yup
        .string()
        .oneOf(['buy','sell','lease','offerToLease','consult'])
        .required("intent is required"),
    timeframe: Yup
        .string()
        .oneOf(['lessThan3','lessThan6','lessThan12','nextYear'])
        .required("timeframe is required"),
    agent: Yup
        .string()
        .oneOf(['MarkHughes','LibbyBrignon','SueNa','NA']),
    message: Yup
        .string()
})

export default contactUsSchema