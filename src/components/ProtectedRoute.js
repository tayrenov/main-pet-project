import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const isAuth = useSelector(state => state.app.auth.isAuth);

    if (!isAuth) {
        return <Navigate to="/need-auth" replace />
    }

    return children
}

export default ProtectedRoute;