import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { addDoing, addDoingAtDay, deleteDoing, addColor, extendDoing, addMonthWithDoing } from '../../../redux/months-reducer';
import Week from './Week';

let mapStatetoProps = (state) => ({
    monthData: state.monthPage.monthData
})

let mapDispatchToProps = (dispatch) => {
    return {
        addDoing: (id, doing, week) => {
            dispatch(addDoing(id, doing, week));
            dispatch(reset('addDoingForm'));
        },
        addDoingAtDay: (id, doingId, day) => {
            dispatch(addDoingAtDay(id, doingId, day));
        },
        extendDoing: (id, doingId, week) => {
            dispatch(extendDoing(id, doingId, week));
        },
        deleteDoing: (id, doingId) => {
            dispatch(deleteDoing(id, doingId));
        },
        addColor: (id, doingId, color) => {
            dispatch(addColor(id, doingId, color));
        },
        addMonthWithDoing: (month, year, doing) => {
            dispatch(addMonthWithDoing(month, year, doing));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Week)
