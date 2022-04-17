import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import SingleService from './components/SingleService/SingleService';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import RequiresAuth from './components/RequiredAuth/RequiresAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path='/singleservice/:id' element={
          <RequiresAuth>
            <SingleService></SingleService>
          </RequiresAuth>

        } />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
