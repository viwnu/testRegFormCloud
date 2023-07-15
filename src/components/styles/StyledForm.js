import { styled } from "styled-components"

const StyledForm = styled.form`
    width: 100%;
    padding: 1.5rem 6rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    @media ${props => props.theme.media.pcSmall} {
        padding: 1.5rem;
        gap: 0.5rem;
    }
    @media ${props => props.theme.media.tablet} {
        padding: 1.5rem;
        gap: 0.5rem;
    }
    @media ${props => props.theme.media.phone} {
        padding: 0.25rem;
        gap: 1rem;
    }
    label, ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: ${props => props.theme.size.normal};
        @media ${props => props.theme.media.pcSmall} {
            width: 100%;
            gap: 0.25rem;
            font-size: ${props => props.theme.size.pcSmall};
        }
        @media ${props => props.theme.media.tablet} {
            width: 100%;
            gap: 0.25rem;
            font-size: ${props => props.theme.size.tablet};
        }
        @media ${props => props.theme.media.phone} {
            width: 100%;
            gap: 0.25rem;
            font-size: ${props => props.theme.size.phone};
        }
    }
    p {
        color: #E84E58;
        width: 100%;
    }
    .normal {
        margin-bottom: -1rem;
        color: var(--black-alpha-alpha-48, rgba(0, 0, 0, 0.48));
        text-align: right;
        position: relative;
        right: 0.75rem;
        top: -2rem;
        @media ${props => props.theme.media.phone} {
            margin-bottom: 0;
            right: 0.25rem;
            top: -0.75rem;
        }
    }
    .buttons {
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
    }
    fieldset {
        border: 0;
    }
    .checkboxsesRadios {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.5rem;
    }
`

export default StyledForm