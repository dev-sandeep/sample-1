import * as React from 'react';

export default function HelloWorld(props){
    const isRobo = props.isRobo;

    return (
        <h2>
            Hello {isRobo ? 'R2D2': props.name}
        </h2>
    );
}