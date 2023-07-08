import {StyledFormCard} from './StyledFormCard'

const FormCard = ({header, content}) => {
    return (
        <StyledFormCard>
            {header}
            {content}
        </StyledFormCard>
    )
}

export default FormCard