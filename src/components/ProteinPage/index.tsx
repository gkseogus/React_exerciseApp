import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import ProteinItems from '../ProteinItems';
import Footer from '../Footer';
import { Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Constain = styled.div`
  padding: 1em;
  background: black;
  height: 100%;
`

const FirstFont = styled.h1`
  position: static;
  font-size: 100px;
  text-align: center;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Rubik Glitch', cursive;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: smoothAppear 1s;  
`

const SecondFont = styled.div`
  position: static;
  text-align: center;
  font-size: 30px;
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  font-family: 'Noto Sans KR', sans-serif;
`

const BreadCrumbsContstain = styled.div`
  @media (min-width: 760px) {
    padding: 5px;
    position: absolute;
    left: 1350px;
  }
  padding: 5px;
  position: absolute;
  top: 60px;
`

const BreadcrumbFont = styled.h6`
  background: linear-gradient(to right top, #000000, #94eb09);
  color: transparent;
  -webkit-background-clip: text;
  &:hover{  
    background-color : white;
    color : white;
  }
`

const ProteinPage = (itme: any) => {

  const navigate = useNavigate();

  return (
    <div>
      <Constain>  
        <BreadCrumbsContstain>
          <Breadcrumb>
            <Breadcrumb.Item active onClick={() => {navigate('/')}}>
              <BreadcrumbFont>
                Home
              </BreadcrumbFont>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Protein</Breadcrumb.Item>
          </Breadcrumb>
        </BreadCrumbsContstain>
        <FirstFont>
          Protein 
          <SecondFont>
            로그인해야 볼 수 있음
          </SecondFont>
        </FirstFont>
        <ProteinItems/>
      </Constain>
      <Footer/>
    </div>
  );
};

export default React.memo(ProteinPage);