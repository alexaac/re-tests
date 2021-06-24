import React from 'react';
import User from './User';

const UserList = (props) => {
  console.log(props);
  return (
    <ol>
      	{props.users.map((user, index) => <User key={index} user={user} />)}
  	</ol>
  )
}

export default UserList;