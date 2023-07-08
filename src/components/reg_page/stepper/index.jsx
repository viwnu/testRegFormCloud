import { styled } from "styled-components"

import StepItem from './StepItem'
import StyledStepper from "./StyledStepper"

export default function Stepper({step, ...props}) {
    console.log('In stepper: ', props.theme);
    return (
        <StyledStepper>
            <StepItem step={step} currentItem={1} theme={props.theme} />
            <StepItem step={step} currentItem={2} $width='50%' theme={props.theme} />
            <StepItem step={step} currentItem={3} $width='50%' theme={props.theme} />
        </StyledStepper>
    )
}