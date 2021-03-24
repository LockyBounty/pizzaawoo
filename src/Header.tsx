import "./styles.css";

const header = ["Accueil", "Menu", "Contact"];

const logo = "LOGO";

const Header = () => (
  <div className="header_main_zone">
    <div className="header_first_zone">
      <div className="header_logo_zone">{logo}</div>
    </div>
    <div className="header_second_zone">
      <div className="header_menu_zone">
        <ul>
          {header.map((menuTitle, index) => (
            <li key={index}>
              <button>{menuTitle}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="header_login_zone">
        <button>LOGIN</button>
      </div>
      <div className="header_flag_zone">
        <button>FR</button>
      </div>
    </div>
  </div>
);

/* idée : pour le flag, faire un seul bouton avec img drapeau -> popup liste des autres langues */

export default Header;
