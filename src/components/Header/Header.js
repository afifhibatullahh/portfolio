import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            <img width={50} src="union.svg"></img>
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
