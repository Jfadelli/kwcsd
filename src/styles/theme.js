import { createTheme } from '@material-ui/core/styles';

const theme = createTheme ({
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