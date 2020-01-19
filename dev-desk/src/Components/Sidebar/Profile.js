import React from 'react';
import connect from 'react-redux'
import Button from 'antd';
import CreateTicket from '../CreateTicket';
import toggleCreateTicket from '../../redux/Actions/studentActions';

const userProfile = ({
  user: {
    credentials: {username, role}
  },
  toggleCreateTicket
}) => {
  return(
    <div style={{textAlign: 'center'}}>
      <img
        src='/SVG/batman.svg'
        alt="Batman"
        style={{
          paddingTop: '30%',
          borderRadius: '65%',
          paddingBottom: '1em',
          width: '100px',
          height: '100%'
        }}
      />
      <br/>
      
      <Button shape="round" ghost>
        {role}
      </Button>
      
      <h3
        style={{
          color: '#FAEBD7',
          paddingTop: '20%'
        }}
      >
        {username}
      </h3>
      
      <br/>
      
      {role === 'student' && (
        <>
          <Button
            style={{
              background: '#246A73',
              border: 'none',
              color: 'white',
              marginTop: '15%'
            }}
            onclick={toggleCreateTicket}
          >
            Create Ticket          
          </Button>
          
          <CreateTicket/>
        </>    
      )}
    </div>
  );
};

const mapStateToProps = state =>({
  user: state.user,
  ticket: state.ticket
});

const mapActionToProps = {
  toggleCreateTicket
};

export default connect (
  mapStateToProps,
  mapActionToProps
)(userProfile);
