import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PublicRoute = ({children}) => {
    const {isAuth} = useSelector((state) => state.auth);
    return (
        isAuth ? <Navigate to="/"/> : children

    );
};

export default PublicRoute;