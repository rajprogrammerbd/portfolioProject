import Link from 'next/link';
import Image from 'next/image';
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { IBodyContainerProps } from '@/types/Home';
import Navbar from '../Navbar';

const MainWrapperBody = styled.div`
    width: 1320px;
    min-height: 100vh;
    background-color: inherit;
    padding: 1.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 50;
  

  @media only screen and (max-width: 1400px) {
    width: 90%;
  }
`;

const NavbarContainer = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  width: fill-available;
  width: 100%;  
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto;
  position: absolute;
  top: 2rem;
`;

const Title = styled(Link)`
  font-weight: 900;
  color: #e0e0e0;
  font-size: 1.7rem;
  cursor: pointer;
`;

const HeaderContactBtn = styled.button`
  font-size: 1rem;
  border-radius: 50px;
  background-color: #3576d3;
  color: #d7d7d7;
`;

const HeaderContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
    align-items: center;
`;

const LeftHeaderContainerTitle = styled.h3`
  font-family: "Moderustic", sans-serif;
  font-weight: 100;
  color: #e0e0d4;
  font-size: 1.8rem;
  letter-spacing: 9px;
  line-height: 17px;
`;

const LeftHeaderContainerSkillsTitle = styled.p`
  font-size: 4rem;
  font-weight: 900;
  background: rgb(53,118,211);
  background: linear-gradient(51deg, rgba(53,118,211,1) 0%, rgba(68,134,226,1) 30%, rgba(126,155,193,1) 53%, rgba(158,183,214,1) 72%, rgba(236,236,236,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LeftHeaderContainerSkillsPara = styled.p`
  font-size: 1rem;
  color: rgba(236, 236, 236, 1);
  width: 44rem;
  font-weight: 100;
  line-height: 2rem;
  margin-top: 1rem;
`;

const LeftHeaderContainerSkillButtons = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 3rem;
`;

const DownloadBtn = styled.button`
    border: 0.1rem solid #3a7bd8;
    padding: 1rem 2rem;
    border-radius: 2rem;
    color: #3a7bd8;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;

    & > svg {
        margin-left: 10px;
    }
`;

const IconBtn = styled.a`
    border: 0.1rem solid #3a7bd8;
    border-radius: 50%;
    padding: 0.9rem;
    cursor: pointer;

    & > svg {
        font-size: 1.5rem;
        color: #3a7bd8;
    }
`;

const ProfilePictureImg = styled(Image)`
    max-width: 25rem !important;
    height: auto !important;
    border: 4px solid #3576d3;
    transform: rotate(7deg);
    border-radius: 40px;
`;

const ProfilePictureAnimated = motion(ProfilePictureImg);

const LeftHeaderContainer = styled.div``;
const RightHeaderContainer = styled.div`
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    position: relative;
`;

const RightHeaderBorderBox = styled.div`
    position: absolute;
    top: 0;
    width: 27rem;
    height: 27rem;
    border: 4px solid #3576d3;
    border-radius: 50px;
    z-index: -50;
    transform: skew(350deg, 359deg);
`;

const RightHeaderBorderBoxAnime = motion(RightHeaderBorderBox);
const HeaderContactBtnAnime = motion(HeaderContactBtn);

function BodyHeader(props: IBodyContainerProps) {
    const { lists } = props;
    const isLoaded = useSelector((root: RootState) => root.homepage.loaded);

    return (
        <MainWrapperBody>
          <NavbarContainer>
            <Title href="/">rajprogrammerbd</Title>

            <Navbar lists={lists} />

            <HeaderContactBtnAnime
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ color: '#fff' }}
              transition={{ duration: 0.1 }}
            >
              Contact Me
            </HeaderContactBtnAnime>
          </NavbarContainer>

          <HeaderContainer className="mt-7">
            <LeftHeaderContainer>
              <LeftHeaderContainerTitle>I am Raj</LeftHeaderContainerTitle>
              <LeftHeaderContainerSkillsTitle>Web Developer +</LeftHeaderContainerSkillsTitle>
              <LeftHeaderContainerSkillsTitle>
                  <TypeAnimation
                    speed={10}
                    sequence={[
                      'Frontend',
                      2000,
                      'Backend',
                      2000,
                      'Full-Stack',
                      2000,
                      'Mobile App',
                      2000
                    ]}
                    style={{ fontSize: 'inherit' }}
                    repeat={Infinity}
                  />
                  Developer
                </LeftHeaderContainerSkillsTitle>

                <LeftHeaderContainerSkillsPara>A self-taught developer focused on building product-based applications with flexibility and delivering better outcomes with productivity, experienced in various technologies across frontend, backend, and mobile solutions.</LeftHeaderContainerSkillsPara>
                <LeftHeaderContainerSkillButtons>
                    <DownloadBtn>Download Resume <GoDownload /></DownloadBtn>

                    <IconBtn>
                        <FaGithub />
                    </IconBtn>

                    <IconBtn>
                        <FaLinkedin />
                    </IconBtn>

                    <IconBtn>
                        <FaTwitter />
                    </IconBtn>

                </LeftHeaderContainerSkillButtons>
            </LeftHeaderContainer>
            
            <RightHeaderContainer>
              <RightHeaderBorderBoxAnime />
              <ProfilePictureAnimated
                initial={{
                  rotate: '0deg',
                  boxShadow: "rgb(12 12 12) -4px -1px 20px 3px",
                  cursor: 'pointer'
                }}
                animate={{
                  rotate: '7deg',
                  transition: {
                    duration: 0.8,
                    delay: !isLoaded ? 3.5 : 0,
                    type: 'spring'
                  }
                }}
                whileHover={{
                  rotate: 0,
                  boxShadow: "-4px -1px 20px 20px rgb(12 12 12)"
                }}
                transition={{
                  ease: 'easeInOut'
                }}
                width={400}
                height={400}
                src="/profile-picture.jpg"
                layout='preserve-aspect'
                alt="profile picture"
              />
            </RightHeaderContainer>
          </HeaderContainer>
        </MainWrapperBody>
    );
}

export default BodyHeader;
