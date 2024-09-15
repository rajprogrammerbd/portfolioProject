import { useAnimate, stagger, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { IDisplayMenu, NavList } from "@/types/Home";

const Wrapped = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    color: #ffffff;
    position: fixed;
    z-index: 100;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const WrappedAnime = motion(Wrapped);

const MenuContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

const MenuUL = styled.ul`
    list-style: none;
`;

const MenuLI = styled.li`
    font-family: inherit;
    padding: 2rem 2.5rem;
    text-transform: uppercase;
    font-size: 1.1rem;
    outline: 0;
`;

const IconContainer = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: inline;
    max-width: max-content;
    font-size: 1.3rem;
`;

function DisplayMenu(props: IDisplayMenu) {
    const { lists, showMenu } = props;

    return (
        <WrappedAnime
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <IconContainer>
                <IoClose onClick={showMenu} style={{ cursor: 'pointer' }} />
            </IconContainer>
            <MenuContainer>
                <MenuUL>
                    {lists.map((list: NavList) => <MenuLI key={list.id}>{list.name}</MenuLI>)}
                </MenuUL>
            </MenuContainer>
        </WrappedAnime>
    );
}

export default DisplayMenu;
