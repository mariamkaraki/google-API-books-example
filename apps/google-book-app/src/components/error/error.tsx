import React, { FC } from 'react';

interface Errorprops  {
    errorMessage: String;
}

const Error :FC<Errorprops> = (props : Errorprops):JSX.Element => {
    
    return (
        <div>
            {props.errorMessage}
        </div>
    );
};


export default Error;
