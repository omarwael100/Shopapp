import { Login } from "./Login";
import { Shop } from "./Shop";
import { CookiesProvider, useCookies } from 'react-cookie'

export const Cookies= () => {
    const [cookies, setCookie] = useCookies(['user'])
    function handleLogin(user) {
      setCookie('user', user, { path: '/' })
    }
    return(
    <CookiesProvider>
    <div>
      {cookies.user ? <Shop user={cookies.user} /> : <Login onLogin={handleLogin} />}
      </div>
    </CookiesProvider>
    );
}