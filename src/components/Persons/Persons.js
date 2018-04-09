import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((element, index) => {
        return <Person key={element.id} person={element}
                    click={() => props.clicked(index)}
                    changed={(event) => props.changed(event, element.id)} />
});

export default persons;