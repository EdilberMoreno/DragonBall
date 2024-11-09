import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img className="img-fluid" src="./src/assets/DBZ.png" alt="Logo Dragon Ball" width="300" height="100"/>
        </div>
        <NavBar/>
      </div>
    </header>
  )
}

export default Header