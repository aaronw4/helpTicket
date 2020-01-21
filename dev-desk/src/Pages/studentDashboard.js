import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../Components/axiosWithAuth';
import LogOutHeader from '../Components/logOutHeader'

function Student() {
    const [tickets, setTickets] = useState([]);
    const userID = localStorage.getItem('id');
    const username = localStorage.getItem('name');

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
    });

    const handleCreateTicket = e => {
        window.location=('/helper/Ticket');
    };

    return(
        <div className='studentComponent'>
            <LogOutHeader/>
            <button onClick={handleCreateTicket} className='helperCreateTicketButton'>Create Ticket</button>
            <div>
                <h1 className='welcome'>Welcome {username} to the Student Help Page!</h1>
            </div>
            <div className='ticketsContainer'>
                <div className='ticketSubcontainer'>
                    <h3 className='ticketList'>List of Tickets</h3>
                    {tickets.map(ticket => (
                            <div className='ticketList' key={ticket.id}>
                                <p>Title: {ticket.title}</p>
                                <p>Category: {ticket.category}</p>
                                <p>Description: {ticket.description}</p>
                                <p>Attempted: {ticket.attempted}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default Student