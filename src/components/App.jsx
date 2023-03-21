import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/operations';
import { selectLoading, selectUsers } from 'redux/users/selectors';
import { Wrapper } from './App.styled';
import { Loader } from './Loader/Loader';
import { UserCard } from './UserCard/UserCard';
import { UsersList } from './UsersList/UsersList.styled';

export const App = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   if (error) {
  //     toast.error('Sorry, something went wrong');
  //   }
  // }, [error]);

  return (
    <Wrapper>
      {users.length > 0 && (
        <UsersList>
          {users.map(({ id, ...info }) => (
            <UserCard key={id} info={info} id={id} />
          ))}
        </UsersList>
      )}
      {isLoading && <Loader />}
    </Wrapper>
  );
};
