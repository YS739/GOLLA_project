import { useNavigate } from "react-router-dom";
import { StyledHeader, HeaderContainer, Logo, HeaderBtnBox, HeaderBtn } from "./style";
import {logo} from "../../../assets/Logo.png"

const Header = () => {

  const navigate = useNavigate();
  
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo 
        onClick={() => navigate("/")}
        src={require("../../../assets/Logo.png")}
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