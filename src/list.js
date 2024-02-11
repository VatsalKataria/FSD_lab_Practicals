import PersonList from './Prac2b';

const List = () => {
    const persons = [
        { id : 1, name : 'Vatsal'},
        { id : 2, name : 'Kataria'},
        { id : 3, name : 'Rajat'}
    ];
    return(
        <div>
            <PersonList persons = {persons}/>
        </div>
    );
};

export default List