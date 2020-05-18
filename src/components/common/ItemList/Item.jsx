import React from "react";
import styles from "./ItemList.module.css";

const Item = ({ element, changeState, deleteItem }) => {
  const changeRead = (e) => {
    changeState(e.target.id, e.target.checked);
  };
  return (
    <div className={styles.book}>
      <div>
        <span className={styles.title}>{element.name}</span>
        {!!element.author && (
          <div className={styles.author}>{element.author}</div>
        )}
        <div className={styles.changeBlock}>
          <input
            type="checkbox"
            id={element.id}
            defaultChecked={element.checked}
            onChange={changeRead}
          />
          <label className={styles.click} htmlFor={element.id} />
          <div className={styles.read}>
            {element.checked && "Сделано"}
            {!element.checked && "Не сделано"}
          </div>
        </div>
      </div>
      <div
        className={styles.delete}
        onClick={() => deleteItem(element.id)}
      ></div>
    </div>
  );
};

export default Item;
