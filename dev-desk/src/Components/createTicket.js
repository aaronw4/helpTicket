import React from 'react';
import {Modal, Button, notification, Form, Input} from 'antd';
import withFormik from 'formik';
import connect from 'react-redux';
import {toggleCreateTicket, createTicket} from './Actions/studentActions';
import styled from 'styled-components';

const styledForm = styled.form`
  width: 80%;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div {
    width: 100%
  }
`;

const textArea = Input;

let validTicket;

const C = ({
  tickets,
  toggleCreateTicket,
  user: {
    credentials: {role, id}
  },
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
}) => {
  const handleCancel = () => {
    toggleCreateTicket();
  };
  
  const openNotification = description => {
    notification.open({
      message: 'Valid',
      description: description
    });
  };
  
  validTicket = () => {
    toggleCreateTicket();
    openNotification('Congratulations, you have created a vaild ticket');
  };
  
  return (
    <div>
      <Modal
        title="Create a New Ticket"
        visible={tickets.showCreateTicket}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
        ]}
      >
        <styledForm className="loginForm" onSubmit={handleSubmit}>
          <Form.Item
            help={
              touched.title && errors.title 
              ? errors.title : ''
            }
            
            validateStatus={
              touched.title && errors.title 
              ? 'error' : undefined
            }
          >
            <Input
              size="large"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Title"
              maxLength={30}
            />          
          </Form.Item>
          
          <Form.Item
            help={
              touched.description && errors.description
              ? errors.description : ''
            }
            
            validateStatus={
              touched.category && errors.description
              ? 'error' : undefined
            }
          >
            <textArea
              name="description"
              placeholder="Description"
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              autoSize={{minRows: 4, maxRows: 6}}
            />         
          </Form.Item>
          
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </styledForm>      
      </Modal>
    </div>
  );
};

const CreateTicket = withFormik({
  mapPropsToValues: () => ({title: '', description: ''}),
  handleSubmit: (values, {props, setSubmitting}) => {
    props.createTicket({
      ...values,
      status: 'pending',
      studentID: props.user.credentials.id
    });
    validTicket();
    setSubmitting(false);
  }
})(C);

const mapStateToProps = state => ({
  tickets: state.ticket,
  user: state.user
});

const mapActionsToProps = {
  toggleCreateTicket,
  createTicket
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateTicket);