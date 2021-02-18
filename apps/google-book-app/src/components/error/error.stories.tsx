import React from 'react';
import Error from './error';

export default {
    component: Error,
    title: 'Error',
};
  
export const ErrorMessage = () => {
    return <Error errorMessage={"An error occurred, please try again later"}/>;
};
