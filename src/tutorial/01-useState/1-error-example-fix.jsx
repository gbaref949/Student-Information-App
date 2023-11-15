// This is an example of why we need to use useState and not variables
import {useState} from 'react';
const ErrorExample = () => {
    // useStateSnippet is the shortcut
    const [title, setTitle] = useState('N/A');

    // const [title, setTitle] = useState('Random Title');

    const handleClick = () =>{
        // setTitle(title+1);

        // let arr = ['random title', 'other title', 'this title', 'that title', 'there title', 'here title', 'running out of titles'];
        // setTitle(arr[Math.floor(Math.random() * (2-0+1) + 0)]);
        // console.log(setTitle)
    
        //You can use 
        // setTitle('Cry for Love - Baekhyun')
        //or
        if(title[0] === ''){
            setTitle('Try Again')
        }else{
            setTitle('Cry for Love - Baekhyun')
        }
        
    }
    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>Change Title</button>
        </>
    );
};

export default ErrorExample;