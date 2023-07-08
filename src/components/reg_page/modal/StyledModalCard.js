import { styled } from "styled-components"

const localTheme = {
    color: {
        black4: 'rgba(0, 0, 0, 0.08)',
    }
}

const StyledModalCard = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 8px 32px 0 ${localTheme.color.black4};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: center;
    /*
    &>:last-child {
        align-self: self-end;
    } */
    .errHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`
export default StyledModalCard