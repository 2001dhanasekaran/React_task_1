import React from "react";
class Age extends React.Component{
    render(){
        const{age}=this.props;
        return(
            <>
            <h2>You are {age} years old</h2>
            </>
        );
    }
}
export default Age;