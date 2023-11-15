import {useState} from 'react';

const useStateCounter = () => {
    
    const [value, setValue] = useState(0);
    
    const reset = () =>{
        setValue(0);
    }

    const complexIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((prevState) => {
                return prevState + 1;
            });
        }, 2000)
    }
  return (
    <>
      <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setValue(value - 1)}>decrese</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={()=>setValue(value + 1)}>increse</button>
      </section>
      <section style={{margin: '4rem'}}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase Later</button>
      </section>
    </>
  );
}

export default useStateCounter;