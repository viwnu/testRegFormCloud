import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { StyledButton, StyledCloseButton } from '../../styles/StyledButton'
import StyledModal from './StyledModal'
import StyledModalCard from './StyledModalCard'
import IconRound from './IconRound'

import CircleCheckFilled from '../../../assets/Circle Check Filled.svg'
import CircleCancelFilled from '../../../assets/Circle Cancel Filled.svg'
import Close from '../../../assets/Close.svg'

export default function Modal ({show, setShow, setReadyToSend}) {
    const navigate = useNavigate()
    const ChangeBodyOverflow = (value) => {
        document.querySelector('body').style.overflow = value
    }
    useEffect(() => {
        ChangeBodyOverflow('hidden')
        return (() => ChangeBodyOverflow('auto'))
    }, [show])

    const closeModal = () => {
        setShow(null)
        setReadyToSend(false)
    }
    
    return (
        <StyledModal 
            id='modal-background'
            onClick={e => {
                if(e.target === document.querySelector('#modal-background') && !show) {
                    closeModal()
                }}}
        >
            <StyledModalCard>
                {show? (
                    <>
                        <h3>Форма успешно отправлена</h3>
                        <IconRound $size='5rem' $color={props => props.theme.colors.green15} >
                            <CircleCheckFilled width="3rem" height="3rem" />
                        </IconRound>
                        <StyledButton type='button' onClick={() => navigate('/')}>На главную</StyledButton>
                    </>
                ):(
                    <>
                        <div className='errHeader'>
                            <h3>Ошибка</h3>
                            <StyledCloseButton $color={props => props.theme.colors.black4} onClick={closeModal} >
                                <Close/>
                            </StyledCloseButton>
                        </div>
                        <IconRound $size='5rem' $color={props => props.theme.colors.red15} >
                            <CircleCancelFilled width="3rem" height="3rem" />
                        </IconRound>
                        <StyledButton type='button' onClick={closeModal}>Закрыть</StyledButton>
                    </>
                )}
            </StyledModalCard>
        </StyledModal>
    )
}