import React , {ButtonHTMLAttributes , FC} from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps} from '@material-ui/core/Button';

// interface ButtonProps {
//     title: string;
//     color: string;
//     variant: string;
//     handleClick(): void;
//   }
const MyButton : FC<ButtonProps> =  (props: ButtonProps): JSX.Element => {
    return(
        <Button variant={props.variant}  color={props.color} onClick={props.onClick}>{props.title}</Button>
    );
};
export default MyButton;
