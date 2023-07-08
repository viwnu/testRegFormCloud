import { styled } from 'styled-components'

const StyledModal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.black16};
    display: flex;
    justify-content: center;
    align-items: center;
`

export default StyledModal