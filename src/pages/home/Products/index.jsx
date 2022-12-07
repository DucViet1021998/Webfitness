import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import ProductData from '../../../Utilities/Product/data';
import { ProductCertificate } from '../../../Utilities/Product/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//--------------------------Install-----------------------------//
//npm install --save styled-components
//npm install react-slick --save
//npm install slick-carousel --save
//-----------------------CSS COMPONENT--------------------------//



const Container = styled.div`
  background-color: #61615e;
  width: 100%;
  height: 80vh;
  margin: -50px;
`;
const PageTitle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 25px;
`;

const TitleInvert = styled.span`
  font-size: 55px;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color:transparent;
`;

const TitleWrapper = styled.span`
  font-size: 55px;
  color: white;
  font-weight: 600
`
const Card = styled.div`
    border: 2px solid white;
    background: #61615e;
    overflow: hidden;
    height: 400px;
    max-width: 400px;
    color: #fff;
    padding: 5px;
    margin-top: 10px;
`;

const CardHeader = styled.div`
  display: flex;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;
const HeaderName = styled.h4`
  font-size: 20px;
  font-weight: 300;
`;
const HeaderPrice = styled.div`

`;
const SlideContainer = styled.div`
padding: 20px;
`;
const ImgContainer = styled.div`
  flex: 2;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 5px;
`;
const SliderImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: black;
`;
const ProductFlavor = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: whitesmoke;
`
const CardFooter = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterDesc = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ShopButton = styled.button`
  padding: 8px 25px;
  border: none;
  background-color: #AED96D;
  cursor: pointer;
  font-weight: 500;
  font-size:20px;
  &:hover {
    background-color: whitesmoke;}
`;
const CartButton = styled.button`
  padding: 8px 25px;
  border: 1px solid #AED96D;
  color: white;
  background-color: #61615e;
  cursor: pointer;
  font-weight: 500;
  font-size:20px;
  &:hover {
    background-color: whitesmoke;
    color: black;
    };
`;

const CertificateContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CertiLogo = styled.img`
  max-width: 40px;
  max-height: 40px;
`;
const CertiBox = styled.div`
  margin: 15px 5px 0px 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  max-width: 700px;
  height: 90px;
  border: 2px solid white;
  box-shadow: 5px 5px 8px black;
  flex: 1 0 41%;
`;
const CertiContent = styled.div`
  margin-left:5px;
`;
const CerTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const CertiDesc = styled.div`
  font-size: 16px;
`;

//-------------------------------------------------------------------------//

const Products = () => {
  const settings = {
    accessibility: false,
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <PageTitle>
        <TitleInvert>BULK UP</TitleInvert>
        <TitleWrapper>WITH</TitleWrapper>
        <TitleInvert>OUR SUPPLEMENT</TitleInvert>
      </PageTitle>
      <SlideContainer>
        <Slider {...settings}>
          {ProductData.map((item) => (
            <Card item={item} key={item.id}>
              <CardHeader>
                <HeaderContainer>
                  <HeaderName>{item.name}</HeaderName>
                  <HeaderPrice>${item.price}</HeaderPrice>
                  <ProductFlavor>Flavor: {item.flavor}</ProductFlavor>
                </HeaderContainer>
                <ImgContainer>
                  <SliderImage src={item.img} />
                </ImgContainer>
              </CardHeader>
              <CardFooter>
                <FooterDesc>{item.description}</FooterDesc>
                <ButtonContainer>
                  <ShopButton>Shop Now</ShopButton>
                  <CartButton>Add to Cart</CartButton>
                </ButtonContainer>
              </CardFooter>
            </Card>
          ))}
        </Slider>
      </SlideContainer>
      <CertificateContainer>
        {ProductCertificate.map((item) => (
          <CertiBox item={item} key={item.id}>
            <CertiLogo src={item.cerIMG} />
            <CertiContent>
              <CerTitle>{item.cerTitle}</CerTitle>
              <CertiDesc>{item.text}</CertiDesc>
            </CertiContent>
          </CertiBox>
        ))}
      </CertificateContainer>

    </Container>
  )
}

export default Products
