import {useState} from 'react';
import {data} from '../../data';

//The components are all connected 
const PropDrilling = () => {//component one
    const [people, setPeople] = useState(data)//passing removePersonn into list

    const removePerson = (id) =>{
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    }

    return (
        <section>
            <h3>Prop Drilling</h3>
            <List people={people} removePerson = {removePerson}/>
        </section>
    );
}
const List = ({people, removePerson}) =>{//list passed it into SinglePerson
    return (//component two
    <>
      {people.map((person)=> {
        return(
            <SinglePerson
                key = {person.id}//passed down as an actual property key and id
                {...person}//you can specify multiple properties but it would make seperate fields
                //that why you spread operator and use what you need
                removePerson = {removePerson}
            />
        );
      })}
    </>
  );
};

//component three
const SinglePerson = ({id, first_name, removePerson}) =>{//usallly a seprate file in the component section that takes in 3 inputs
    return(//SinglePerson actually use it 
        <div className="item" style={{margin: '4rem'}}>
            <h4>{first_name}</h4>
            <button onClick={()=> removePerson(id)}>remove</button>
        </div>
    );
};

export default PropDrilling;