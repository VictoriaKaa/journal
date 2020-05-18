import { connect } from "react-redux";
import { reset } from "redux-form";
import { addBook, changeRead, deleteItem } from "../../redux/books-reducer";
import * as C from "../../constants";
import { withTheme } from "../../hoc/withTheme";
import Books from "./Books";

let mapStatetoProps = (state) => ({
  itemData: state.booksPage.booksData,
  title: "book",
  author: "author",
});
let mapDispatchToProps = (dispatch) => ({
  addItem: (title, author) => {
    dispatch(addBook(title, author));
    dispatch(reset("AddBookForm"));
  },
  changeState: (id, checked) => {
    dispatch(changeRead(id, checked));
  },
  deleteItem: (id) => {
    dispatch(deleteItem(id));
  },
});

export default connect(mapStatetoProps, mapDispatchToProps)(withTheme(Books, C.BOOK));
