import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { ConfigProvider, Descriptions, Row, Col, Space } from 'antd';


const INITIALUSER = {
  "name": "Navin Durai",
  "email": "smnavin65@gmail.com",
  "profiles": "linkedin.com/in/smnavindurai https",
  "summary": "Hi, I'm Navin Durai\nAn Undergrad pursuing Bachelor's Degree in Computer Science Engineering, with hands-on experience in\nmultiple programming languages.\nFront-End Development React.js, JavaScript, HTML5/CSS.\nBack-End Development Spring Boot, Java, Django, AWS, Node.js, Firebase.\nMiscellaneous Android/iOS App Development (Flutter), XDA Development (Android customisation).",
  "education": "Panimalar Engineering College\nBachelor of Engineering - BE, Computer Science\nNov 2020 - Jun 2024\nAnitha Kumaran Matric hr secondary School\nHigh School Diploma, Computer Science\n2018 - 2020",
  "skills": "Spring Boot React.js Django Node.js Flutter Web Development Internet of Things (IoT)\nAmazon Web Services (AWS) Microservices REST APIs",
  "awards": "TOYCATON 2021 Finalist - Government of India\nMar 2021\nNavin Durai - page 1",
  "honors": "& Awards\nTOYCATON 2021 Finalist - Government of India\nMar 2021\nNavin Durai - page 1"
};

function ProfilePage() {
  const name = "Navin Durai";
  const email = "smnavin65@gmail.com";
  const profiles = "linkedin.com/in/smnavindurai/"
  const awards = "TOYCATON 2021 Finalist - Government of India\nMar 2021\nNavin Durai - page 1";
  const Summary = "Hi, I'm Navin Durai\nAn Undergrad pursuing Bachelor's Degree in Computer Science Engineering, with hands-on experience in\nmultiple programming languages.\nFront-End Development React.js, JavaScript, HTML5/CSS.\nBack-End Development Spring Boot, Java, Django, AWS, Node.js, Firebase.\nMiscellaneous Android/iOS App Development (Flutter), XDA Development (Android customisation)"
  const skills = "Spring Boot React.js Django Node.js Flutter Web Development Internet of Things (IoT)\nAmazon Web Services (AWS) Microservices REST APIs";
  const education = "Panimalar Engineering College\nBachelor of Engineering - BE, Computer Science\nNov 2020 - Jun 2024\nAnitha Kumaran Matric hr secondary School\nHigh School Diploma, Computer Science\n2018 - 2020";

  const [user, setUser] = useState(INITIALUSER);
  const { userId } = useParams();
  const initializeUser = async () => {
    const resonse = await axios.get(`http://localhost:3001/user/${userId}`);
    setUser(resonse.data.data);
    console.log(resonse.data.data)
  }
  useEffect(() => {
    initializeUser();
  }, []);
  const valuemodifier = (input) => {
    let newvalue = input.split('\n').map((i, v) => {
      return <p key={v}>{i}</p>
    })
    return (
      <p>{newvalue}</p>
    )
  }
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#F1FAEE',
            colorTextBase: '#F1FAEE',
          }
        }}>
        <Space direction='vertical' size={30}>
          <Row>
            <Col span={8} offset={10}><h1>User profile</h1></Col>
          </Row>
          <Row>
            <Col span={20} offset={2}>
              <Descriptions bordered>
                {user.name ? <Descriptions.Item label="Name">{valuemodifier(user.name)}</Descriptions.Item> : ""}
                {user.email ? <Descriptions.Item label="Email">{valuemodifier(user.email)}</Descriptions.Item> : ""}
                {user.profiles ? <Descriptions.Item label="Profiles">{valuemodifier(user.profiles)}</Descriptions.Item> : ""}
                {user.awards ? <Descriptions.Item label="Awards">{valuemodifier(user.awards)}</Descriptions.Item> : ""}
                {user.education ? <Descriptions.Item label="Education">
                  {valuemodifier(user.education)}
                </Descriptions.Item> : ""}
                {user.summary ? <Descriptions.Item label="Summary">
                  {valuemodifier(user.summary)}
                </Descriptions.Item> : ""}
              </Descriptions>
            </Col>
          </Row>
        </Space>
      </ConfigProvider>
    </div>
  )
}

export default ProfilePage