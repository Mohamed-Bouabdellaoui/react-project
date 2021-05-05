import {Link} from "react-router-dom";

function Navbar(){

    return(
        <nav className="navbar navbar-expand-sm navbar-light BG"> 
        <Link className="navbar-brand logo" to="/">MyRecipe</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-sm-4"></div>
        {/* Le div ciblé par Button */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link HR px-5">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Recipes" className="nav-link HR px-5">Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Favoris" className="nav-link HR px-5">Favoris</Link>
                </li>
                </ul>
            </div>
        {/* Le div ciblé par Button */}    
</nav>
    );
}
export default Navbar;