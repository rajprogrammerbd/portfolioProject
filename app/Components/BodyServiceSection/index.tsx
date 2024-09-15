import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import { BodyServiceState, IServiceItem } from "@/types/Home";
import { BodyServiceStateLists } from "@/data/Home";

const MainWrapper = styled.div`
  background-color: #050709;
  padding: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 43rem;
`;

const MainService = styled.div`
    width: 1320px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 1400px) {
      width: 90%;
    }
`;

const Title = styled.h3`
  font-family: inherit;
  font-size: 3rem;
  background: rgb(53, 118, 211);
  background: linear-gradient(51deg, rgba(53, 118, 211, 1) 0%, rgba(68, 134, 226, 1) 30%, rgba(126, 155, 193, 1) 53%, rgba(158, 183, 214, 1) 72%, rgba(236, 236, 236, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  font-style: normal;
  margin-top: 3rem;
  margin-bottom: 0.7rem;
`;

const SubTitle = styled.p`
  color: #d3d7dd;
  width: 40rem;
  text-align: center;
  font-family: inherit;
  margin-bottom: 3rem;
`;

const ServiceWrapper = styled.div`
  width: calc(100% - 10px);
`;
const ServiceWrapperUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ServiceWrapperLI = styled.li`
  position: relative;
  width: 100%;
  min-height: 6rem;
  cursor: pointer;
`;
const ServiceWrapperLIInside = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgb(58,123,216);
  background: linear-gradient(51deg, rgba(58,123,216,1) 0%, rgba(93,143,214,1) 51%, rgba(51,102,176,1) 100%);
`;
const ServiceWrapperLICover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: grid;
  grid-template-columns: 0.6fr 2fr 4fr 0.6fr;
  grid-template-rows: auto;
  align-items: center;
  font-family: inherit;
  color: #e0e0e0;
  justify-items: center;

  @media only screen and (max-width: 996px) {
    grid-template-columns: 0.6fr 1.7fr 4fr 0.6fr;
  }
`;

const ServiceWrapperLIKey = styled.p`
  font-weight: 900;
`;
const ServiceWrapperLITitle = styled.p`
  font-weight: 900;
  font-size: 1.2rem;
`;
const ServiceWrapperLIPara = styled.p`
  font-weight: 300;
  padding: 0rem 2rem;
`;
const ServiceWrapperLIIcon = styled.span`
    font-size: 1.4rem;
`;

const ServiceWrapperIconAnime = motion(ServiceWrapperLIIcon);
const ServiceWrapperLIAni = motion(ServiceWrapperLI);
const ServiceWrapperLIInsideMotion = motion(ServiceWrapperLIInside);

const BodyServiceSection = () => {
  const [state, setState] = useState<BodyServiceState>(() => {
    return {
      lists: BodyServiceStateLists,
      activeId: '01'
    };
  });

  const hoveredChangeOnService = useCallback((id: string): void => {
    setState((prev: BodyServiceState) => ({ ...prev, activeId: id }));
  }, []);

  return (
      <MainWrapper>
          <MainService>
            <Title>My Quality Services</Title>
            <SubTitle>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</SubTitle>

            <ServiceWrapper>
              <ServiceWrapperUL>
                {state.lists.map((obj: IServiceItem) => (
                  <ServiceWrapperLIAni
                    key={obj.id}
                  > 
                    <ServiceWrapperLICover onMouseEnter={() => hoveredChangeOnService(obj.id)}>
                      <ServiceWrapperLIKey>{obj.id}</ServiceWrapperLIKey>
                      <ServiceWrapperLITitle>{obj.title}</ServiceWrapperLITitle>
                      <ServiceWrapperLIPara>{obj.paragraph}</ServiceWrapperLIPara>
                      <ServiceWrapperIconAnime
                        animate={{ rotate: (state.activeId === obj.id) ? "-135deg" : "0deg" }}
                        transition={{ duration: 0.4 }}
                      >
                        <FaArrowDown />
                      </ServiceWrapperIconAnime>
                    </ServiceWrapperLICover>

                    {(state.activeId === obj.id) && <ServiceWrapperLIInsideMotion layoutId="serviceList" />}
                  </ServiceWrapperLIAni>
                ))}
              </ServiceWrapperUL>
            </ServiceWrapper>
          </MainService>
      </MainWrapper>
  );
}

export default BodyServiceSection;
