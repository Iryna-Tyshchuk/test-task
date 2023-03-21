import styled from 'styled-components';

export const CardBox = styled.li`
  box-sizing: border-box;
  width: 380px;
  padding: 28px 0 36px;
  position: relative;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  & > svg {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const MainImage = styled.img`
  display: block;
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
  margin: 0 auto;
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 26px;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  & > div {
    width: 72px;
    height: 72px;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 8px solid #ebd8ff;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      outset 0px -2.19582px 4.39163px #ae7be3,
      outset 0px 4.39163px 3.29372px #fbf8ff;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    & > img {
      display: block;
      width: 72px;
      height: 72px;
    }
  }
`;

export const UserInfo = styled.div`
  text-align: center;
  margin: 0 auto 26px;
  & > p {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #ebd8ff;
    margin-top: 0;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 196px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  background-color: ${p => (p.following ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const UserName = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;
  position: absolute;
  bottom: 0;
  right: 10%;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
`;
