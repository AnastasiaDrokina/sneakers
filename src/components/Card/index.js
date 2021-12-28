import React from "react";
import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imgUrl} alt="Кроссовки" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center flex-row">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
