import {connect} from 'react-redux';

import {logoutUser} from 'library/common/actions/authActions';
import Header from './Header';

export default connect(null, {logoutUser})(Header);
