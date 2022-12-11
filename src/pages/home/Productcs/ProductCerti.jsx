import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

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

const CertificateContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  height:fit-content;
  display:grid;
  grid-template-columns: 400px 400px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Certi = () => {

  const [productsCerti, setProductsCerti] = useState([])
  const certiAPI = "https://638228ee9842ca8d3ca2a40d.mockapi.io/productCerti"

  useEffect(() => {
    axios.get(certiAPI)
      .then(response => setProductsCerti(response.data))
      .catch(error => console.log(error))
  }, [])

  const renderProductsCerti = (product) => {
    return (
      <CertificateContainer>{productsCerti.map((product, index) => {
        return (
          <CertiBox key={product.id}>
            <CertiLogo src={product.cerIMG} />
            <CertiContent>
              <CerTitle>{product.cerTitle}</CerTitle>
              <CertiDesc>{product.text}</CertiDesc>
            </CertiContent>
          </CertiBox>
        )
      })
      }</CertificateContainer>)
  }

  return (
    <div>
      {renderProductsCerti(productsCerti)}
    </div>
  )
}

export default Certi
