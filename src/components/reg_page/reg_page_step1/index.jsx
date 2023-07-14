import { useForm } from "react-hook-form"

import StyledForm from "../../styles/StyledForm"
import { StyledInput, StyledSelect } from "../../styles/StyledInputs" 
import { StyledButton, StyledLightButton  } from "../../styles/StyledButton"

export default function Step1Form({calculateStep, dispatch, userInfo}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            Nickname: userInfo.summary?.Nickname||'',
            Name: userInfo.summary?.Name||'',
            Surname: userInfo.summary?.Surname||'',
            sex: userInfo.summary?.sex||''
        }})

    return (
        <StyledForm>
            <label>
                Nickname
                <StyledInput type="text" placeholder="Placeholder" {...register("Nickname", {
                    required: true,
                    maxLength: 30,
                    pattern: /^[A-Za-zА-Яа-я0-9]+$/i,
                })}/>
                {errors?.Nickname?.type === "required" && <p>This field is required</p>}
                {errors?.Nickname?.type === "maxLength" && (
                    <p>First name cannot exceed 30 characters</p>
                )}
                {errors?.Nickname?.type === "pattern" && (
                <p>Alphabetical and digital characters only</p>
                )}
            </label>
            <label>
                Name
                <StyledInput type="text" placeholder="Placeholder" {...register("Name", {
                    required: true,
                    maxLength: 50,
                    pattern: /^[A-Za-zА-Яа-я]+$/i,
                })} />
                {errors?.Name?.type === "required" && <p>This field is required</p>}
                {errors?.Name?.type === "maxLength" && (
                    <p>First name cannot exceed 50 characters</p>
                )}
                {errors?.Name?.type === "pattern" && (
                <p>Alphabetical characters only</p>
                )}
            </label>
            <label>
                Surname
                <StyledInput type="text" placeholder="Placeholder" {...register("Surname", {
                    required: true,
                    maxLength: 50,
                    pattern: /^[A-Za-zА-Яа-я]+$/i,
                })} />
                {errors?.Surname?.type === "required" && <p>This field is required</p>}
                {errors?.Surname?.type === "maxLength" && (
                    <p>First name cannot exceed 50 characters</p>
                )}
                {errors?.Surname?.type === "pattern" && (
                <p>Alphabetical characters only</p>
                )}
            </label>
            <label>
                Sex
                <StyledSelect {...register("sex")}>
                    <option value="man">man</option>
                    <option value="woman">woman</option>
                    <option value="other">other</option>
                </StyledSelect>
            </label>
            <div className="buttons">
                <StyledLightButton type="button" className="light_button"
                    onClick={handleSubmit((data) => {
                        dispatch(data)
                        calculateStep(-1)
                    })}
                >Назад</StyledLightButton>
                <StyledButton type="button"
                    onClick={handleSubmit((data) => {
                        dispatch(data)
                        calculateStep(1)
                    })}
                >Далее</StyledButton>
            </div>
        </StyledForm>
    )
}