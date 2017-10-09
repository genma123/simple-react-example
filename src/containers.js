import { connect } from 'react-redux';
import { addSquare, removeSquare } from './actions';
import App from './App';

export const WrappedApp = connect(
    function mapStateToProps(state) {
    return { appState: state };
  },

  function mapDispatchToProps(dispatch) {
     return {
      addSquare: (text, color, key) => dispatch(addSquare(text, color, key)),
      removeSquare: id => dispatch(removeSquare(id))
    }
  }

)(App);