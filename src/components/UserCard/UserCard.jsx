import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/operations';
import { ReactComponent as Logo } from 'assets/goit-logo.svg';
import picture from 'assets/picture.svg';
import {
  Avatar,
  Button,
  CardBox,
  MainImage,
  UserInfo,
  UserName,
} from './UserCard.styled';

export const UserCard = ({ info, id }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    console.log('e', e);
    if (e.target.name === info.user) {
      if (!info.following) {
        info.following = true;
        info.followers += 1;
      } else {
        info.following = false;
        info.followers -= 1;
      }
      dispatch(updateUser({ ...info, id }));
    }
  };

  const { user, avatar, tweets, followers, following } = info;
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
          <span>{new Intl.NumberFormat('en-US').format(followers)} </span>
          Followers
        </p>
      </UserInfo>

      <Button
        type="button"
        onClick={e => handleClick(e)}
        following={following}
        name={user}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
      <UserName>{user}</UserName>
    </CardBox>
  );
};
