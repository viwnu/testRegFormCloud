import { ThemeProvider } from "styled-components"

const theme = {
  colors : {
    bgLayoutWhite: '#F4F4F5',
    black4: 'rgba(0, 0, 0, 0.04)',
    black8: 'rgba(0, 0, 0, 0.08)',
    black16: 'rgba(0, 0, 0, 0.16)',
    green15: 'rgba(5, 174, 113, 0.15)',
    red15: 'rgba(232, 78, 88, 0.15)',
    purple100: '#5558FA',
    g350: '#A6A6A6',
    g600: '#666',         
  },
  size: {
    normal: '14px',
    pcSmall: '12px',
    tablet: '10px',
    phone: '6px',
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
    pcSmall: "(max-width: 1024px) and (min-width: 768px)",
  }
}

const Theme = (props) => (<ThemeProvider theme={theme} {...props}/>)

export default Theme
