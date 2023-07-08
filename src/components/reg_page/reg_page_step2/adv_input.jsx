import { StyledIconButton } from "../../styles/StyledButton";
import { StyledInput } from "../../styles/StyledInputs";


export default function AdvInput({remove, error, required, ...field}) {
    return (
        <>
            <div>
                <StyledInput className="styledInput" type="text" placeholder="Placeholder"
                {...field}
                />
                <StyledIconButton type="button" className="icon_button"
                    onClick={() => remove()}
                />
            </div>
            {error?.type === "required" && <p>This field is required</p>}
        </>
    )
  }