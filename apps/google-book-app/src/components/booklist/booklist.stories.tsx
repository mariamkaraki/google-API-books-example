import React from 'react';
import Booklist from './booklist';
import dummydata from '../../../src/dummydata';
import Book from '../../type/bookType';

export default {
    component: Booklist,
    title: 'Booklist',
};
  
export const BookInfo = () => {
    return <Booklist searchInputVal={"css"} Books={dummydata as Book[] } />;
};