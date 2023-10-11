import React, {useEffect, useState} from 'react';

function TableBook(props)
{
    const {books, onDelete, onUpdate} = props;

    return(
        <table>
            <tr>
                <td>Title</td>
                <td>Description</td>
            </tr>
            {
                books.map(book => {
                    return(
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <DescriptionForm book={book} onUpdate={onUpdate} />
                            <td><button onClick={() => onDelete(book._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

function DescriptionForm(props)
{

    const {book, onUpdate} = props;

    const [description, setDescription] = useState(book.description);

    const handleChange = (event) => {
        setDescription(event.target.value);
    }

    return(
        <div>
            <td>
                <input type="text" value={description} onChange={(event) => {handleChange(event)}} />
            </td>
            <td>
                <button onClick={() => onUpdate({_id: book._id, description: description})}>Update</button>
            </td>
        </div>
    )
}

export default TableBook