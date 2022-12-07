import React from 'react'
import styled from "styled-components"


export const Wrapper = styled.div`
    width: 80%;
    height: 90vh;
    border: 1px solid #AED96D;
    margin: 5px;
    background-color: #353935;
    padding: 0 15px 50px 0;
`;

export const CalenderHead = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
    color: #AED96D ;
`;
export const SevenColGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 0,5rem;
`;
export const HeadDay = styled.span`
    text-align:center;
    color: #AED96D;
    background: #28282B;
    font-size: 1.2rem;
    padding: 2px 0px;
    font-weight: 550;
    margin-bottom: 5px;
`;
export const CalenderBody = styled.div`
    height: calc(100% - 27px - 40px);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(${({ fourCol }) => (fourCol ? 4 : 5)}, 1fr);
`;
export const StyledDay = styled.span`
    color: white;
    border: none;
    text-align: right;
    padding: 5px;
    ${({ active }) => active && `background:#AED96D`}
`;

export const StyledEvent = styled.span`
    display: grid;
    text-align: left;
    background: ${({ bgColor }) => bgColor || "#5F9EA0"};
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
`;

export const PageContainer = styled.div`
    background-color: #61615e;
    width: 100%;
    height: 100vh;
`;
export const TitleInvert = styled.span`
  font-size: 55px;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color:transparent;
`;
export const TitleNormal = styled.span`
  font-size: 55px;
  font-weight: bold;
  color: white;
`;

export const PageName = styled.h3`
  margin-left: 50px;
`;

export const Content = styled.div`
  margin: 20px 0px;
  font-size: 1.2em;
  color: white;
  font-weight: 550;
`;
export const ButtonClear = styled.button`
  padding: 8px 25px;
  border: 1px solid #AED96D;
  color: white;
  background-color: #61615e;
  cursor: pointer;
  font-weight: 500;
  font-size:20px;
  &:hover {
    background-color: #AED96D;
    color: white}
`;
export const ButtonFull = styled.button`
  margin-top: 20px;
  padding: 8px 25px;
  border: none;
  color: white;
  background-color: #AED96D;
  cursor: pointer;
  font-weight: 500;
  font-size:20px;
  &:hover {
    background-color: #28282B;
    color: #AED96D}
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start ;
`;