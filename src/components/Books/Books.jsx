import React from "react";
import { reduxForm } from "redux-form";
import ItemList from "../common/ItemList/ItemList";
import AddItemForm from "../common/ItemList/AddItemForm";

const AddItemFormRedux = reduxForm({ form: "AddBookForm" })(AddItemForm);

const Books = (props) => {
  const addItem = (values) => {
    props.addItem(values.book, values.author);
  };
  return (
    <ItemList {...props}>
      <AddItemFormRedux
        onSubmit={addItem}
        title={props.title}
        author={props.author}
      />
    </ItemList>
  );
};

export default Books;
