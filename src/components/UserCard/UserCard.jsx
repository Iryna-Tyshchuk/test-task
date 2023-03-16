import { Button } from 'components/Button/Button';
import { useState } from 'react';

export const UserCard = () => {
  const [followers, useFollowers] = useState(100500);
  return (
    <>
      <img alt={'userPhoto'} src={''} />
      <p> 777 tweets</p>
      <p>{followers} Followers</p>
      <Button />
    </>
  );
};
