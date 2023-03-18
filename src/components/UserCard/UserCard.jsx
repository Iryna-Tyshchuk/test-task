

import {
  Avatar,
  Button,
  CardBox,
  MainImage,
  UserInfo,
  UserName,
} from './UserCard.styled';

import { ReactComponent as Logo } from 'assets/goit-logo.svg';
import picture from 'assets/picture.svg';

export const UserCard = ({ info }) => {


  const handleClick = e => {

  };

  const { user, avatar, tweets, followers, follow } = info;

  return (
    <CardBox>
      <Logo width={76} height={22} />
      <MainImage src={picture} alt="main-img" />

      <Avatar>
        <div>
          <img src={avatar} alt="user-avatar" />
        </div>
      </Avatar>
      <UserInfo>
        <p>
          <span>{tweets}</span> Tweets
        </p>
        <p>
          <span>{new Intl.NumberFormat('en-US').format(followers)}</span>
          Followers
        </p>
      </UserInfo>

      <Button
        type="button"
        onClick={e => handleClick(e)}
        following={follow}
        name={user}
      >
        {follow ? 'Following' : 'Follow'}
      </Button>
      <UserName>{user}</UserName>
    </CardBox>
  );
};
