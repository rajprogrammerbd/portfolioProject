'use client';
import { motion } from "framer-motion";
import styled from "styled-components";
import { INavContainerItemsProps } from "@/types/Home";
import Navbar from "../Navbar";

const HeaderContactBtn = styled.button`
  font-size: 1rem;
  border-radius: 50px;
  background-color: #3576d3;
  color: #d7d7d7;
`;

const HeaderContactBtnAnime = motion(HeaderContactBtn);
const Wrapped = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: auto;

    @media only screen and (max-width: 940px) {
        display: none;
    }
`;

function NavContainerItems(props: INavContainerItemsProps) {
    const { lists } = props;

    return (
        <Wrapped>
            <Navbar lists={lists} />

            <HeaderContactBtnAnime
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ color: '#fff' }}
            transition={{ duration: 0.1 }}
            >
            Contact Me
            </HeaderContactBtnAnime>        
        </Wrapped>
    );
}

export default NavContainerItems;
