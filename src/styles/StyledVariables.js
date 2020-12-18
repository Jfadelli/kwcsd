import styled from 'styled-components'

 //////////////// Style Variables ////////////////
const cardSize = '50em'

const faluRed = '#821E1E' // falu red
const timberwolf = '#D1CFC7' //timberwolf
const jet = '#343434' //jet
const lavendarBlush = '#FFEBF0' // lavendar blush
const kwRed = 'rgb(180 30 30)' // kw red

const margin = '10px'
const flex = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    `
//////////////// Styled Components ////////////////

// Navbar
const Div = styled.div`
    ${flex};
`

const NavBar = styled.div`
    display: flex;
    flex-wrap: none;
    flex-direction: row;
    background-color: ${kwRed};
    height: 6rem;
    margin: 3.5rem 0;
    width: 100%;
`

const NavButton = styled.button`
    font-size: 1.5rem;
    color: white;
    text-shadow: -1px 2px 0 #000;
    line-height: 1.5rem;
    padding: 0 5rem 0 5rem;
`

const LoginCard = styled.div`
    ${flex};
    margin: 10px 0 10px 0;
    width: ${cardSize};
    background-color: ${timberwolf};
    border: 1px solid ${lavendarBlush};
    border-radius: 10px;
`

const CardContainer = styled.div`
    ${flex};
    margin: 0 5% 0 5%;
    border-radius: 6px;
    background-color: ${timberwolf};
    width: 66%;
    `

const Form = styled.form`
    ${flex};
    border-radius: 6px;
    background-color: ${timberwolf};
    margin: 0 0 5vh 0;
    
`

const Input = styled.input`
    ${flex};
    color: ${jet};
    margin: ${margin};
    /* font-variant: small-caps; */
    font-weight: 600;
    font-size: 1.25rem;
    height: 1.75rem;
    width: 350px;
    text-align: left;
    border: none;
    border-radius: 3px;
`

const Label = styled.label`
    ${flex}
    background-color: ${timberwolf};
    color: ${lavendarBlush};
    color: black;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-size: 1.5rem;
    width: 100%;
`

const Select = styled.select`
    display: flex;
    color: ${jet};
    margin: ${margin};
    font-size: 1.25rem;
    width: 360px;
    border: none;

`
const H2 = styled.h2`
    color: ${faluRed};
    text-shadow: -1px 2px 0 #000;
    background-color: ${timberwolf};
    margin: 10px 0 0 0;
    font-size: 3em;
    /* border-bottom: 2px solid ${kwRed} */
`

const H3 = styled.h3`
    color: ${kwRed};
    background-color: ${faluRed};
    margin: 10px 0 0 0;
    font-size: 4em;
/* border-bottom: 2px solid ${kwRed} */
`
const P = styled.p`
    color: ${kwRed};
    background-color: ${faluRed};
    margin: 10px 0 0 0;
    font-size: 4em;
/* border-bottom: 2px solid ${kwRed} */
`

const Button = styled.button`
    margin: ${margin};
    width: auto;
    height: auto;
    font-size: 3em;
    font-variant: small-caps;
    border: 3px solid;
    border-radius: 4px;
`

const Error = styled.div`
    color: red;
    background-color: ${timberwolf};
    font-size: 1.5rem;
`
const Break = styled.div`
    background-color: white;
    height: 1vh;
`

const StyledVariables = {
    cardSize,
    faluRed,
    timberwolf,
    jet,
    lavendarBlush,
    kwRed,
    margin,
    flex,
    LoginCard,
    CardContainer,
    Form,
    Label,
    Select,
    Input,
    Button,
    Error,
    Break,
    H2,
    H3,
    P,
    NavBar,
    NavButton,
    Div
}

export default StyledVariables