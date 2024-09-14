'use client';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner'
import { motion } from "framer-motion";
import { HeaderAnimatedBoxState, IHeaderProps } from "@/types/Home";

const AnimationStyledBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0%;
  width: 100dvw;
  height: 100dvh;
  max-height: 100dvh;
  color: black;
  z-index: 100;
`;

const AnimatedBox = motion(AnimationStyledBox);

const HeaderAnimatedBox = (props: IHeaderProps) => {
  const [load, setLoad] = useState<boolean>(false);
  const [state, setState] = useState<HeaderAnimatedBoxState>(() => {
    return {
      width: 0,
      height: 0
    }
  });

  const { color1 } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

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

  return (
    <AnimatedBox
      animate={{ top: !load ? '0%' : '-100%' }}
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
