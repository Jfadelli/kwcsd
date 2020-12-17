import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const PropertyValuationSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Name is Required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    phone: Yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .max(10, 'Please double check your phone number')
        .min(10, "Phone number must include area code.")
        .required("Phone number is Required"),

    street_address: Yup
        .string()
        .min(3, "Street address must be at least 2 characters long.")
        .required("Street address is Required"),
    city: Yup
        .string()
        .min(3, "Street address must be at least 2 characters long.")
        .required("City is Required"),
    zip: Yup
        .string()
        .min(5, "Zip  must be 5 digits long.")
        .max(5, "Zip  must be 5 digits long.")
        .required("Zip is Required"),
    country: Yup
        .string()
        .min(3, "Country must greater than 2 characters long.")
        .required("Country is Required"),
    building_sf: Yup
        .string()
        .min(3, "Building SF must be at least 2 characters long.")
        .required("Building SF  is Required"),
    lot_size: Yup
        .string()
        .min(3, "Lot SF must be at least 2 characters long.")
        .required("Lot SF is Required"),

    property_type: Yup
        .string()
        .oneOf(['multifamily', 'office', 'industrial', 'retail', 'hospitality', 'recreation', 'specialty'], "Please select a property type")
        .required('Please select a property type')
})

export default PropertyValuationSchema