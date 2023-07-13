import { createGlobalStyle } from 'styled-components'

import SBSansUIRegular from './assets/font/SBSansUI-Regular.otf'

const StyledGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @font-face {
            font-family: "SB Sans Interface";
            src: url(${SBSansUIRegular}) format("otf");
            
        }
        font-family: 'SB Sans Interface';
        /* font-size: 14px; */
        list-style: none;
    }
`

const fints = `
    src: url('/assets/font/SBSansUI-Semibold.otf') format("otf");
    src: 
        url('/assets/font/SBSansUI-Regular.otf') format("otf"),
        url("//db.onlinewebfonts.com/t/37086b994764dba84b2ee0f1083bfeed.eot");
    src:
        url('/assets/font/SBSansUI-Regular.otf') format("otf"),
        url("//db.onlinewebfonts.com/t/37086b994764dba84b2ee0f1083bfeed.eot?#iefix")format("embedded-opentype"),
        url("//db.onlinewebfonts.com/t/37086b994764dba84b2ee0f1083bfeed.woff2") format("woff2"),
        url("//db.onlinewebfonts.com/t/37086b994764dba84b2ee0f1083bfeed.woff") format("woff"),
        url("//db.onlinewebfonts.com/t/37086b994764dba84b2ee0f1083bfeed.ttf") format("truetype"),
        url("//db.onlinewebfonts.com/t/37086b994764dba84b2ee0f1083bfeed.svg#SB Sans Interface") format("svg");
`

export default function Global({...props}) {
    return (
        <StyledGlobal {...props}/>
    )
}
