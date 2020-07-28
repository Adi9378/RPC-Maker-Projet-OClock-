import { connect } from 'react-redux';
import Login from '../../components/User/Login';
import { changeField, login } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (name, value) => {
    console.log('entrée container');
    dispatch(changeField(name, value));
  },
  login: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);