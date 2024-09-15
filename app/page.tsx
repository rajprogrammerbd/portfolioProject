'use client';
import { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import HeaderAnimatedBox from "./Components/HeaderAnimatedBox";
import BodyServiceSection from "./Components/BodyServiceSection";
import BodyHeader from "./Components/BodyHeader";
import Portfolio from "./Components/Portfolio";
import Blogs from "./Components/Blogs";
import ContactSection from "./Components/ContactSection";
import { HomeState } from "@/types/Home";
import { ListOfNavbar } from "@/data/Home";
import { RootState } from "@/lib/store";
import DisplayMenu from "./Components/DisplayMenu";

// Styled-Components
const WrapperAppBox = styled.div<{ $backgroundColor: string; $textColor: string }>`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${prop => prop.$backgroundColor === '#050709' ? 'rgb(2,0,36)' : prop.$backgroundColor};
  background: ${prop => prop.$backgroundColor === '#050709' && "linear-gradient(51deg, rgba(2,0,36,1) 0%, rgba(73,73,73,1) 0%, rgba(77,86,94,1) 29%, rgba(45,64,83,1) 55%, rgba(33,44,55,1) 85%, rgba(21,31,41,1) 100%);"}
  color: ${prop => prop.$textColor};
  position: relative;
`;

export default function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [state, _] = useState<HomeState>(() => {
    return {
      lists: ListOfNavbar
    }
  });

  const settingMenuShow = useCallback((): void => {
    setShowMenu((v: boolean) => !v);
  }, []);

  const bgColor = useSelector((root: RootState) => root.homepage.color.bgColor);
  const { color1 } = useSelector((root: RootState) => root.homepage.color.textColors);

  return (
    <>
    <HeaderAnimatedBox color1={color1} />
      <AnimatePresence>
        {showMenu && <DisplayMenu lists={state.lists} showMenu={settingMenuShow} />}
      </AnimatePresence>

      <WrapperAppBox $backgroundColor={bgColor} $textColor={color1}>
        <BodyHeader lists={state.lists} showMenu={settingMenuShow} />
        <BodyServiceSection />
        <Portfolio />
        <Blogs />
        <ContactSection />
      </WrapperAppBox>    
    </>
  );
}
