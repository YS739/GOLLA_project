import { useNavigate } from 'react-router-dom';
import * as S from './style';
import LoginModal from '../LoginModal';
import { useState } from 'react';
import { authService } from '../../../common/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // 로그인 확인을 위한 세션스토리지 키 확인. 키 존재? => 로그인 되어있음 / 없음 => 로그인 안 되어있음
  const isLoggedIn = sessionStorage.key(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const logOutHandler = async () => {
    await signOut(authService)
      .then(() => {
        alert('로그아웃이 완료되었습니다.');
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <S.StyledHeader>
      <S.HeaderContainer>
        <S.Logo
          onClick={() => navigate('/')}
          src={require('../../../assets/Logo.png')}
        />
        <S.HeaderBtnBox>
          <S.HeaderBtn
            onClick={() => {
              isLoggedIn ? navigate('/upload') : alert('로그인 해주세요.');
            }}
          >
            POST
          </S.HeaderBtn>

          {!isLoggedIn && <S.HeaderBtn onClick={openModal}>LOGIN</S.HeaderBtn>}
          {isLoggedIn && (
            <>
              <S.HeaderBtn onClick={() => navigate('/my')}>MYPAGE</S.HeaderBtn>
              <S.HeaderBtn onClick={logOutHandler}>LOGOUT</S.HeaderBtn>
            </>
          )}
        </S.HeaderBtnBox>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}></LoginModal>
      </S.HeaderContainer>
    </S.StyledHeader>
  );
};

export default Header;
