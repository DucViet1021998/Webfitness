import styled from "styled-components";
//chinh 2 thang duoi nay de resize cai lich
export const PageContainer = styled.div`
    width: 75%;
    height: 70vh;
`;
export const Wrapper = styled.div`
  border: 2px solid #AED96D;
  margin-left: 2rem;
`;

export const StyledEvent = styled.span`
  background: ${({ bgColor }) => bgColor};
  color: white;
  text-align: left !important;
  padding: 2px 10px;
  margin: 0 2px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: move;
  text-transform: capitalize;
`;

export const SevenColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  ${(props) => props.fullheight && `height: calc(100% - 75rem);`}
  ${(props) =>
    props.fullheight &&
    `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
  div {
    display: grid;
    border: none;
    ${StyledEvent} {
      display: none;
    }
    ${StyledEvent}:nth-child(-n + 3) {
      display: block;
    }

    span {
      text-align: right;
      padding-right: 3.5rem;
      font-size: 0.8rem;
      height: fit-content;
      color: white;
    }

    span.active {
      background-color: #AED96D;
      border-bottom: 3px solid #61615e;
      position: relative;
    }
    span.active::before {
      content: "Today ";
      font-size: 0.8rem;
      margin-left: 2px;
      color: #238783;
    }
  }
`;

export const HeadDays = styled.span`
  text-align: center;
  border: none;
  height: 30px;
  font-size: 1.25rem;
  padding: 2px 0px;
  color: #AED96D;
  font-weight: 600;
  margin-bottom: 5px;
  text-shadow: 1px 1px darkgray;
`;
export const DateTitle = styled.span`
  color: #AED96D;
  font-size: 1.35rem;
  font-weight: 550;
  text-shadow: 1px 1px darkgray;
`;

export const DateControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  align-items: center;

  ion-icon {
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const SeeMore = styled.p`
  font-size: 12px;
  padding: 0 5px;
  margin-bottom: 0;
  cursor: pointer;
`;

export const PortalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 60%;
  height: 100px;
  top: 50%;
  left: 50%;
  /* border: 1px solid; */
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 25px;

  h2 {
    font-size: 1.1rem;
  }


  p {
    margin-bottom: 15px;
  }

`;

//-------------------------------------------------//

export const TitleInvert = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color:transparent;
`;
export const TitleNormal = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

export const PageName = styled.h3`
  margin-left: 50px;
`;
export const ScheduleContent = styled.div`
  font-size: 1.1rem;
  font-weight: 550;
  color: whitesmoke;
  margin-top:  20px;
`;
//--------------------------//
export const ScheduleFooter = styled.div`
  width: 80%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px 20px;
`;
export const Content = styled.div`
  margin: 20px 0px;
  font-size: 0.7em;
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
  font-size: 1rem;
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
  font-size: 1rem;
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
export const DetailIconWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;
export const DetailIcon = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  &:hover {
    color: #AED96D}
`;