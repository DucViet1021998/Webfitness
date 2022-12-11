import React from "react";
import { useRef, useState } from "react";
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  SeeMore,
  PortalWrapper,
  PageContainer, PageName, TitleInvert, TitleNormal, Content, ScheduleContent,
  ScheduleFooter, ButtonContainer, ButtonFull, ButtonClear,
  DetailIconWrapper, DetailIcon, DateTitle,

} from "./Calender.styled";
import { MOCKAPPS } from "./conts";
import {
  datesAreOnSameDay,
  getDarkColor,
  getDaysInMonth,
  getMonthYear,
  nextMonth,
  prevMonth,
  range,
  sortDays
} from "./utils";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';

export const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2022, 11, 1));
  const [events, setEvents] = useState(MOCKAPPS);
  const dragDateRef = useRef();
  const dragindexRef = useRef();
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState({});

  const addEvent = (date, event) => {
    if (!event.target.classList.contains("StyledEvent")) {
      const text = window.prompt("name");
      if (text) {
        date.setHours(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        setEvents((prev) => [
          ...prev,
          { date, title: text, color: getDarkColor() }
        ]);
      }
    }
  };

  const drag = (index, e) => {
    dragindexRef.current = { index, target: e.target };
  };

  const onDragEnter = (date, e) => {
    e.preventDefault();
    dragDateRef.current = { date, target: e.target.id };
  };

  const drop = (ev) => {
    ev.preventDefault();

    setEvents((prev) =>
      prev.map((ev, index) => {
        if (index === dragindexRef.current.index) {
          ev.date = dragDateRef.current.date;
        }
        return ev;
      })
    );
  };

  const handleOnClickEvent = (event) => {
    setShowPortal(true);
    setPortalData(event);
  };

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((ev) => ev.title !== portalData.title)
    );
    handlePotalClose();
  };

  return (
    <PageContainer>
      <PageName>
        <TitleInvert>UP COMING </TitleInvert> <TitleNormal>CLASSES</TitleNormal>
        <ScheduleContent>Take a look at our Club's Training Schedule or Set it all by yourself!!</ScheduleContent>
      </PageName>
      <Wrapper>
        <DateControls>
          <DetailIcon><ArrowBackIosOutlinedIcon
            onClick={() => prevMonth(currentDate, setCurrentDate)}
            name="arrow-back-circle-outline"
          ></ArrowBackIosOutlinedIcon></DetailIcon>
          <DateTitle>{getMonthYear(currentDate)}</DateTitle>
          <DetailIcon><ArrowForwardIosOutlinedIcon
            onClick={() => nextMonth(currentDate, setCurrentDate)}
            name="arrow-forward-circle-outline"
          ></ArrowForwardIosOutlinedIcon></DetailIcon>
        </DateControls>
        <SevenColGrid>
          {sortDays(currentDate).map((day) => (
            <HeadDays key={day} className="nonDRAG">{day}</HeadDays>
          ))}
        </SevenColGrid>

        <SevenColGrid
          fullheight={true}
          is28Days={getDaysInMonth(currentDate) === 28}
        >
          {range(getDaysInMonth(currentDate)).map((day) => (
            <div key={day}
              id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
              onDragEnter={(e) =>
                onDragEnter(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  ),
                  e
                )
              }
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={drop}
              onClick={(e) =>
                addEvent(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  ),
                  e
                )
              }
            >
              <span
                className={`nonDRAG ${datesAreOnSameDay(
                  new Date(),
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  )
                )
                    ? "active"
                    : ""
                  }`}
              >
                {day}
              </span>
              <EventWrapper>
                {events.map(
                  (ev, index) =>
                    datesAreOnSameDay(
                      ev.date,
                      new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        day
                      )
                    ) && (
                      <StyledEvent
                        onDragStart={(e) => drag(index, e)}
                        onClick={() => handleOnClickEvent(ev)}
                        draggable
                        className="StyledEvent"
                        id={`${ev.color} ${ev.title}`}
                        key={ev.title}
                        bgColor={ev.color}
                      >
                        {ev.title}
                      </StyledEvent>
                    )
                )}
              </EventWrapper>
            </div>
          ))}
        </SevenColGrid>
        {showPortal && (
          <Portal
            {...portalData}
            handleDelete={handleDelete}
            handlePotalClose={handlePotalClose}
          />
        )}
      </Wrapper>
      <ScheduleFooter>
        <Content>Follow the Fit Clubs Schedule to intiative take part in our training programs</Content>
        <ButtonContainer>
          <ButtonClear>Find Supply For Body Bulk Up</ButtonClear>
          <ButtonFull>Move to Profile Page</ButtonFull>
        </ButtonContainer>
      </ScheduleFooter>
    </PageContainer>
  );
};

const EventWrapper = ({ children }) => {
  if (children.filter((child) => child).length)
    return (
      <>
        {children}
        {children.filter((child) => child).length > 2 && (
          <SeeMore
            onClick={(e) => {
              e.stopPropagation();
              console.log("clicked p");
            }}
          >
            see more...
          </SeeMore>
        )}
      </>
    );
};

const Portal = ({ title, date, handleDelete, handlePotalClose }) => {
  return (
    <PortalWrapper>
      <h2>{title}</h2>
      <p>{date.toDateString()}</p>
      <DetailIconWrapper>
        <DetailIcon><DeleteOutlinedIcon onClick={handleDelete}></DeleteOutlinedIcon></DetailIcon>
        <DetailIcon><CancelPresentationOutlinedIcon onClick={handlePotalClose}></CancelPresentationOutlinedIcon></DetailIcon>
      </DetailIconWrapper>
    </PortalWrapper>
  );
};
