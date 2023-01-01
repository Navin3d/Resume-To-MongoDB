import React from 'react'
import { ConfigProvider, Descriptions,Row,Col,Space } from 'antd';
function ProfilePage() {
  const name="Navin Durai";
  const email="smnavin65@gmail.com";
  const profiles="linkedin.com/in/smnavindurai/"
  const awards="TOYCATON 2021 Finalist - Government of India\nMar 2021\nNavin Durai - page 1";
  const Summary="Hi, I'm Navin Durai\nAn Undergrad pursuing Bachelor's Degree in Computer Science Engineering, with hands-on experience in\nmultiple programming languages.\nFront-End Development React.js, JavaScript, HTML5/CSS.\nBack-End Development Spring Boot, Java, Django, AWS, Node.js, Firebase.\nMiscellaneous Android/iOS App Development (Flutter), XDA Development (Android customisation)"
  const skills="Spring Boot React.js Django Node.js Flutter Web Development Internet of Things (IoT)\nAmazon Web Services (AWS) Microservices REST APIs";
  const education="Panimalar Engineering College\nBachelor of Engineering - BE, Computer Science\nNov 2020 - Jun 2024\nAnitha Kumaran Matric hr secondary School\nHigh School Diploma, Computer Science\n2018 - 2020";
  const valuemodifier=(input)=>{
  
  let newvalue = input.split('\n').map(i => {
    return <p>{i}</p>  
    })
    return(
      <p>{newvalue}</p>
    )
  }
  return (
    <div>
      <ConfigProvider
      theme={{
        token:{
            colorPrimary: '#F1FAEE',
        colorTextBase:'#F1FAEE',
       
       
        }
        
      }}>
        <Space direction='vertical'size={30}>
        <Row>
          <Col span={8} offset={10}><h1>User profile</h1></Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
        <Descriptions bordered>
    <Descriptions.Item label="Name">{valuemodifier(name)}</Descriptions.Item>
    <Descriptions.Item label="Email">{valuemodifier(email)}</Descriptions.Item>
    <Descriptions.Item label="Profiles">{valuemodifier(profiles)}</Descriptions.Item>
    <Descriptions.Item label="Awards">{valuemodifier(awards)}</Descriptions.Item>
    <Descriptions.Item label="Skills">{valuemodifier(skills)}</Descriptions.Item>
    <Descriptions.Item label="Education">
      {valuemodifier(education)}
    </Descriptions.Item>
    <Descriptions.Item label="Summary">
      {valuemodifier(Summary)}
      
    </Descriptions.Item>
  </Descriptions>
  </Col>
  </Row>
  </Space>
      </ConfigProvider>
      </div>
  )
}

export default ProfilePage