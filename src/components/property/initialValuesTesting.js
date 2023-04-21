const initialValues = {
    name: 'Jason Fadelli',
    email: 'jfadelli@gmail.com',
    phone: '7604053432',
    street_address: '1712 spyglass',
    city: 'Vista',
    zip: '92087',
    country: 'USA',
    property_type: {
        multifamily: true,
        office: false,
        industrial: false,
        retail: false,
        hospitality: false,
        recreation: false,
        specialty: false
    },
    building_sf: '123',
    lot_size: '456'
    
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