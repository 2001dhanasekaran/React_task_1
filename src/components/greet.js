function Greet(props){
    const{name}=props;
    const text=`Hello, ${name}! Welcome to React!`;
    return(
        <>
            <h2>{text}</h2>
        </>
    );
}
export default Greet;