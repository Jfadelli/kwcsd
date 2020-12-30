import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as Yup from 'yup'
import PropertyValuationSchema from '../validation/PropertyValuationSchema'

import PropertyPhoto from '../../static/images/mf-cre.jpg'
import Footer from '../footer'

import StyledVariables from '../../styles/StyledVariables'

import { useStyles } from '../../styles/style'

import { initialValues, initialFormErrors } from './initialValues'

import { useMediaQuery } from '../hooks/mediaQuery'

const SV = StyledVariables

const Form ={
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: '2px',
    margin: '0 0 5vh 0',
    width:'100%',
}

export default function YourPropertyInfo(props) {
    const [property, setProperty] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true);
    const isSmall = useMediaQuery('(min-width: 768px)');
    const isRow = useMediaQuery('(min-width: 768px)');
    // const isWide = useMediaQuery('(min-width: 768px)');

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
        setProperty(newProperty)
        postNewProperty(property)
    }

    //////////////// SIDE EFFECTS //////////////// 
    useEffect(() => {
        PropertyValuationSchema.isValid(formValues).then(valid => {
            setDisabled(!valid);
        })
    }, [formValues])

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <div className={classes.flexCol}>
                <h2 className={classes.title}>Property Valuation</h2>
                <div className={classes.content}>
                    <section className={classes.p}>
                        <p>Representing sellers of investment real estate may require many of the same services, in addition to a thorough understanding of electronic marketing media, a creative approach to packaging, expert sales and negotiating skills, and a strong broker network. In addition to investment brokerage, we offer consulting services in development, financial analysis and finance. Our Investment Services team has over 35 years experience, which covers all of the above criteria essential to providing our clients with the highest quality representation available.</p>
                    </section>
                    <SV.H2>Property Information</SV.H2>
            <section className={classes.flexRow} style={isRowStyle.container(isRow)}>

                <div className={classes.flexCol}>
                    <SV.Img style={picStyle.container(isSmall)} src={PropertyPhoto} alt="mf cre blg"/>
                </div> 
                <div className={classes.flexRow} style={isRowStyle.container(isRow)}>    
                <div className={classes.flexCol} >

                    <SV.Form style={Form} onSubmit={onSubmit} >
                        <SV.Label style={isRowStyle.container(isRow)}>Enter your name:&nbsp;
                            <SV.Input 
                                value={formValues.name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Name'
                                name='name'
                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your E-mail:&nbsp;*
                            <SV.Input
                                value={formValues.email}
                                onChange={onInputChange}
                                type='email'
                                placeholder='Email'
                                name='email'
                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your phone:&nbsp;*
                            <SV.Input
                                maxLength='10'
                                value={formValues.phone}
                                onChange={onInputChange}
                                type='tel'
                                placeholder='xxx - xxx - xxxx'
                                name='phone'

                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your street address:&nbsp;*
                            <SV.Input
                                value={formValues.street_address}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Street Address'
                                name='street_address'
                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your city:&nbsp;*
                                <SV.Input
                                    value={formValues.city}
                                    onChange={onInputChange}
                                    type='text'
                                    placeholder='City'
                                    name='city'
                                />
                            </SV.Label>
                    </SV.Form>
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
                </div>
                
                <div className={classes.flexCol} >
                    <SV.Form onSubmit={onSubmit} >
                        <SV.Label style={isRowStyle.container(isRow)}>Enter your zip:&nbsp;*
                            <SV.Input
                                value={formValues.zip}
                                onChange={onInputChange}
                                type='zip'
                                placeholder='Zip Code'
                                name='zip'
                                maxlength='5'
                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your country:&nbsp;*
                            <SV.Input
                                value={formValues.country}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Country'
                                name='country'
                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Property Type:
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

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your building square footage:&nbsp;*
                            <SV.Input
                                value={formValues.building_sf}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Bldg. SF'
                                name='building_sf'
                            />
                        </SV.Label>

                        <SV.Label style={isRowStyle.container(isRow)}>Enter your lot square footage:&nbsp;*
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
                </div>
                </div>
                </section>
            </div>
        </div>     
        <Footer />
        </div>
    )
}

const picStyle = {
    container: isSmall => ({
      display: isSmall ? 'flex' : 'none',
    }),
  }

  const isRowStyle = {
    container: isRow => ({
        flexDirection: isRow ? 'row' : 'column',
        alignItems: isRow ? 'flex-start' : 'center' ,
        display: isRow ? '' : 'flex'
    })
  }
