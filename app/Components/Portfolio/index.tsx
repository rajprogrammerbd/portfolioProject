import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import { IPortfolioState, ListOfPortfolioOptionsType, RecentWorksTypes } from "@/types/Home";
import { ListOfPortfolioOptions, TotalListOfProjects } from "@/data/Home";
import Image from "next/image";


const MainWrapper = styled.div`
  background-color: transparent;
  padding: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-bottom: 4rem;
`;

const ListOfOptionContainer = styled.div``;
const ListOfOptionContainerUL = styled.ul`
    list-style: none;
    background-color: #050709;
    border-radius: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    text-align: center;
`;
const ListOfOptionContainerLI = styled.li`
    color: #e0e0e0;
    padding: 1.4rem 4rem;
    position: relative;
    background-color: transparent;
    cursor: pointer;
`;

const ListOfOptionText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 50;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListOfOptionBG = styled.div`
    position: absolute;
    background-color: #4581d7;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    border-radius: 2rem;
`;

const ListOfProjectsContainer = styled.div`
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 100%;
`;

const ListOfProjectsUI = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: minmax(28rem, 28rem);
    gap: 1rem;

    @media only screen and (max-width: 1058px) {
        grid-template-columns: 0.7fr;
        justify-content: center;
    }
`;
const ListOfProjectsLI = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    background-color: #43494f;
    width: 35rem !important;
    height: 25rem !important;
    justify-content: flex-end;
`;
const ListOfProjectsLIImg = styled(Image)`
    position: absolute;
    width: 90%;
    height: auto;
`;

const ListOfProjectsLIDiv = styled.div`
    width: 89%;
    position: absolute;
    bottom: 1rem;
    min-height: 2rem;
    background: rgb(58, 123, 216);
    background: linear-gradient(51deg, rgba(58, 123, 216, 1) 0%, rgba(93, 143, 214, 1) 51%, rgba(51, 102, 176, 1) 100%);
    color: #f1f1f1;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
`;

const ListOfProjectsLIDivAnime = motion(ListOfProjectsLIDiv);

const ListOfProjectsLIDivLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const ListOfProjectsLIDivLeftHeading = styled.h4`
    font-size: 1.4rem;
`;
const ListOfProjectsLIDivLeftPara = styled.h4`
    font-size: 0.7rem;
`;

const ListOfProjectsLIDivRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.3rem;
`;

const ListOfOptionBGAnime = motion(ListOfOptionBG);

const Portfolio = () => {
    const [state, setState] = useState<IPortfolioState>(() => {
        return {
            lists: ListOfPortfolioOptions,
            isActive: 0,
            TotalListOfProjects,
            hover: false,
            hoveredID: null
        }
    });

    const changePortfolioStatus = (id: number): void => {
        setState((prev: IPortfolioState) => ({ ...prev, isActive: id }));
    }

    const changeOnHover = (id: number): void => {
        setState((prev: IPortfolioState) => ({ ...prev, hover: !prev.hover, hoveredID: id }));
    }

    return (
        <MainWrapper>
            <MainService>
                <Title>My Recent Works</Title>

                <ListOfOptionContainer>
                    <ListOfOptionContainerUL>
                        {state.lists.map((list: ListOfPortfolioOptionsType) => (
                            <ListOfOptionContainerLI key={list.id} onClick={() => changePortfolioStatus(list.id)}>
                                <ListOfOptionText>{list.name}</ListOfOptionText>
                                {state.isActive === list.id && <ListOfOptionBGAnime layoutId="ListOfOptionBG" />}
                            </ListOfOptionContainerLI>
                        ))}
                    </ListOfOptionContainerUL>
                </ListOfOptionContainer>

                <ListOfProjectsContainer>
                    <ListOfProjectsUI>
                        {state.TotalListOfProjects[state.isActive].map((project: RecentWorksTypes) => (
                            <ListOfProjectsLI
                                key={project.id}
                                onMouseEnter={() => changeOnHover(project.id)}
                                onMouseLeave={() => changeOnHover(project.id)}
                            >
                                <ListOfProjectsLIImg src={project.url} width={600} height={400} alt="Product Image" />
                                    <AnimatePresence>
                                        {(state.hover && state.hoveredID === project.id) && (
                                            <ListOfProjectsLIDivAnime
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.5, ease: 'backOut' }}
                                            >
                                                <ListOfProjectsLIDivLeft>
                                                    <ListOfProjectsLIDivLeftHeading>{project.name}</ListOfProjectsLIDivLeftHeading>
                                                    <ListOfProjectsLIDivLeftPara>{project.description}</ListOfProjectsLIDivLeftPara>
                                                </ListOfProjectsLIDivLeft>
                                                <ListOfProjectsLIDivRight>
                                                    <FaArrowDown />
                                                </ListOfProjectsLIDivRight>
                                            </ListOfProjectsLIDivAnime>
                                        )}
                                    </AnimatePresence>
                            </ListOfProjectsLI>
                        ))}
                    </ListOfProjectsUI>
                </ListOfProjectsContainer>
            </MainService>
        </MainWrapper>
    );
}

export default Portfolio;
