import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountriesList from './components/CoutriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NavBar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import countries from "./countries.json"


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <div className='row'>
        
          <CountriesList countries={ countries } />          
            <Routes>              
              <Route path="/:id" element={ <CountryDetails countries={ countries } /> } />
              <Route path="*" element={ <ErrorPage /> } />
          </Routes>
          
        </div>
      </div>
    </div>
  );
}

export default App;
