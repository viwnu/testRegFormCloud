import { useForm, useFieldArray } from "react-hook-form"

import AdvInput from "./adv_input"

import StyledForm from "../../styles/StyledForm"
import { StyledButton, StyledLightButton } from "../../styles/StyledButton"

export default function Step2Form({calculateStep, dispatch, userInfo}) {
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            advantages: userInfo.summary?.advantages||[{value:''}],
            checkbox: userInfo.summary?.checkbox||'',
            radio: userInfo.summary?.radio||'',
        }})
    const {fields, append, remove} = useFieldArray({control, name: "advantages"})

    return (
        <StyledForm>
            
            <label>
                Advantages
                <ul>
                    {fields.map((field, index) => {
                        return (
                            <li key={field.id}>
                              <AdvInput {...{ control, index, field, remove, errors }} />
                            </li>
                          )    
                            
                        }
                    )}
                </ul>
                <StyledLightButton type="button" className="light_button"
                    onClick={() => {append({value: ''})}
                }>+</StyledLightButton>
            </label>

           <label>
                Checkbox group
                <fieldset>
                    <ul>
                        {[1, 2, 3].map((number) => 
                            <li key={number}>
                                <label className="checkboxsesRadios">
                                    <input type="checkbox" {...register(`checkbox.${number-1}`)}/>
                                    {number}
                                </label>
                            </li>
                        )}
                    </ul>
                </fieldset>
           </label>

            <label>
                Radio group
                <fieldset>
                    <ul>
                        {[1, 2, 3].map((number) => 
                            <li key={number}>
                                <label className="checkboxsesRadios">
                                    <input type="radio" value={number} {...register('radio')} />
                                    {number}
                                </label>
                            </li>
                        )}
                    </ul>
                </fieldset>
            </label>


            <div className="buttons">
                <StyledLightButton type="button"
                    onClick={handleSubmit((data) => {
                        dispatch(data)
                        calculateStep(-1)
                    })}
                >Назад</StyledLightButton>
                <StyledButton type="button"
                    onClick={handleSubmit((data) => {
                        console.log('adv is: ', data.advantages.map(item=>item.value))////////////////////////log
                        dispatch({advantages: data.advantages.map(item=>item.value), ...data})
                        calculateStep(1)
                    })}
                >Далее</StyledButton>
            </div>
        </StyledForm>
    )
}