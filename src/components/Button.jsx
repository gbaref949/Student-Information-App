import {useState} from 'react';

const Button = () =>{
    //sets the state to true and the color
    const [state, setState] = useState(['true', 'green']);
    //sets the click count to 0
    const [count, setCount] = useState(0)

    const change = ()=>{
        //determine which value needs to be set
        if(state[0] === 'false'){
            setState(['true', 'green']);
        }else{
            setState(['false', 'red']);
        }
        //updates the count by 1
        setCount(count+1);
    }
    return (
        <>
            <p>Count: {count}</p>
            <p>State: {state[0]}</p>
            {/*calls a function to update var and the sets the properties depending on the new values*/}
            <button onClick={change} style={{backgroundColor:state[1], marginBottom:'2.5rem'}}>Click Button</button>
            
        </>
    );
};

export default Button;