'use client';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ThreeDots } from 'react-loader-spinner'
import { changeWebLoadedOnce } from "@/lib/reducers/HomeReducer";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderAnimatedBoxState, IHeaderProps } from "@/types/Home";
import { RootState } from "@/lib/store";

const AnimationStyledBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;
  color: black;
  z-index: 100;
`;

const AnimatedBox = motion(AnimationStyledBox);

const HeaderAnimatedBox = (props: IHeaderProps) => {
  const dispatch = useDispatch();
  const [state, setState] = useState<HeaderAnimatedBoxState>(() => {
    // const width = global.window && global.window.innerWidth;
    // const height = global.window && global.window.innerHeight;

    return {
      width: 0,
      height: 0
    }
  });

  const { color1 } = props;
  const isLoaded = useSelector((root: RootState) => root.homepage.loaded);

  useEffect(() => {
    const fn = () => {
      setState({ width: window.innerWidth, height: window.innerHeight });
    }
    
    fn();
    window.addEventListener('resize', fn);

    return () => {
      window.removeEventListener('resize', fn);
    }
  }, []);

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
    <AnimatePresence>
    <AnimatedBox
      animate={{ y: isLoaded ? -(state.height) : 0 }}
      transition={{ duration: 1.6, ease: 'circIn' }}
    >
      <ThreeDots
        visible={true}
        height="70"
        width="70"
        color={color1}
        radius="9"
        ariaLabel="three-dots-loading"
      />
      <p>Loading...</p>
    </AnimatedBox>
    </AnimatePresence>
  );
}

export default HeaderAnimatedBox;
