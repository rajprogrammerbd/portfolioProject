import { INavbar, NavList } from "@/types/Home";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavUL = styled.ul`
  width: 70%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const NavLI = styled.li`
  font-size: 1rem;
  color: darkgray;
  cursor: pointer;
  transition: 0.4s ease all;

  &:hover {
    color: white;
  }
`;


const Navbar = (props: INavbar) => {
    const { lists } = props;
    
    return (
        <NavContainer>
            <NavUL>
                {lists.map((list: NavList) => <NavLI key={list.id}>{list.name}</NavLI>)}
            </NavUL>
      </NavContainer>
    );
}

export default Navbar;
