import React from "react";

const ParentComponent = ()=>{
    const [text, setText] = React.useState('');
    const setterFn = (val)=>{
        setText(val);
    }
    return (
        <div>
            {text}
            <ChildComponent data={"sample text"} setter={setterFn} />
        </div>
    );
}

const ChildComponent = (props)=>{
    const handler = (e)=>{
        const val = e.target.value;
        props.setter(val);
    }
    return (
        <div>
            {props.data}
            <input onKeyUp={handler} type="text" />
        </div>
    );
}