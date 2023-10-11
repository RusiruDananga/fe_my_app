import React, {useEffect, useState} from 'react';

function CreateBook(props)
{
    const {onCreate} = props;

    const [book, setBook] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(book);
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="Title">
                Title:
                <input type="text" name='title' value={book.title} onChange={(e) => handleChange(e)}/>
            </label>
            <label htmlFor="Description">
                Description:
                <input type="text" name='description' value={book.description} onChange={(e) => handleChange(e)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateBook