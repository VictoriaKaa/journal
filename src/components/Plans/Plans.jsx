import React from 'react';
import { reduxForm } from 'redux-form';
import AddItemForm from '../common/ItemList/AddItemForm';
import ItemList from '../common/ItemList/ItemList';

const Plans = (props) => {
  let addPlan = (values) => {
    props.addItem(values.plan);
  };
  return (
    <ItemList {...props}>
      <AddPlanFormRedux
        onSubmit={addPlan}
        title={props.title}
      />
    </ItemList>
  );
};

const AddPlanFormRedux = reduxForm({ form: "addPlanForm" })(AddItemForm);

export default Plans;