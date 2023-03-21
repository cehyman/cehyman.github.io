import React from 'react'
import user from './assets/user.jpg'
import './Intro.css'

export default function Intro() {
    return (<div id="about">
        <img id="my-pic" src={user} alt={user} />
        <div id="first-name">Christopher</div>
        <div id="last-name">Hyman</div>
        <div id="title">Software Engineer</div>
        <div id="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed consectetur, nunc quis tristique lacinia, odio nunc pharetra turpis, ac aliquet risus justo non elit. 
                Sed non semper elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed consectetur, nunc quis tristique lacinia, odio nunc pharetra turpis, ac aliquet risus justo non elit. 
                Sed non semper elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed consectetur, nunc quis tristique lacinia, odio nunc pharetra turpis, ac aliquet risus justo non elit. 
                Sed non semper elit. </div>
    </div>);
}
