import { connect } from 'react-redux';
import {addMovie, changeStatus, deleteItem} from '../../redux/movies-reducer';
import { reset } from 'redux-form';
import { withTheme } from '../../hoc/withTheme';
import * as C from "../../constants";
import Movies from './Movies';

let mapStatetoProps = (state) => ({
    itemData: state.moviesPage.moviesData,
    title: "movie",
    author: "author"
})

let mapDispatchToProps = (dispatch) => {
    return {
        addMovie : (newName) => {
            dispatch(addMovie(newName));
            dispatch(reset('addMovieForm'));
        },
        changeState: (id, checked) => {
            dispatch(changeStatus(id, checked));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(withTheme(Movies, C.BOOK))
