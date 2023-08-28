import React, {useContext} from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

function ProtectedRoute({ component: Component, ...rest }) {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate()

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : navigate('/')
      }
    />
  );
}

export default ProtectedRoute;
