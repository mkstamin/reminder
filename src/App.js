import React, { useState } from 'react';
import List from './components/BirthdayLists';
import data from './data/data';

function App() {
    const [people, setPeople] = useState(data);

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                {people.map((person) => (
                    <List key={person.id} person={person} />
                ))}
                <button type="button" className="clear-all" onClick={() => setPeople(() => [])}>
                    clear all
                </button>
            </section>
        </main>
    );
}

export default App;
