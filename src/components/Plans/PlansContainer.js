import { connect } from 'react-redux';
import {addPlan, changeStatus, deleteItem} from '../../redux/plans-reducer';
import { reset } from 'redux-form';
import { withTheme } from '../../hoc/withTheme';
import * as C from "../../constants";
import Plans from './Plans';

let mapStatetoProps = (state) => ({
    itemData: state.plansPage.plansData,
    title: "plan"
})

let mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newName) => {
            dispatch(addPlan(newName));
            dispatch(reset('addPlanForm'));
        },
        changeState: (id, checked) => {
            dispatch(changeStatus(id, checked));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(withTheme(Plans, C.PLAN))
