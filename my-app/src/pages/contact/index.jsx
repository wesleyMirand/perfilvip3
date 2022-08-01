import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/wesley-miranda-a04544185/" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/wewesantos2022/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="wesleyubuntujs@gmail.com" 
        />
      </Content>
    </Container>
  )
}