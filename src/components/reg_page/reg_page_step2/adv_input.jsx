import { StyledIconButton } from "../../styles/StyledButton";
import { StyledInput } from "../../styles/StyledInputs";

import DeleteIcon from '../../../assets/Delete.svg'


export default function AdvInput({remove, error, required, ...field}) {
    return (
        <>
            <div>
                <StyledInput className="styledInput" type="text" placeholder="Placeholder"
                {...field}
                />
                <StyledIconButton type="button" className="icon_button"
                    onClick={() => remove()}
                >
                    <DeleteIcon width="1.25rem" height="1.25rem" />
                </StyledIconButton>
            </div>
            {error?.type === "required" && <p>This field is required</p>}
        </>
    )
  }