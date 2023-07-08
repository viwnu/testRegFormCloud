import { styled } from "styled-components"

const borderDefaults = `
    border-radius: 0.25rem;
    border: 1px solid var(--black-alpha-alpha-16, rgba(0, 0, 0, 0.16));
`

const inputDefaults = `
    width: 25rem;
    height: 2.75rem;
    padding-left: 0.75rem;
    background: var(--black-alpha-alpha-4, rgba(0, 0, 0, 0.04));
    color: var(--black-alpha-alpha-48, rgba(0, 0, 0, 0.48));
`

const mediaPCSmall = `
    width: 100%;
    font-size: ${props => props.theme.size.pcSmall};
    height: 2rem;
`

const mediaTablet = `
    width: 100%;
    padding: 0.25rem;
    height: 1.5rem;
    font-size: ${props => props.theme.size.tablet};
`

const mediaPhone = `
    width: 100%;
    padding: 0.25rem;
    height: 1.5rem;
    font-size: ${props => props.theme.size.phone};
`

const StyledInput = styled.input`
    ${borderDefaults}
    ${inputDefaults}
    &:not(:placeholder-shown) {
        color: black;
        background: #FFF;    
    }
    @media ${props => props.theme.media.pcSmall} {
        ${mediaPCSmall}
    }
    @media ${props => props.theme.media.tablet} {
        ${mediaTablet}
    }
    @media ${props => props.theme.media.phone} {
        ${mediaPhone}
    }
`

const StyledInputWrapper = styled.div`
    input {
        ${borderDefaults}
        ${inputDefaults}
        &:not(:placeholder-shown) {
            color: black;
            background: #FFF;    
        }
        @media ${props => props.theme.media.pcSmall} {
            ${mediaPCSmall}
        }
        @media ${props => props.theme.media.tablet} {
            ${mediaTablet}
        }
        @media ${props => props.theme.media.phone} {
            ${mediaPhone}
        }
    }
`

const StyledSelect = styled.select`
    ${borderDefaults}
    ${inputDefaults}
    &:has(option[value]:checked) {
        color: black;
        background: #FFF;
    }
    @media ${props => props.theme.media.pcSmall} {
        ${mediaPCSmall}
    }
    @media ${props => props.theme.media.tablet} {
        ${mediaTablet}
    }
    @media ${props => props.theme.media.phone} {
        ${mediaPhone}
    }
`

const TextAreaWraper = styled.div`
    textarea {
        ${borderDefaults}
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        min-height: 4rem;
        padding: 0.75rem;
        font-size: 14px;
    }
`

export {StyledInput, StyledSelect, TextAreaWraper, StyledInputWrapper}