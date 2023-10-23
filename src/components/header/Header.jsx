import { Link } from "react-router-dom";
import LoginButton from "../components/header/LoginButton";
import LogoutButton from "../components/header/LogoutButton";
import RegisterButton from "../components/header/RegisterButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/parkings">
                    Parkings
                </Link>
                {isAuthenticated ? ( <LogoutButton /> ) : (
                    <>
                    <LoginButton />
                    <RegisterButton />
                    </>
                )}
            </nav>
        </div>
    )
}

export default Header