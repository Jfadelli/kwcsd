import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as Yup from 'yup'
import PropertyValuationSchema from '../validation/PropertyValuationSchema'

import PropertyPhoto from '../../static/images/mf-cre.jpg'
import Footer from '../footer'

import StyledVariables from '../../styles/StyledVariables'
const SV = StyledVariables

//////////////// Initial Values ////////////////
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

export default function YourPropertyInfo(props) {
    const [property, setProperty] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);

    //////////////// HELPERS ////////////////
    const postNewProperty = property => {
      axios.post('https://kwcsd-mail-util.herokuapp.com/api/newProperty', property)
          .then(res => {
              if (res.data.status === 'success'){
                  alert('Message Sent.');
              }else if (res.data.status === 'fail') {
                  alert('Message failed to send.')}
          })
          .catch(err => {
              console.log(err)
          })
          .finally(() => {
              setFormValues(initialValues)
          })
    }

    //////////////// EVENT HANDLERS ////////////////
    const onInputChange = evt => {
        const { name, value } = evt.target
        Yup
            .reach(PropertyValuationSchema, name)
            .validate(value)
            .then(valid => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value
        })
    }


    const onSubmit = evt => {
        evt.preventDefault()
        console.log('hello')

        const newProperty = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            phone: formValues.phone.trim(),
            street_address: formValues.street_address.trim(),
            city: formValues.city.trim(),
            zip: formValues.zip.trim(),
            country: formValues.country.trim(),
            property_type: formValues.property_type,
            building_sf: formValues.building_sf.trim(),
            lot_size: formValues.lot_size.trim()
        }
        console.log('newProperty', newProperty)
        setProperty(newProperty)
        postNewProperty(property)
        // history.push('/thank-you')
    }

    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        PropertyValuationSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    return (
        <SV.Div>
            <SV.CardContainer>
                <SV.P>Representing sellers of investment real estate may require many of the same services, in addition to a thorough understanding of electronic marketing media, a creative approach to packaging, expert sales and negotiating skills, and a strong broker network. In addition to investment brokerage, we offer consulting services in development, financial analysis and finance. Our Investment Services team has over 35 years experience, which covers all of the above criteria essential to providing our clients with the highest quality representation available.</SV.P>
                <SV.H2>Property Information</SV.H2>
            </SV.CardContainer>
            <SV.TwoColDiv > 
                <SV.CardContainer>
                    <SV.Img src={PropertyPhoto} alt="mf cre blg"/>
                </SV.CardContainer>        
                <SV.CardContainer>
                    <SV.Form onSubmit={onSubmit} >
                        <SV.Label>Enter your name:&nbsp;
                            <SV.Input
                                value={formValues.name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Name'
                                name='name'
                            />
                        </SV.Label>

                        <SV.Label>Enter your E-mail:&nbsp;*
                            <SV.Input
                                value={formValues.email}
                                onChange={onInputChange}
                                type='email'
                                placeholder='Email'
                                name='email'
                            />
                        </SV.Label>

                        <SV.Label>Enter your phone:&nbsp;*
                            <SV.Input
                                maxLength='10'
                                value={formValues.phone}
                                onChange={onInputChange}
                                type='tel'
                                placeholder='xxx - xxx - xxxx'
                                name='phone'

                            />
                        </SV.Label>

                        <SV.Label>Enter your street address:&nbsp;*
                            <SV.Input
                                value={formValues.street_address}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Street Address'
                                name='street_address'
                            />
                        </SV.Label>

                        <SV.Label>Enter your city:&nbsp;*
                                <SV.Input
                                    value={formValues.city}
                                    onChange={onInputChange}
                                    type='text'
                                    placeholder='City'
                                    name='city'
                                />
                            </SV.Label>
                    </SV.Form>
                </SV.CardContainer>
                <SV.CardContainer>
                    <SV.Form onSubmit={onSubmit} >
                        <SV.Label>Enter your zip:&nbsp;*
                            <SV.Input
                                value={formValues.zip}
                                onChange={onInputChange}
                                type='zip'
                                placeholder='Zip Code'
                                name='zip'
                                maxlength='5'
                            />
                        </SV.Label>

                        <SV.Label>Enter your country:&nbsp;*
                            <SV.Input
                                value={formValues.country}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Country'
                                name='country'
                            />
                        </SV.Label>

                        <SV.Label>Property Type:
                            <SV.Select
                                onChange={onInputChange}
                                value={formValues.property_type}
                                name='property_type'
                            >
                                <option value=''>- Select an option -</option>
                                <option value='multifamily'>Multifamily</option>
                                <option value='office'>Office</option>
                                <option value='industrial'>Industrial</option>
                                <option value='retail'>Retail</option>
                                <option value='hospitality'>Hospitality</option>
                                <option value='recreation'>Recreation</option>
                                <option value='specialty'>Specialty</option>
                            </SV.Select>
                        </SV.Label>

                        <SV.Label>Enter your building square footage:&nbsp;*
                            <SV.Input
                                value={formValues.building_sf}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Bldg. SF'
                                name='building_sf'
                            />
                        </SV.Label>

                        <SV.Label>Enter your lot square footage:&nbsp;*
                            <SV.Input
                                value={formValues.lot_size}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Lot SF'
                                name='lot_size'
                            />
                        </SV.Label>
                        <SV.Button disabled={disabled} onSubmit={onSubmit}>submit</SV.Button >

                    </SV.Form>
                </SV.CardContainer>
                
            </SV.TwoColDiv>

            {/* errors */}
            <SV.Error>{formErrors.name}</SV.Error>
            <SV.Error>{formErrors.email}</SV.Error>
            <SV.Error>{formErrors.phone}</SV.Error>
            <SV.Error>{formErrors.street_address}</SV.Error>
            <SV.Error>{formErrors.city}</SV.Error>
            <SV.Error>{formErrors.zip}</SV.Error>
            <SV.Error>{formErrors.country}</SV.Error>
            <SV.Error>{formErrors.building_sf}</SV.Error>
            <SV.Error>{formErrors.lot_sf}</SV.Error>
            <SV.Error>{formErrors.property_type}</SV.Error>
            
        <Footer />
        </SV.Div >
    )
}