import React, { useEffect, useState } from 'react'
import {ConfigProvider,Row,Col,Space,Skeleton} from "antd"
import { Avatar, List } from 'antd';
import { Input } from 'antd';
const { Search } = Input;

function ProfilesList() {
  const fakeDataUrl = `https://randomuser.me/api/?results=100&inc=name,gender,email,nat,picture&noinfo`;
    const onSearch = (value) => console.log(value);
    const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
        setList(res.results);
      });
  }, []);
  return (
    <div className='' style={{padding:'2rem'}}>
        <Space direction="vertical" size="large" style={{display:'flex'}}>
    <div>
        <Row>
            <Col span={4} offset={4}>
                <h1>Find people....</h1>
                </Col>
        </Row>
        
    </div>
    <div>
        <Row>
      <Col span={12} offset={6}>
        <ConfigProvider
         theme={{
      token: {
         
         colorPrimary:"#E63946"
         
      },
    }}>
       
        <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
        </ConfigProvider>

      </Col>
    </Row>
    </div>
    <div>
      <ConfigProvider
         theme={{
      token: {
         colorPrimary:"#E63946",
         colorTextBase:'#F1FAEE',
         
      },
    }}>
       
  
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={list}
      
      renderItem={(item) => (
        <List.Item
          actions={[ <a key="list-loadmore-more">more</a>]}
          
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>kaushikmass2002@gmail.com</div>
          </Skeleton>
        </List.Item>
      )}
    />
  </ConfigProvider>
    </div>
        </Space>
        </div>
  )
}

export default ProfilesList