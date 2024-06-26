import {memo} from 'react';

import React from 'react'

const Search = ({onChange}) => {
    console.log('Search rendered!');
  return (
    <input 
    type="text"
    placeholder='Search users...'
    onChange={(e) => onChange(e.target.value)}
     />
  );
}

export default memo(Search);