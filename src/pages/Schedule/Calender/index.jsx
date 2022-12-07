import React, { useState } from 'react'
import { PageContainer, CalenderBody, CalenderHead, HeadDay, SevenColGrid, StyledDay, StyledEvent, Wrapper, TitleNormal, TitleInvert, PageName, Content, ButtonContainer, ButtonFull, ButtonClear } from './styled'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';;
import { DAYS, MONTHS } from './conts';
import { areDatesTheSame, getDateObj, getDaysInMonth, getRandomDarkColor, getSortedDays, range } from './utils';

//------------------installing--------------------//
// npm install --save styled-components //
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react //




const Calender = ({ startingDate, eventsArr, addEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth())
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear())
  const DAYSINAMONTH = getDaysInMonth(currentMonth, currentYear);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(prev => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(prev => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const onAddEvent = (date) => {
    addEvent(date, getRandomDarkColor());
  };
  return (
    <div>
      <PageContainer>
        <PageName>
          <TitleInvert>UP COMING</TitleInvert> <TitleNormal>CLASSES</TitleNormal>
        </PageName>
        <Wrapper>
          <CalenderHead>
            <ArrowBackIosOutlinedIcon onClick={prevMonth} name="arrow-back-circle-outline" />
            <p>
              {MONTHS[currentMonth]} {currentYear}
            </p>
            <ArrowForwardIosOutlinedIcon onClick={nextMonth} name="arrow-forward-circle-outline" />
          </CalenderHead>
          <SevenColGrid>
            {getSortedDays(currentMonth, currentYear).map((day) => (
              <HeadDay>{day}</HeadDay>
            ))}
          </SevenColGrid>
          <CalenderBody fourCol={DAYSINAMONTH}>
            {range(DAYSINAMONTH).map((day) => (
              <StyledDay
                onClick={() => onAddEvent(getDateObj(day, currentMonth, currentYear))}
                active={areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear))} >

                <p>{day}</p>

                {eventsArr.map((ev) =>
                  areDatesTheSame(
                    getDateObj(day, currentMonth, currentYear),
                    ev.date
                  ) && <StyledEvent bgColor={ev?.color}>{ev.title}</StyledEvent>
                )}

              </StyledDay>
            ))}
          </CalenderBody>

        </Wrapper>
        <Content>Follow the Fit Clubs Schedule to intiative take part in our training programs</Content>
        <ButtonContainer>
          <ButtonClear>Find Supply For Body Bulk Up</ButtonClear>
          <ButtonFull>Move to Profile Page</ButtonFull>
        </ButtonContainer>
      </PageContainer>
    </div>
  )
}

export default Calender
