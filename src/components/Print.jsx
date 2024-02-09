import * as React from 'react';

export default function Print(props) {
    const [counter, setCounter] = React.useState(1);
    const arr = ['Heman', 'Superman', 'Spiderman']
    const upCount = ()=>{
        setCounter(counter + 1);
    }
    return (
        <h2>
            Print {props.data} {counter}
            <button onClick={upCount}>Click</button>
            {
                arr.map((hero)=>(
                   <h3>{hero}</h3> 
                ))
            }
        </h2>
    );
}

// class PrintClassComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 1,
//             cart: 1
//         }

//         this.upCount = this.upCount.bind(this);
//     }

//     componentDidMount(){
//         console.log("Mounted");
//     }

//     componentDidUpdate(prevState, presentState){
//         // presentState.cart > 10{
            
//         // }
//     }

//     componentWillUnmount(){
        
//     }
    
//     upCount(){
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     }

//     render() {
//         return (
//             <h2>
//                 Print {this.props.data} {this.state.counter}
//                 <button onClick={this.upCount}>Click</button>
//             </h2>
//         );
//     }
// }

// const x = new PrintClassComponent(data);
