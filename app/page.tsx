'use client';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import HeaderAnimatedBox from "./Components/HeaderAnimatedBox";
import BodyServiceSection from "./Components/BodyServiceSection";
import BodyHeader from "./Components/BodyHeader";
import Portfolio from "./Components/Portfolio";
import { changeWebLoadedOnce } from "@/lib/reducers/HomeReducer";
import { HomeState } from "@/types/Home";
import { ListOfNavbar } from "@/data/Home";
import { RootState } from "@/lib/store";
import Blogs from "./Components/Blogs";

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
  const [state, setState] = useState<HomeState>(() => {
    return {
      lists: ListOfNavbar
    }
  });

  const dispatch = useDispatch();
  const isLoaded = useSelector((root: RootState) => root.homepage.loaded);
  const bgColor = useSelector((root: RootState) => root.homepage.color.bgColor);
  const { color1 } = useSelector((root: RootState) => root.homepage.color.textColors);

  useEffect(() => {
    // This hook handled the loading animation play onces.
    const timeFn = () => {
      if (!isLoaded) {
        dispatch(changeWebLoadedOnce());
      }
    }

    const timed = setTimeout(timeFn, 1500);
    

    return () => {
      window.clearTimeout(timed);
    }
  }, []);

  return (
    <>
      <HeaderAnimatedBox color1={color1} />
      <WrapperAppBox $backgroundColor={bgColor} $textColor={color1}>
        {/* Loading Animation on First Render */}
        {/* <HeaderAnimatedBox color1={color1} /> */}

        {/* Render The application Data */}

        {/* <P5Sketch /> */}
        <BodyHeader lists={state.lists} />
        <BodyServiceSection />
        <Portfolio />
        <Blogs />
      </WrapperAppBox>
    </>
  );
}
