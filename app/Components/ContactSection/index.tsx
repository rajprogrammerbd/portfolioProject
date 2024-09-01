import { FormEvent } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailOpen } from "react-icons/io5";
import styled from "styled-components";

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

const LeftContactSection = styled.div``;

const SubTitleText = styled.p`;
    font-family: inherit;
    color: #ddd;
    font-weight: 200;
    letter-spacing: 0.2rem;
`;
const MainSubTitleText = styled.h2`
    color: #ddd;
    font-size: 3rem;
    font-family: inherit;
    font-weight: 900;
`;

const ContactDetailsDiv = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: 1fr 7fr;
    align-items: center;
    color: #e0e0e0;
    padding: 1rem 0rem;
    gap: 1.3rem;
`;

const SvgContainer = styled.div`
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  

    & > svg {
        position: absolute;
        font-size: 2rem;
        color: inherit;
        z-index: 50;
    }
`;

const CoveredSvgDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #858585;
    z-index: 10;
    border-radius: 1rem;
`;

const ContactDetailsDivRight = styled.div``;
const ContactDetailsDivRightText1 = styled.p`
    font-family: inherit;
`;
const ContactDetailsDivRightText2 = styled.p`
    font-family: inherit;
`;

const RightContactSection = styled.div``;
const FormBody = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 4fr;
    grid-template-rows: auto;
`;
const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem;
    align-items: flex-start;
`;
const FormLabel = styled.label`
    font-family: inherit;
    color: #ddd;
    margin-bottom: 0.5rem;
    font-size: 1rem;
`;

const FormInput = styled.input`
    width: 100%;
    padding: 0.9rem;
    border-radius: 0rem 1rem 1rem 0rem;
    outline: 0;
    font-family: inherit;
    font-size: 0.9rem;

    &[type='submit'] {
        color: #000;
        border: none;
        border-radius: 1rem;
        font-family: inherit;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 300;
        background-color: #fff;
        margin-top: 2rem;
    }
`;

const FormTextArea = styled.textarea`
    outline: 0;
    width: 100%;
    padding: 0.9rem;
    font-family: inherit;
    font-size: 0.9rem;
    border-radius: 0rem 1rem 1rem 0rem;
`;

const ContentBody = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-template-rows: auto;
    gap: 5rem;
`;

const ContactSection = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('handleSubmit called');
    }

    return (
        <MainWrapper>
            <MainService>
                <Title>Contact</Title>

                <ContentBody>
                    <LeftContactSection>
                        <SubTitleText>Contact Me</SubTitleText>
                        <MainSubTitleText>Need help? Get in touch now!</MainSubTitleText>
                        <ContactDetailsDiv>
                            <SvgContainer>
                                <CoveredSvgDiv />
                                <BiSolidPhoneCall />
                            </SvgContainer>

                            <ContactDetailsDivRight>
                                <ContactDetailsDivRightText1>Phone</ContactDetailsDivRightText1>
                                <ContactDetailsDivRightText2>+8801959817009</ContactDetailsDivRightText2>
                            </ContactDetailsDivRight>
                        </ContactDetailsDiv>

                        <ContactDetailsDiv>
                            <SvgContainer>
                                <CoveredSvgDiv />
                                <IoMailOpen />
                            </SvgContainer>

                            <ContactDetailsDivRight>
                                <ContactDetailsDivRightText1>Email</ContactDetailsDivRightText1>
                                <ContactDetailsDivRightText2>rajkpi@outlook.com</ContactDetailsDivRightText2>
                            </ContactDetailsDivRight>
                        </ContactDetailsDiv>
                    </LeftContactSection>

                    <RightContactSection>
                        <FormBody onSubmit={handleSubmit}>
                            <FormElement>
                                <FormLabel htmlFor="subject">Subject:</FormLabel>
                                <FormInput type="text" name="subject" id="subject" placeholder="Enter your Subject" />
                            </FormElement>

                            <FormElement>
                                <FormLabel htmlFor="message">Message:</FormLabel>
                                <FormTextArea id="message" rows={5} cols={30} name="message" placeholder="Enter your Subject" />
                            </FormElement>

                            <FormInput type="submit" value="Send Me Message" />
                        </FormBody>
                    </RightContactSection>
                </ContentBody>
            </MainService>
        </MainWrapper>
    );
}

export default ContactSection;
