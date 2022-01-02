import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between aligh-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" alt="Логотип" width={40} height={40} />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/img/card.svg" alt="Cart" width={18} height={18} />
          <span>1205 руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img src="/img/heart.svg" alt="Favorite" width={18} height={18} />
          </Link>
        </li>
        <li>
          <img src="/img/user.svg" alt="Profile" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
