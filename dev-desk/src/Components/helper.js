import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from './axiosWithAuth';
import LogOutHeader from './logOutHeader';

function Helper() {
    const [tickets, setTickets] = useState([]);
    const [userTickets, setUserTickets] = useState([]);
    const [update, setUpdate] = useState(1)
    const userID = localStorage.getItem('id');
    const username = localStorage.getItem('name')

    useEffect(() => {
        const getTickets = () => {
            axiosWithAuth()
                .get('/ticket/')
                .then(res => {
                    setTickets(res.data);
                    console.log(res);
                })
                .catch(err => console.log(err.message))
        };
        getTickets()
        
        const getUserTickets = () => {
            axiosWithAuth()
                .get(`/ticket/users-tickets/${userID}`)
                .then(res => {
                    setUserTickets(res.data)
                    console.log(res);
                })
                .catch(err => console.log(err))
        };
        getUserTickets()
    },[update]);

    const assignTicket = e => { 
        let user = Number(userID);
        let ticket = Number(e.target.value);

        axiosWithAuth()
            .put(`/ticket/assign`, {
                userId: user,
                ticketId: ticket                
            })
            .catch(err => console.log(err.message));

        setTimeout(() => {setUpdate(update +1)}, 100);
    };

    const unassignTicket = e => {
        let ticket = Number(e.target.value);

        axiosWithAuth()
            .put(`/ticket/unassign`, {
                ticketId: ticket
            });

        setTimeout(() => {setUpdate(update +1)}, 100);
    }

    const ticketResolved = e => {
        let ticket = Number(e.target.value);
        console.log(ticket)

        axiosWithAuth()
            .put('/ticket/resolved', {
                ticketId: ticket
            });

        setTimeout(() => {setUpdate(update +1)}, 100);
    }

    const handleCreateTicket = e => {
        window.location=('/helper/Ticket');
    }

    const deleteTicket = e => {
        e.preventDefault();
        let user = Number(userID);
        let id = Number(e.target.value)

        axiosWithAuth()
            .delete('/ticket/', {data: {
                userId: user,
                ticketId: id
            }})
            .catch(err => console.log(err.message))
        
        setTimeout(() => {setUpdate(update +1)}, 100);
    }
    
    return(
        <div className='helperComponent'>
            <LogOutHeader/>
            <button onClick={handleCreateTicket} className='helperCreateTicketButton'>Create Ticket</button>
            <div>
                <h1 className='helperWelcome'>Welcome {username} to the Helper page!</h1>
            </div>
            <div className='helperTicketsContainer'>
                <div className='helperTicketSubcontainer'>
                    <h3 className='ticketListHelper'>List of Tickets</h3>
                    {tickets.map(ticket => (
                        <div className='ticketListHelper' key={ticket.id}>
                            <p>Title: {ticket.title}</p>
                            <p>Category: {ticket.category}</p>
                            <p>Description: {ticket.description}</p>
                            <p>Attempted: {ticket.attempted}</p>
                            {ticket.resolved === true ? <p>Resolved</p> : null }
                            {ticket.openStatus === false && ticket.resolved === false ? <p>Ticket Assigned</p> : null}
                            {ticket.resolved === false && ticket.openStatus === true ? <button onClick={assignTicket} value={ticket.id}>Assign Ticket</button> : null}
                            {ticket.userId === Number(userID) ? <button value={ticket.id} onClick={deleteTicket}>Delete</button> : null}
                        </div>
                    ))}
                    
                </div>
                <div className='helperTicketSubcontainer'>
                    <h3 className='assignedListHelper'>Tickets Assigned to You</h3>
                    {userTickets.map(ticket => (
                        <div className='assignedListHelper' key={ticket.id}>
                            <p>Title: {ticket.title}</p>
                            <p>Category: {ticket.category}</p>
                            <p>Description: {ticket.description}</p>
                            <p>Attempted: {ticket.attempted}</p>
                            <button value={ticket.id} onClick={ticketResolved}>Ticket Resolved</button>
                            <button value={ticket.id} onClick={unassignTicket}>Unassign Ticket</button>
                        </div>
                    ))}
                </div>
            </div>           
        </div>
    )
}

export default Helper;