import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-autosize-textarea';

import StyledForm from "../../styles/StyledForm"
import {TextAreaWraper} from '../../styles/StyledInputs'
import { StyledButton, StyledLightButton } from "../../styles/StyledButton";

export default function Step3Form({calculateStep, dispatch, setReadyToSend, userInfo}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            About: userInfo.summary?.About||''
        }})
    
    const symbolAmount = (text) => {
        if (text === undefined) return 0
        return text.split(' ').join('').length
    }

    const setCurrentStepData = (data) => {
        console.log(data)
        dispatch(data)
    }

    const trigerSending = () => {
        setReadyToSend(true)
    }

    return (
        <StyledForm>
            <label>
                About
                <div>
                    <TextAreaWraper>
                        <TextareaAutosize name="" id="" placeholder="Placeholder" {...register("About", {
                            required: true,
                            maxLength: 200
                        })}>
                        </TextareaAutosize>
                    </TextAreaWraper>
                    <p className="normal">{symbolAmount(watch('About'))}</p>
                </div>
                {errors?.About?.type === "required" && <p>This field is required</p>}
                {errors?.About?.type === "maxLength" && (
                    <p>About cannot exceed 200 characters</p>
                )}
            </label>


            <div className="buttons">
                <StyledLightButton type="button" className="light_button"
                    onClick={() => {
                        (handleSubmit(setCurrentStepData))()
                        calculateStep(-1)
                    }}
                >Назад</StyledLightButton>
                <StyledButton type="button"
                    onClick={handleSubmit((data) => {
                        setCurrentStepData(data)
                        trigerSending()
                    })}
                >Отправить</StyledButton>
            </div>
        </StyledForm>
    )
}