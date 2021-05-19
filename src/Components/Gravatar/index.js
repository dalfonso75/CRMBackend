import React from "react";
import md5 from 'md5';
import {Avatar} from './styles'

function Gravatar({email, mameClass}) {
    const hash = md5(email);
  return (
    <Avatar className ={mameClass} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="avatar" />
  );
        
}

export default Gravatar;
