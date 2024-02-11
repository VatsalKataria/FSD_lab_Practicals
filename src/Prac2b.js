const PersonList = ({ persons }) => {
    return (
      <div>
        <h2>List of Persons</h2>
        <ul>
          {persons.map(person => (
            <li key={person.id}>
              <span>ID: {person.id}</span> - <span>Name: {person.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PersonList;
  