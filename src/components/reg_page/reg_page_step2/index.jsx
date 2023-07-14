import { useForm, useFieldArray, Controller } from "react-hook-form"

import AdvInput from "./adv_input"

import StyledForm from "../../styles/StyledForm"
import { StyledButton, StyledLightButton } from "../../styles/StyledButton"

export default function Step2Form({calculateStep, dispatch, userInfo}) {
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            advantages: userInfo.summary?.advantages||'',
            checkbox: userInfo.summary?.checkbox||'',
            radio: userInfo.summary?.radio||'',
        }})
    const {fields, append, remove,} = useFieldArray({control, name: "advantages"})
        
    return (
        <StyledForm>
            
            <label>
                Advantages
                <ul>
                    {fields.map((item, index) => {
                        return (
                            <li key={item.id}>
                              <Controller
                                render={({
                                    field : {onChange, onBlur, value},
                                    fieldState: {error}
                                }) => <AdvInput
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  value={value|| ''}
                                  remove={() => remove(index)}
                                  error={error}
                                  required
                                />}
                                name={`advantages.${index}`}
                                control={control}
                                rules={{required:true}}
                              />
                            </li>
                          )    
                            
                        }
                    )}
                </ul>
                <StyledLightButton type="button" className="light_button"
                    onClick={() => {append('')}
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
                        dispatch(data)
                        calculateStep(1)
                    })}
                >Далее</StyledButton>
            </div>
        </StyledForm>
    )
}