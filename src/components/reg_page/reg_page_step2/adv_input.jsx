import { Controller, useWatch } from "react-hook-form"

import { StyledIconButton } from "../../styles/StyledButton"
import { StyledInput } from "../../styles/StyledInputs"
import StyledAdvWrapper from "./StyledAdvWrapper"

import DeleteIcon from '../../../assets/Delete.svg'


export default function AdvInput({ control, index, field, remove, errors }) {
    const value = useWatch({
        name: "advantages",
        control
    });
    // console.log('the value: ', value?.[index])

    const errorType = errors?.advantages?errors.advantages[index]?.value.type:''

    return (
        <Controller
                control={control}
                name={`advantages.${index}.value`}
                rules={{required: true}}
                render={({ field }) => 
                <StyledAdvWrapper>
                    <div>
                        <StyledInput className="styledInput"  type="text" placeholder="Placeholder"
                            {...field}
                            rules={{ required: true }}
                        />
                        {errorType === "required" && <p>This field is required</p>}
                    </div>
                    <StyledIconButton type="button"
                        onClick={() => remove(index)}
                    >
                        <DeleteIcon width="1.25rem" height="1.25rem" />
                    </StyledIconButton>
                </StyledAdvWrapper>
                }
        />
    )
  }