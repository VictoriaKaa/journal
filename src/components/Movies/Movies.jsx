import React from 'react';
import { reduxForm } from 'redux-form';
import ItemList from '../common/ItemList/ItemList';
import AddItemForm from "../common/ItemList/AddItemForm";

const Movies = (props) => {
  let addMovie = (values) => {
    props.addMovie(values.movie);
  };
  return (
    <ItemList {...props} >
      <AddMovieFormRedux onSubmit={addMovie} title={props.title} />
    </ItemList>
  );
}

const AddMovieFormRedux = reduxForm({ form: "addMovieForm" })(AddItemForm);


export default Movies;