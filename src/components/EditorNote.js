import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  align-items: flex-start;
  flex-shrink: 0;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;

const Illo = styled.img`
    width: 50%;
    height: auto;
    object-fit: contain;
    flex-shrink: 0;
    
    @media only screen and (max-width: 1024px) {
        width: 85%;
        margin-bottom: 32px;
    }
`;

const Title = styled.div`
    display: block;
    text-align: center;
    width: fit-content;
    color: #FFF;
    font-family: 'Lusitana';
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-bottom: 3px solid #D6C26B;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
        font-size: 30px;
    }
    @media (max-width: 375px) {
        font-size: 24px;
      }
`;

const Writing = styled.div`
      padding-top: -1000px;
`;

const Letter = styled.div`
    width: 45%;
    height: auto;
    flex-shrink: 0;
    color: #FFF;
    font-family: 'Lato';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 170.6%;
    margin-left: 34px;

    @media only screen and (max-width: 1024px) {
        width: 65%; /* Make text box larger for 820px screens */
        margin-left: 0px;
    }
    @media only screen and (max-width: 768px) {
        width: 80%;
        margin-left: 0px;
        margin-top: 10px;
        font-size: 11.272px;
    }
`;


// const StyledHr = styled.hr`
//     justify-content: left;
//     width: 100%;
//     height: 3px;
//     flex-shrink: 0;
//     background-color: #D6C26B;
//     border: none;
//     border-radius: 3px;
//     margin: 0 auto;

//     @media only screen and (max-width: 768px) {
//         width: 90%;
//         margin: 0 auto; /* Keep it centered on mobile */
//     }
// `;

const Signatures = styled.div`
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1.88rem;
        text-align: left;
        margin-top: 5px;
    }    
`;

const Spacing = styled.div`
    width: 8rem;
    height: 1.4rem;  
`;

const Signature = styled.div`
    .name {
        color: white;
        font-style: normal;
        font-weight: 25rem;
        font-size: 30px;
        line-height: 3.188rem;
        text-transform: capitalize;
        text-align: left;
        font-family: Caveat;
        
        @media only screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 170.6%;
            padding-top: 10px;
        }
       
    }
    .title {
        color: white;
        font-style: normal;
        font-family: Lato;
        font-weight: 25rem;
        font-size: 1.125rem;
        line-height: 1.813rem;
        margin: 0rem;

        @media only screen and (max-width: 768px){
            font-size: 11.272px;
            padding: 0;
            margin: 0;
        }
    }
    margin: 0rem;
`;


const EditorNote = () => {
    return (
      <Container>
        <FlexContainer>
          <Illo src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/7NIVUJXTHZAKLHCCNDPEENR7FY/resizer/ZnPPmHArKdKU3-RAoZWi3FrfDiI=/arc-anglerfish-arc2-prod-spectator/public/7NIVUJXTHZAKLHCCNDPEENR7FY.PNG" alt="BHM art" />
          <Letter>
              <Title>Letter from the Editors</Title>
              <Writing>
              <br />
              Every February, Spectator dedicates a special edition in celebration of Black History Month, recognizing the lives and legacies of Black Americans throughout U.S. history. This year, like every year, our special edition seeks to highlight the voices, stories, and contributions of Black Columbians and Black residents of Morningside Heights and West Harlem—in history, today, and in the years to come.
              <br /><br />
              In this issue, look to our news section to explore the history of affirmative action at Columbia, a deep dive into the fluctuating presence of Black authors on the Literature Humanities syllabus, and a feature of the New York Interfaith Commission. Learn about the legacy of George Gregory Jr., the second Black Columbia basketball player and the first to be named an All-American, and read about Barnard’s centennial celebration of author Zora Neale Hurston’s matriculation at the college. Watch for a feature of the recently-revived Columbia Gospel Choir, and turn to Spectrum for Black History Month movie recommendations and a guide to related events on campus.
              <br /><br />
              Thank you for reading our 2025 Black History Month edition and for joining Spectator as we highlight these stories. We are excited—each month and each year—to continue the conversation and continue celebrating the indelible legacy of Black stories on and around our campus.
              <br /><br />
              </Writing>
              <Signatures>
                <Signature className='left'><div className='name'>Shea Vance</div><div className='title'>Editor in Chief</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Heather Chen</div><div className='title'>Managing Editor</div></Signature>
            </Signatures>
          </Letter>
          </FlexContainer>
      </Container>
    );
  };

export default EditorNote;
