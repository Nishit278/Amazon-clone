import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <React.Fragment>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          {/* {1st Link} */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello User</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          {/* {2nd Link} */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* {3rd Link} */}
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          {/* {4th Link} */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
