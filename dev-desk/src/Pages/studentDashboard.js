import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../Components/axiosWithAuth';
import LogOutHeader from '../Components/logOutHeader'

function Student() {
    const [tickets, setTickets] = useState([]);
    const [userTickets, setUserTickets] = useState([]);
    const userID = localStorage.getItem('id');
    const username = localStorage.getItem('name');
    const [update, setUpdate] = useState(1)

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
    },[update]);  
    
    useEffect(() => {   
        let newList =  tickets.filter(ticket => ticket.userId === Number(userID));
        setUserTickets(newList);
    },[tickets])


    const handleCreateTicket = e => {
        window.location=('/helper/Ticket');
    };

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
        <div className='studentComponent'>
            <LogOutHeader/>
            <button onClick={handleCreateTicket} className='createTicketButton'>Create Ticket</button>
            <div>
                <h1 className='welcome pageTitle'>Welcome {username} to the Student Help Page!</h1>
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
                                <p>Ticket submitted by: {ticket.username}</p>
                            </div>
                        ))}
                </div>
                <div className='ticketSubcontainer'>
                    <h3 className='assignedListHelper'>Your Tickets</h3>
                    {userTickets.map(ticket => (
                        <div className='assignedListHelper' key={ticket.id}>
                            <p>Title: {ticket.title}</p>
                            <p>Category: {ticket.category}</p>
                            <p>Description: {ticket.description}</p>
                            <p>Attempted: {ticket.attempted}</p>
                            <p>Ticket submitted by: {ticket.username}</p>
                            <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Student