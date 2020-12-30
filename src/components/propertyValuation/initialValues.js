const initialValues = {
    name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    zip: '',
    country: '',
    property_type: {
        multifamily: false,
        office: false,
        industrial: false,
        retail: false,
        hospitality: false,
        recreation: false,
        specialty: false
    },
    building_sf: '',
    lot_size: ''
    
}

const initialFormErrors = {
    name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    zip: '',
    country: '',
    building_sf: '',
    lot_size: ''
}

export {
    initialFormErrors,
    initialValues
}