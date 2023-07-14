import { styled } from "styled-components"
import Icon from "../../styles/Icon"

const IconRound = styled(Icon).attrs(props => ({
    $color: props.$color || 'white',
}))`
    border-radius: 100px;
    background-color: ${props => props.$color};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default IconRound