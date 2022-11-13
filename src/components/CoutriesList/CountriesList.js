import { Link } from 'react-router-dom';
import "./CountriesList.css"
import ListGroup from 'react-bootstrap/ListGroup';

function CountriesList({ countries }) {
  return (
    <div className="col-5 over-flow-auto countries-list" style={{ maxHeight: '88vh', overflowX: 'hidden' }} >      
        <ListGroup>
          <ListGroup.Item action variant="light">
            { countries.map(country =>
                <Link 
                  key={country.alpha3Code}
                  to={`/${ country.alpha3Code }`}
                  className="list-group-item list-group-item-action list-group-item-light"
                >            
                  <span className="country-alpha2"> { country.alpha2Code } </span> 
                  <img
                                src={'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png'}
                                style={{ maxWidth: '30px', marginRight: '10px' }}
                                alt={`Flag of ${country.name.common}`}
                  ></img>
                  <span className="country-name"> {country.name.common} </span>            
                </Link>          
            ) }
            </ListGroup.Item>        
        </ListGroup>      
    </div>
  );
} 

export default CountriesList