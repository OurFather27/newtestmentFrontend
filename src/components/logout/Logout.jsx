import { Redirect} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useContext , useState} from "react";
import { loginCall } from "../../apiCalls";
import { useHistory } from "react-router";
import { MdLogout } from "react-icons/md";
import "./logout.css"

export default function Logout() {

const { user, dispatch } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();

  const [loggedOut] = useState(false)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })

  };

  if (loggedOut) {
    return <Redirect to="/login" push={true} />
  }
  return(
          <Link className="logout">
            <MdLogout onClickCapture={handleLogout}/>
          </Link>

  )
}

