// This is an example of why we need to use useState and not variables

const ErrorExample = () => {
    let title = 'random title';

    const handleClick = () =>{
        title = 'Welcome Coding Fans';
        console.log(title)
    }
    return (
        <>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>Change Title</button>
        </>
    );
};

export default ErrorExample;

// This is an error because we are not rendering the site
// This will also fail because we don't have a way of perserving the variables between renders