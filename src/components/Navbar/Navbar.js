import { Link } from "react-router-dom"

function NavBar() {
    return (
        
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link to='/'className="navbar-brand"><i>LAB - WikiCountries</i></Link>            
        </div>
      </nav>
    )    
}

export default NavBar