import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  return (
    <div className="container1">
      <div className="container_header">
        <header>
          <div className="logo">
            <img className="logoCarvajal" src={require(`../../assets/Imges/logoCarvajal.jpg`)}
              alt="mainLogo"
            />
          </div>
          <span className="btn_menu">
          <i>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </i>
        </span>
        </header>
      </div>
    </div>
  );
};

export default Header;
