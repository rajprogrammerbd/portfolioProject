import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BlogPosts } from "@/data/Home";
import { BlogPostType, IBlogsState } from "@/types/Home";
import Image from "next/image";
import Link from "next/link";

const MainWrapper = styled.div`
  background-color: #050709;
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
    margin-top: 2rem;
`;

const WrapperBlogs = styled.div`
    width: 100%;
`;

const WrapperBlogsUL = styled.ul`
    list-style: none;
`;
const WrapperBlogsLI = styled.li`
    display: grid;
    grid-template-columns: 0.6fr 4fr;
    grid-template-rows: 9rem;
    padding: 1rem;
    align-items: center;
    justify-items: center;
    background-color: #121212;

    & > div > img {
        width: 8rem !important;
        height: 8rem !important;
    }
`;
const WrapperBlogsLeft = styled.div``;
const WrapperBlogsRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    justify-content: center;
    width: 100%;
    padding: 0rem 1rem;
`;

const WrapperBlogsRightTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.2rem;
`;

const WrapperBlogsRightTopBoldText = styled.h4`
    font-weight: 900;
    font-family: inherit;
    font-size: 1rem;
    color: #e0e0e0;
    margin-right: 0.4rem;
`;

const WrapperBlogsRightTopLightText = styled.p`
    font-weight: 200;
    font-family: inherit;
    font-size: 1rem;
`;

const WrapperBlogsRightBottom = styled.div`
    width: 96%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const WrapperBlogsRightBottomDescription = styled.p`
    width: 80%;
    color: #e0e0e0;
    font-size: 1.4rem;
`;

const WrapperBlogsRightBottomButton = styled(Link)`
    color: #e0e0e0;
    border: 1px solid #474747;
    border-radius: 5rem;
    padding: 1rem 2rem;
    font-size: 0.8rem;
`;

const WrapperBlogsAnime = motion(WrapperBlogs);

function Blogs() {
    const [state, setState] = useState<IBlogsState>(() => {
        return {
            lists: BlogPosts
        }
    });

    return (
        <MainWrapper>
            <MainService>
                <Title>My Blog Posts</Title>

                <WrapperBlogsAnime
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <WrapperBlogsUL>
                        {state.lists.map((blog: BlogPostType) => (
                            <WrapperBlogsLI key={blog.id}>
                                <WrapperBlogsLeft>
                                    <Image src={blog.img} width={110} height={110} alt="blog image" />
                                </WrapperBlogsLeft>
                                <WrapperBlogsRight>
                                    <WrapperBlogsRightTop>
                                        <WrapperBlogsRightTopBoldText>{blog.category} -</WrapperBlogsRightTopBoldText>
                                        <WrapperBlogsRightTopLightText>{blog.posted_date}</WrapperBlogsRightTopLightText>
                                    </WrapperBlogsRightTop>

                                    <WrapperBlogsRightBottom>
                                        <WrapperBlogsRightBottomDescription>{blog.description}</WrapperBlogsRightBottomDescription>
                                        <WrapperBlogsRightBottomButton href={blog.post_link} target="_blank">{`Read More >>`}</WrapperBlogsRightBottomButton>
                                    </WrapperBlogsRightBottom>
                                </WrapperBlogsRight>
                            </WrapperBlogsLI>
                        ))}
                    </WrapperBlogsUL>
                </WrapperBlogsAnime>
            </MainService>
        </MainWrapper>
    );
}

export default Blogs;
