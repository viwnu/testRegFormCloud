import { ThemeProvider, ThemeContext, styled } from "styled-components"
import { useContext } from "react"

import CheckSmall from '../../../assets/Check Small.svg'
import DotSmall from '../../../assets/Dot Small.svg'

const StyledItem = styled.li`
    width: ${props => props.$width || "0"};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 2rem;
    p {
        position: relative;
        left: 0.25rem;
        color: ${props => props.theme.textColor};
    }
`

const Dot = styled.div`
    position: relative;
    top: 2.75rem;
    left: 0.5rem;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.theme.backgroundColor};
    background-image: ${props => props.theme.backgroundImage};
    background-position: center;
    border-radius: 0.75rem;
`

const Line = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: ${props => props.theme.lineColor};
`

const choseTheme = (group, theme) => {
    switch (group) {
        case 'checked':
            return ({
                backgroundColor: theme.colors.purple100,
                textColor: theme.colors.purple100,
                lineColor: theme.colors.purple100,
                backgroundImage: `url(${CheckSmall})`,
            })
            break;

        case 'reached':
            return ({
                backgroundColor: theme.colors.purple100,
                textColor: theme.colors.purple100,
                lineColor: theme.colors.purple100,
                backgroundImage: `url(${DotSmall})`,
            })
            break;
    
        default:
            return({
                backgroundColor: theme.colors.g350,
                textColor: theme.colors.g600,
                lineColor: theme.colors.black8,
            })
            break;
    }
}

const chouseStepTheme = (step, current, theme) => {
    if(step == current) {
        return (choseTheme('reached', theme))
    } else if(step > current) {
        return (choseTheme('checked', theme))
    } else {
        return (choseTheme('normal', theme))
    }
}

export default function StepItem(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = chouseStepTheme(props.step, props.currentItem, themeContext)
    return (
        <StyledItem $width={props.$width} >
            <ThemeProvider theme={currentTheme} >
                <Dot/>
                <Line/>
                <p>{props.currentItem}</p>
            </ThemeProvider>        
        </StyledItem>
    )
}