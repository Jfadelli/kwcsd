// import { Agent } from '../teamBio/agentInfo/agentInfoList'
const initialValues = {
    intent: {
        buy: false,
        sell: false,
        lease: false,
        offerToLease: false,
        consult: false,
    },
    timeframe: {
        lessThan3: false,
        lessThan6: false,
        lessThan12: false,
        nextYear: false,
    },
    agent: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: true,

}

const initialFormErrors = {
    intent: '',
    timeframe: '',
    agent: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
}

export {
    initialValues, initialFormErrors
}