import { useNavigate } from "react-router-dom";
import { StyledHeader, HeaderContainer, Logo, HeaderBtnBox, HeaderBtn } from "./style";
import LoginModal from '../LoginModal';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };


  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo
          onClick={() => navigate('/')}
          src={require('../../../assets/Logo.png')}
        />
        <HeaderBtnBox>
          <HeaderBtn onClick={() => navigate('/upload')}>POST</HeaderBtn>
          <HeaderBtn onClick={openModal}>LOGIN</HeaderBtn>
        </HeaderBtnBox>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}></LoginModal>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
