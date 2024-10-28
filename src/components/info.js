import Greet from "./greet";
import Age from "./age";
function Info(){
    const name= "Dhanasekaran";
    const age="23";
    return(
        <>
            <Greet name={name}/>
            <Age age={age}/>
        </>
    );
}
export default Info;