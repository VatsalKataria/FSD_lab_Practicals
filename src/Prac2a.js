const AlertMsg = () => {
    const OnClick = () =>{
        alert('The button was clicked.');
    }
    return(
        <button onClick={OnClick}>
            Click Here
        </button>
    );
};


export default AlertMsg;