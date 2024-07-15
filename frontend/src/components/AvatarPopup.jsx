import React from 'react';
import girl1 from './assets/images/avatars/avatar-girl-1.png';
import girl2 from './assets/images/avatars/avatar-girl-2.png';
import girl3 from './assets/images/avatars/avatar-girl-3.png';
import girl4 from './assets/images/avatars/avatar-girl-4.png';
import girl5 from './assets/images/avatars/avatar-girl-5.png';
import boy1 from './assets/images/avatars/avatar-boy-1.png';
import boy2 from './assets/images/avatars/avatar-boy-2.png';
import boy3 from './assets/images/avatars/avatar-boy-3.png';
import boy4 from './assets/images/avatars/avatar-boy-4.png';
import boy5 from './assets/images/avatars/avatar-boy-5.png';





const AvatarPopup = ({ avatarType, onAvatarSelect, onClose }) => {
  const girlAvatars = [girl1, girl2, girl3, girl4, girl5];
  const boyAvatars = [boy1, boy2, boy3, boy4, boy5];

  const avatars = avatarType === 'girl' ? girlAvatars : boyAvatars;

  return (
    <div className="avatar-popup">
      <h4>Select Avatar</h4>
      <div className="avatar-options">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            className='avatar-img'
            src={avatar}
            alt={`Avatar ${index + 1}`}
            onClick={() => onAvatarSelect(avatar)}
          />
        ))}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AvatarPopup;
