import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Frontend Developer
</Title>
<Description>
Although frontend development is not my expertise, I can still work with the Frontend stack at a basic and intermediate level and with such intermediate level knowledge I can still create my Portfolio website.
</Description>
<Description>
<strong>Skills</strong>
<ul>
    <li>
    🌐 Html, 🎨 Css, 🖥️ Js, ⚛️ React, 📚 Bootstrap
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
    🛠️ Visual Studio Code, 🐱 GitHub
    </li>
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Backend Developer
</Title>
<Description>
I have extensive experience in building REST APIs using the latest version of Spring Boot 3, Spring Data JPA (Hibernate) and MySQL database.
</Description>
<Description>
<strong>Skills</strong>
<p>
☕Java (OOP), 🗃️ SQL 
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
🌱Spring Boot 3+, 🗃️Spring Data JPA (Hibernate), ✍️Lombok, 🗄️MySQL, 🛠️IntelliJ IDEA, 🧩Maven, 👤Tomcat, 📬Postman, 🐱GitHub
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
