import React, { useState } from 'react';
import styled from 'styled-components';

const tab = () => {
  const [tabId, setTabId] = useState('one');

  const clickTab = (e) => {
    setTabId(e.target.id);
  };

  return (
    <Container className="Box">
      <span className="title">Tap</span>
      <TabBox className="tabBox">
        <TitleBox>
          <TabTitle id="one" onClick={clickTab}>
            tab1
          </TabTitle>
          <TabTitle id="two" onClick={clickTab}>
            tab2
          </TabTitle>
          <TabTitle id="three" onClick={clickTab}>
            tab3
          </TabTitle>
        </TitleBox>
        <TabContent>
          {tabId === 'one' ? (
            <Items className="contents show">
              <span>Tab menu ONE</span>
            </Items>
          ) : null}
          {tabId === 'two' ? (
            <Items className="contents show">
              <span>Tab menu TWO</span>
            </Items>
          ) : null}
          {tabId === 'three' ? (
            <Items className="contents show">
              <span>Tab menu THREE</span>
            </Items>
          ) : null}
        </TabContent>
      </TabBox>
    </Container>
  );
};

export default tab;

const Container = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const TabBox = styled.div`
  width: 90%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const TabTitle = styled.div`
  width: 20%;
  background-color: #97c1e7;
  text-align: center;
`;

const TabContent = styled.div`
  width: 60%;
  height: 200px;
  background-color: #97c1e7;
  text-align: center;
  margin: auto;
`;

const Items = styled.div`
  color: #fff;
`;
