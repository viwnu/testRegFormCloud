import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

import FormCard from "../card/formCard"
import Step1Form from "./reg_page_step1"
import Step2Form from "./reg_page_step2"
import Step3Form from "./reg_page_step3"
import Modal from "./modal"
import Stepper from "./stepper"

import { addInfo } from "../../store/userInfoSlice"

const url = 'https://api.sbercloud.ru/content/v1/bootcamp/frontend'

const send = async (data, url) => {
    try {
      const response = await fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('Успех:', await response)
      return (response.ok)
  
    } catch (error) {
      console.error('Ошибка:', error);
      throw(error)
    }
  }

export default function RegPage() {
    const [currentStep, setCurrentStep] = useState(1)//----------------------current step
    const [readyToSend, setReadyToSend] = useState(false)
    const calculateStep = (increment) => {
        console.log('increment is: ' + increment);
        console.log('current step is: ' + currentStep);
        const newStep = currentStep+increment <= 1? 1: (currentStep+increment >= 3? 3: currentStep+increment)
        setCurrentStep(newStep)
    }

    const userInfo = useSelector((state) => state.userInfo.value)
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(null)
    
    useEffect(() => {
        if(readyToSend) {
            send(userInfo, url).then((res) => {
                setShowModal(res)
            }).catch((e) => {
                console.log('catched: ', e);
                setShowModal(false)
            })
        }
    }, [readyToSend])
    
    const currentForm = (currentStep) => {
        const forms = [Step1Form, Step2Form, Step3Form]
        const CurrentComponent = forms[currentStep-1]
        return (<CurrentComponent
                calculateStep={calculateStep}
                dispatch={(data) => dispatch(addInfo({summary: {...userInfo.summary, ...data}}))}
                setReadyToSend={setReadyToSend}
                userInfo={userInfo}
            />)
    }
    console.log('RegPage')
    console.log(userInfo)

    return (<>
        <>
            
            <FormCard
                header = {<>
                    <Stepper
                        step ={currentStep}
                    />
                    <br />
                </>}
                content = {currentForm(currentStep)}
            />
            {showModal !== null && <Modal
                show = {showModal}
                setShow={setShowModal}
                setReadyToSend={setReadyToSend}
            />}

        </>
    </>)
}