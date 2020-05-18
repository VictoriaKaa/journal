import React from "react";
import styles from "./ItemList.module.css";
import { Field } from "redux-form";
import { Input } from "../FormsControls/FormsControls";

const NAMES = {
  movie: 'название фильма',
  book: 'название книги',
  plan: 'план',
};

const AddItemForm = (props) => {
    let name = `Введите ${NAMES[props.title]}`;
    return (
      <form onSubmit={props.handleSubmit}>
        <div className={styles.bookFormInner}>
          <Field
            component={Input}
            name={props.title}
            placeholder={name}
            className={styles.formControl}
          />
          {!!props.author && (
            <Field
              component={Input}
              name={props.author}
              placeholder="Введите имя автора"
              className={styles.formControl}
            />
          )}
          <button className={styles.addBtn}>Добавить</button>
        </div>
      </form>
    );
  };

export default AddItemForm