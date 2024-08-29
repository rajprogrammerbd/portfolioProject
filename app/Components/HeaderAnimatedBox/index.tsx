'use client';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner'
import { motion } from "framer-motion";
import { HeaderAnimatedBoxState, IHeaderProps } from "@/types/Home";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const AnimationStyledBox = styled.div`
    background-color: black;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    justify-content: center;
    z-index: 100;
    opacity: 1;
    transform: translateY(0px);
`;

const AnimatedBox = motion(AnimationStyledBox);

const HeaderAnimatedBox = (props: IHeaderProps) => {
  const [state, setState] = useState<HeaderAnimatedBoxState>(() => {
    const width = global.window && global.window.innerWidth;
    const height = global.window && global.window.innerHeight;

    return {
      width: width,
      height: height
    }
  });
  const { color1 } = props;
  const isLoaded = useSelector((root: RootState) => root.homepage.loaded);

  useEffect(() => {
    const fn = () => {
      setState({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', fn);

    return () => {
      window.removeEventListener('resize', fn);
    }
  }, []);

  return (
      <AnimatedBox
      layout
      animate={{ opacity: 1, y: isLoaded ? -(state.height) : 0 }}
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
  );
}

export default HeaderAnimatedBox;
