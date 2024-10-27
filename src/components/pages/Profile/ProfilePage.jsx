import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function ProfilePage() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
      <div className="profile-container" style={{ height: "300px" }}>
        <div className="profile">
          <img className="profile-picture" src={picture} alt={name} />
          <div>Username: {name}</div>
          <div>Email: {email}</div>
        </div>
      </div>
  );
}

export default ProfilePage;