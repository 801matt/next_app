import styled from "styled-components";

const StyledHeader = styled.header`
  .header-markup {
    color: white;
    padding: 0 20px;
    background: #222;
    line-height: 50px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-markup">LOGO</div>
    </StyledHeader>
  );
};

export default Header;
