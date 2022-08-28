import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Menu({title}) {
  
  return (
    
    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
      <a href="/" className="navbar-brand">{title}</a>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to = "/" className = "nav-link">Ana Sayfa</Link>
        </li>
        <li className="nav-item active">
          <Link to = "/yeni" className = "nav-link">Halı Ekle</Link>
       </li>
       <li className="nav-item active">
       <Link to = "/bilgi" className = "nav-link">Bilgi</Link>
    </li>
      </ul>
    </nav>
  )
}
Menu.propTypes = {
  title : PropTypes.string.isRequired
}
Menu.defaultProps = {
  title : "Kullanıcı App"
}
export default Menu;
