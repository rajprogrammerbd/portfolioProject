'use client';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RootState } from "@/lib/store";
import { changeWebLoadedOnce } from "@/lib/reducers/HomeReducer";
import { ListOfNavbar } from "@/data/Home";
import { HomeState } from "@/types/Home";
import { useDispatch, useSelector } from "react-redux";
import HeaderAnimatedBox from "./Components/HeaderAnimatedBox";
import BodyHeader from "./Components/BodyHeader";
import BodyServiceSection from "./Components/BodyServiceSection";

// Styled-Components
const WrapperAppBox = styled.div<{ $backgroundColor: string; $textColor: string }>`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${prop => prop.$backgroundColor === '#050709' ? 'rgb(2,0,36)' : prop.$backgroundColor};
  ${prop => prop.$backgroundColor === '#050709' && "linear-gradient(51deg, rgba(2,0,36,1) 0%, rgba(73,73,73,1) 0%, rgba(77,86,94,1) 29%, rgba(45,64,83,1) 55%, rgba(33,44,55,1) 85%, rgba(21,31,41,1) 100%);"}
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
      </WrapperAppBox>
    </>
  );
}