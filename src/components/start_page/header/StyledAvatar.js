import styled from 'styled-components'

const StyledAvatar = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    background: var(--preset-tag-blue-light, #D5E4F7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    > p {
        font-weight: 500;
    }
    @media ${props => props.theme.media.phone} {
        width: 1.25rem;
        height: 1.25rem;
        font-size: ${props => props.theme.size.phone};
        align-self: flex-start;
    }
`

export default StyledAvatar