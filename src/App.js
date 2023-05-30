import "./App.css";
import SignIn from "./components/pages/LoginPage/login";
// import Details from "./components/pages/Details/Details";
// import Home from './components/pages/Homepage/home';
// import SignUp from "./components/pages/RegisterPage/register";
// import ForgotPassword from "./components/pages/LoginPage/ForgotPassword";
// import ResetPasword from "./components/pages/LoginPage/ResetPassword";
// import Password from "./components/pages/LoginPage/Password";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <div>
        <SignIn />
        {/* <SignUp />
        <Details />
        <ForgotPassword />
        <ResetPasword />
        <Password /> */}
      </div>
    </div>
  );
}

export default App;
