import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <header>
      <div className="navbar">
        <nav className="menu">
          <Link to={"/"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Inicio</Button>
          </Link>
          <Link to={"/character/Human"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Humano</Button>
          </Link>
          <Link to={"/Ncharacter/NoHuman"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">No Humano</Button>
          </Link>
          <Link to={"/about"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Acerca de</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
