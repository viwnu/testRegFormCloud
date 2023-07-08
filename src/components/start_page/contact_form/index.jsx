import InputMask from "react-input-mask"
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

import StyledForm from "../../styles/StyledForm"
import { StyledInput, StyledInputWrapper } from "../../styles/StyledInputs"
import { StyledButton } from "../../styles/StyledButton"

export default function ContactForm({dispatch, userInfo}) {
    const {register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            phoneNumber: userInfo.auth?.phoneNumber||'',
            email: userInfo.auth?.email||'',
        }
    })
    const navigate = useNavigate()
    const onSubmit = data => {
        dispatch(data)
        navigate('reg')
    }
    

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)} >
            <label>
                Номер телефона
                <Controller
                    control={control}
                    name="phoneNumber"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <StyledInputWrapper>
                            <InputMask
                                className="styledInput"
                                mask="+7 (999) 999-99-99"
                                placeholder="+7 (900) 000-00-00"
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value|| ''}
                            />
                        </StyledInputWrapper>
                        
                    )}
                    
                    rules={{
                        required: true,
                        pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    }}    
                />
                {errors?.phoneNumber?.type === "required" && <p>This field is required</p>}
                {errors?.phoneNumber?.type === "pattern" && (
                    <p>Wrong phone number</p>
                )}
            </label>
            <label>
                Email
                <StyledInput className="styledInput" type="text" placeholder="tim.jennings@example.com" {...register("email", {
                    required: true,
                    pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                })} />
                {errors?.email?.type === "required" && <p>This field is required</p>}
                {errors?.email?.type === "pattern" && (
                    <p>Wrong email</p>
                )}
            </label>
            <StyledButton type="submit">Начать</StyledButton>
        </StyledForm>
    )
}