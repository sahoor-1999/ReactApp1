
import PropTypes from "prop-types";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.aboutUs}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input dark-border-checkbox" onClick={props.changeMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeValue}</label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning btn-sm" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

/** SYNTAX FOR PROP-TYPE
 * ------------------------
 * FunctionName.proptype= {fieldName1 : Proptype.string.isRequired
 *                         fieldName2 : Proptype.string.isRequired
 *                        }
 * }
 */
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
};
