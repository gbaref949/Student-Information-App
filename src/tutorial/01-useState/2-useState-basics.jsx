import {useState} from 'react';
import {data} from '../../data';

// starts with use component must be uppercased
// invoke inside function/component body
// Don't call hooks conditionally

const useStateArray = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) =>{
        let newPeople = people.filter((person)=> {return person.id !== id})
        setPeople(newPeople)
    }
  return (
    <>
      {people.map((person) => {
        const {id, first_name} = person;
        return (//only returns one item with alot of things within that div
          <div key = {id} className='item'>
            <h4>{first_name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>clear items</button>
    </>
  );
}

export default useStateArray;