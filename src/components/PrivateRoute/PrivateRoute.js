import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setUser } from '../../store/selectors';

export function PrivateRoute({ children }) {
	const stateUser = useSelector((state) => setUser(state));
	const auth = getUserRole();

	function getUserRole() {
		if (stateUser.result) {
			return true;
		} else {
			//console.log('stateUser from privateRoute: ', stateUser.result);
			return false;
		}
	}

	return auth ? children : <Navigate to='/login' />;
}
