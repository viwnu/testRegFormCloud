import { styled } from "styled-components"

const Icon = styled.div.attrs(props => ({
    $size: props.$size || '1rem',
})
)`
    width: ${props => props.$size};
    height: ${props => props.$size};
`

export default Icon