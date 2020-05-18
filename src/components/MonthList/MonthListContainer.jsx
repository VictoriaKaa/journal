import { connect } from 'react-redux';
import { reset } from 'redux-form';
import MonthList from './MonthList';
import { addMonth, deleteMonth } from '../../redux/months-reducer';

let mapStatetoProps = (state) => ({
    monthData: state.monthPage.monthData
})

let mapDispatchToProps = (dispatch) => {
    return {
        addMonth: (month, year) => {
            dispatch(addMonth(month, year));
            dispatch(reset('addMonthForm'));
        },
        deleteMonth: (id) => {
            dispatch(deleteMonth(id));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MonthList)
