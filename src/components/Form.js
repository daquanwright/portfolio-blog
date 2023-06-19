import React, {useState, useEffect} from 'react';

const Form = () => {

    const [data, setData] = useState({name: '', email: '', message: ''});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({name: '', email: '', message: ''})
        console.log(data)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/Send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'Success') {
                alert('Message Sent!');
            } else if (response.status === 'Fail') {
                alert('Message Failed To Send!');
            }
        })
    }

    return (

        <form method='POST' onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={data.name} onChange={handleChange} /><br/>

            <label htmlFor="email">E-Mail: </label>
            <input type="text" id="email" name="email" value={data.email} onChange={handleChange} /><br/>

            <label htmlFor="message">Your Message: </label>
            <textarea type="text" id="message" name="message" value={data.message} onChange={handleChange} cols='100'></textarea><br/><br/>
            
            <input type="submit" value="Submit" className='submit' />

            {/* <p>{data.name}, {data.email}, {data.message}</p> */}
        </form>

    )

}

export default Form;