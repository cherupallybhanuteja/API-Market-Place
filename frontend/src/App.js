import './App.css';
import LoginPage from './pages/LoginScreen/LoginPage';
import RegisterPage from './pages/RegisterScreen/RegisterPage';
import{BrowserRouter as Router , Routes , Route , useLocation} from 'react-router-dom'
import Error from './pages/ErrorPage';
import Dashboard from './pages/Dashboard/Dashboard';
import BackgroundRemoverScreen from './pages/BackgroundRemover/BackgroundRemoverScreen';
import MyAPIs from './pages/MyApis/MyAPIs';
import MyAccount from './pages/Profile/MyAccount';
import AddAPI from './pages/AddAPI/AddAPI';
function App() {
  return (


    <Router>
      <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/dash-board' element={<Dashboard/>}/>
          <Route path='/background-remover' element={<BackgroundRemoverScreen/>}/>
          <Route path = '/my-api' element={<MyAPIs/>}/>
          <Route path='/new-api' element={<AddAPI/>} />
          <Route path='/my-account' element={<MyAccount/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
