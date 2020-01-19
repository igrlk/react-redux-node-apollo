import {connect} from 'react-redux';

import {authUser} from 'library/common/actions/authActions';
import Login from './Login';

export default connect(null, {authUser})(Login);
