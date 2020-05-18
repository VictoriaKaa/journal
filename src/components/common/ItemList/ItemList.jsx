import React, { useState } from "react";
import styles from "./ItemList.module.css";
import Item from "./Item";
import { TITLES } from "../../../constants";
import cn from "classnames";

const ItemList = (props) => {
  let num = 1;
  const [check, setCheck] = useState(false);
  return (
    <div className={styles.booksBlock}>
      <div className={styles.booksList}>
        <div className={styles.booksTitle}>{TITLES[props.title]}</div>
        {props.children}
        {props.itemData
          .filter((element) => element.checked === check)
          .map((element) => {
            return (
              <div className={styles.itemBlock} key={element.id}>
                <span className={styles.id}>{num++}.&nbsp;</span>
                <Item
                  element={element}
                  changeState={props.changeState}
                  deleteItem={props.deleteItem}
                />
              </div>
            );
          })}
        <div
          onClick={() => setCheck(!check)}
          className={cn(styles.addBtn, styles.checkBtn)}
        >
          {!check && "АРХИВ"}
          {check && "Вернуться к списку"}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
