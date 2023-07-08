import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    @media ${props => props.theme.media.phone} {
        justify-content: space-between;
    }
    padding-bottom: 1.5rem;
    .header_content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
            font-size: 20px;
            font-weight: 600;
            @media ${props => props.theme.media.phone} {
                display: none;
            }
        }
    }
    .socials {
        display: flex;
        gap: 1rem;
        font-size: ${props => props.theme.size.normal};
        @media ${props => props.theme.media.phone} {
            flex-direction: column;
            gap: 0.25rem;
            font-size: ${props => props.theme.size.phone};
        }
        li {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            @media ${props => props.theme.media.phone} {
                flex-direction: row-reverse;
            }
        }
        a {
            text-decoration-line: none;
            color: ${props => props.theme.colors.purple100};
        }
    }
`

export default StyledHeader