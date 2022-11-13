import ListGroup from 'react-bootstrap/ListGroup';
import {Link, useParams} from "react-router-dom";
import "./CountryDetails.css"


function CountryDetails({ countries }) {
    const { id }  = useParams();    

function getCountry(id) {
    return countries.find((oneCountry) => oneCountry.alpha3Code === id)
}

    const theCountry = getCountry(id)
    
    return (
        <div className="col-7 country-details">
            
            <div className="country-detailed">
                <img
                    src={'https://flagpedia.net/data/flags/icon/72x54/' + theCountry.alpha2Code.toLowerCase() + '.png'}
                    style={{ marginRight: '20px' }}
                    alt={`Flag of ${theCountry.name.common}`}
                ></img>
                <span>{ theCountry.name.common }</span>
            </div>
                    

            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td style={{width: 30}}>Capital</td>
                    <td>{theCountry.capital[0]}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        { theCountry.area } km
                        <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ListGroup className="country-borders">
                            { theCountry.borders?.map(border =>
                        <ListGroup.Item action variant="info"> 
                                <span key={border}>
                                    <Link to={`/${border}`} >{ getCountry(border).name.common }</Link>
                                </span>
                        </ListGroup.Item>                         
                            ) }
                        </ListGroup>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails