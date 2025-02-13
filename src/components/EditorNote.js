import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  align-items: flex-start;
  flex-shrink: 0;
//   box-sizing: border-box;
`;

const Illo = styled.img`
    height: auto;
    object-fit: contain;
    flex-shrink: 1;
    
    @media only screen and (max-width: 768px) {
        width: 100%; // Full width on smaller screens
    }
`;


const Title = styled.div`
    color: #FFF;
    font-family: 'Lusitana';
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
`;

const StyledHr = styled.hr`
    width: 467.5px;
    height: 3px;
    flex-shrink: 0;
    background-color: #D6C26B;
    border: none;
    // border-top: 3px solid #D6C26B;
    border-radius: 3px;
    margin: 0px 0;
`;

const Signatures = styled.div`
    font-weight: 25rem;
    font-size: 2.375rem;
    line-height: 3.188rem;
    
    @media only screen and (max-width: 768px){
        font-size: 1.88rem;
        text-align: left;
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
            font-size: 2rem;
            line-height: 3px;
            padding-top: 15px;
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
            font-size: 1rem;
            display: inline-block;
        }
    }
    margin: 0rem;
`;


const EditorNote = () => {
    return (
      <Container>
          <Illo src="illo.png" alt="illopic" />
          <Letter>
              <Title>Letter from the Editor</Title>
              <StyledHr />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A mollis amet vitae sed purus, semper ullamcorper augue vitae. Hac pretium urna, tempus sit quam suspendisse maecenas et. Egestas neque sollicitudin rhoncus vitae at ipsum pulvinar faucibus. Facilisi risus blandit egestas in dignissim et sapien faucibus.
              <br /><br />
              Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor, egestas luctus lacus. Gravida facilisis sagittis eget facilisi molestie amet. Id nascetur vel eu fermentum elementum ac cras enim. Dui habitant commodo consequat sit in molestie in id. Ipsum volutpat etiam tristique fringilla. Tellus eu quis mauris massa tristique tortor, egestas luctus lacus. 
              <br /><br />
              <Signatures>
                <Signature className='left'><div className='name'>Name</div><div className='title'>Editor in Chief</div></Signature>
                <Spacing/>
                <Signature><div className='name'>Name</div><div className='title'>Managing Editor</div></Signature>
            </Signatures>
          </Letter>
      </Container>
    );
  };

export default EditorNote;
