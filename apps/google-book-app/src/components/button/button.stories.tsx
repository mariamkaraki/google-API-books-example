import React from 'react';
import Button from './button';

export default {
    component: Button,
    title: 'Button',
};
  
export const PrimaryButton = () => {
    return <Button title="Search" variant="contained" color="primary"/>;
};


