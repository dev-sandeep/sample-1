import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            isError: true
        });
    }

    render(){
        if(this.state.isError){
            return (<h3>An Error in the child component!</h3>);
        }
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

{/* <ErrorBoundary>
    <h1>Hello</h1>
</ErrorBoundary> */}

export default ErrorBoundary;