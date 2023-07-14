import { styled } from "styled-components"

import deleteIcon from '../../assets/Delete.svg?url'

const StyledButton = styled.button`
    width: fit-content;
    padding: 0.75rem 1rem;
    height: 2.75rem;
    border: 0;
    border-radius: 4px;
    background: ${props => props.theme.colors.purple100};
    color: #FFF;
    &:hover {
      cursor: pointer;
    }
    @media ${props => props.theme.media.pcSmall} {
        padding: 0.25rem 0.5rem;
        height: 2rem;
        font-size: ${props => props.theme.size.pcSmall};
    }
    @media ${props => props.theme.media.tablet} {
        padding: 0.25rem 0.5rem;
        height: 1.5rem;
        font-size: ${props => props.theme.size.tablet};
    }
    @media ${props => props.theme.media.phone} {
        padding: 0.25rem 0.5rem;
        height: 1.5rem;
        font-size: ${props => props.theme.size.phone};
    }
`

const StyledLightButton = styled(StyledButton)`
    background-color: #FFF;
    color: ${props => props.theme.colors.purple100};
    border: 1.5px solid ${props => props.theme.colors.purple100};
`
const StyledIconButton = styled(StyledButton).attrs(props => ({
    $backgroundIcon: `url(${deleteIcon})`,
}))`
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    @media ${props => props.theme.media.tablet} {
        width: 2rem;
    }
`

const StyledCloseButton = styled(StyledIconButton).attrs(props => ({
    $color: props.$color || 'transparent',
    $size: props.$size || '1.5rem',
}))`
    width: ${props => props.$size};
    height: ${props => props.$size};
    border-radius: 100px;
    background-color: ${props => props.$color};
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export {StyledButton, StyledLightButton, StyledIconButton, StyledCloseButton}
