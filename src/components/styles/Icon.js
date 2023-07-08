import { styled } from "styled-components"

import folderIcon from '../../assets/Folder.svg'

const Icon = styled.div.attrs(props => ({
    $size: props.$size || '1rem',
    $backgroundIcon: `url(${props.$iconImg || folderIcon})`,
})
)`
    width: ${props => props.$size};
    height: ${props => props.$size};
    background-image: ${props => props.$backgroundIcon};
    background-repeat: no-repeat;
    background-position: center;
`

export default Icon