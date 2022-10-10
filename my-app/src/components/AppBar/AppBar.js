import {useContext} from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import authContext from '../../context/authContext.js'

export default function Appbar() {
    const {isLoggedIn, user,onLogIn,onLogOut} = useContext(authContext);
    return (
        <header className={StyleSheet.header}>
        <Navigation/>
        {isLoggedIn ?(
            <UserMenu onLogOut={onLogOut} user={user}/>
        ) : (
            <button type="button" onClick={onLogIn}>
                Войти
            </button>
        )}
    </header> 
    )
}
// return (
//     <authContext.Consumer>
//     {({isLoggedIn, user,onLogIn,onLogOut}) => (
//         <header className={StyleSheet.header}>
//             <Navigation/>
//             {isLoggedIn ?(
//                 <UserMenu onLogOut={onLogOut} user={user}/>
//             ) : (
//                 <button type="button" onClick={onLogIn}>
//                     Войти
//                 </button>
//             )}
//         </header>
//     )}
//     </authContext.Consumer>
// )