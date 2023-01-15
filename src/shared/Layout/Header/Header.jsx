import { useNavigate } from "react-router-dom";
import { StyledHeader, HeaderContainer, Logo, HeaderBtnBox, HeaderBtn } from "./style";

const Header = () => {

  const navigate = useNavigate();
  
  return (
    <StyledHeader>
      <HeaderContainer>
        {/* <Logo src="../../../assets/Logo.png" /> */}
        <Logo 
        onClick={() => navigate("/")}
        src="https://user-images.githubusercontent.com/117061017/212521539-db30b6d5-730a-4941-83a0-805f97cb157f.png" 
        />
        <HeaderBtnBox>
          <HeaderBtn onClick={() => navigate("/upload")}>POST</HeaderBtn>
          <HeaderBtn>LOGIN</HeaderBtn>
        </HeaderBtnBox>
      </HeaderContainer>
    </StyledHeader>
  )
};

export default Header;