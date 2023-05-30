import './App.css';
import SignIn from './components/pages/LoginPage/login';
import Details from './components/pages/Details/Details';
//import Home from './components/pages/Homepage/home';
import SignUp from './components/pages/RegisterPage/register';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <div>
        <SignIn/>
      <SignUp/>
      <Details/>
      </div>
    </div>
  );
}

export default App;
