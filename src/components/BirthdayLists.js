import React, { useState } from 'react';

const List = ({ person }) => {
    const [message, setMessage] = useState(false);

    const { name, age, image } = person;
    return (
        <article className="person">
            <img src={image} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button
                    type="button"
                    className={`hb-btn ${message ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={message ? 'disabled' : ''}
                    onClick={() => {
                        setMessage(!message);
                    }}
                >
                    {' '}
                    {message ? 'Message Send ✔ ' : 'Say, Happy Birthday! 🎂'}
                </button>
            </div>
        </article>
    );
};

export default List;
