import styled from 'styled-components';
import { BiQrScan } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 64px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 0 12px;
  }
`;

const IconContainer = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  font-family : 'inter';
  color : #F0EEED;
  gap : 8px;
  font-weight : 500;

  &:hover {
      color : #222;
      cursor : pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const NavButton = styled.button`
  font-family : 'inter';
  background: #1F1F22;
  color: #F0EEED;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 350;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: white;
    color : #222;
  }

  @media (max-width: 500px) {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContent>
      <StyledLink to='/'><IconContainer>
          <BiQrScan />
          <p>Coffee Shop</p>
        </IconContainer></StyledLink>
        <ButtonGroup>
         <Link to='/coffees'><NavButton >Coffees</NavButton></Link>
         <Link to='/ingredients'><NavButton >Ingredients</NavButton></Link>
        </ButtonGroup>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
