import React, {useState} from 'react';
import {axiosWithAuth} from './axiosWithAuth';

function CreateTicket() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [attempted, setAttempted] = useState('');
    const userID = localStorage.getItem('id');
    const [message, setMessage] = useState('');

    const handleTitle = e => {
        setTitle(e.target.value)
    }
    const handleCategory = e => {
        setCategory(e.target.value)
    }
    const handleDespription = e => {
        setDescription(e.target.value)
    }
    const handleAttempted = e => {
        setAttempted(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        let number = Number(userID);
        setMessage('Your ticket is being submitted.')

        axiosWithAuth()
            .post('/ticket/', {
                title: title,
                category: category,
                description: description,
                attempted: attempted,
                userId: number
            })
            .then(res => console.log(res.message))
            .catch(err => console.log(err.message));

        setTimeout(() => {window.location='/helper'}, 1000)
    }

    const handleCancel = e => {
        window.location='/helper'
    }

    return(
        <div className='helperComponent helperTicket'>
            <h1>Ticket Form</h1>
            <form onSubmit={handleSubmit}>
                Give your ticket a title:<br/>
                <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleTitle}
                    size='40'
                />
                <br/><br/>
                Give your ticket a category:<br/>
                (Examples: JavaScript, React, CSS)<br/>
                <input
                    type='text'
                    name='category'
                    value={category}
                    onChange={handleCategory}
                    size='40'
                />
                <br/><br/>
                Describe the problem you are having:<br/>
                <textarea
                    type='text'
                    name='description'
                    value={description}
                    onChange={handleDespription}
                    rows="8" 
                    cols="32"
                />
                <br/><br/>
                Describe what you have attempted:<br/>
                <textarea
                    type='text'
                    name='attempted'
                    value={attempted}
                    onChange={handleAttempted}
                    rows="8" 
                    cols="32"
                />
                <br/><br/>
                <button className='helperTicketButton'>Submit</button>
            </form>
            <button onClick={handleCancel} className='helperTicketButton'>Cancel</button>
    <       p>{message}</p>
        </div>
    )
}

export default CreateTicket