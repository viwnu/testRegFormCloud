import FormCard from '../card/formCard.jsx'
import ContactForm from './contact_form/index.jsx'
import Header from './header/index.jsx'
import { useSelector, useDispatch } from 'react-redux'

import { addInfo } from '../../store/userInfoSlice.js'

const StartPage = () => {
    const userInfo = useSelector((state) => state.userInfo.value)
    const dispatch = useDispatch()

    console.log(userInfo)

    return (<>
        <FormCard
                header = {<Header />}
                content = {<ContactForm
                    dispatch={(data) => dispatch(addInfo({auth: {...userInfo.auth, ...data}}))}
                    userInfo={userInfo}
                />}
        />
    </>)
}

export default StartPage