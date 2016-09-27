import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';

export const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
  marginBottom20: {
    marginBottom: 20
  }
};

export const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});