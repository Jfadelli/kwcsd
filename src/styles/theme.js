import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#cccccc',
      dark: '#444455'
    },
    contrastText: '#ffffff'
  },
  typography: {
    fontSize: 12,
  }
})

export default theme