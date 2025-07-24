import React from 'react'
import styled from 'styled-components'
import img from '../assets/backgroundImg.jpg'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const OverlayText = styled.div`
  position: absolute;
  margin-left:150px;
  top: 20%;
  right: 60%;
  color: white;
  font-weight: bold;
  display:flex;
  flex-direction:column;
  gap:20px;
`

const HelloSection = () => {
  return (
    <Wrapper>
      <Image src={img} alt="background" />
      <OverlayText>
        <h2>SIMPLY CLEVER</h2>
        <h1>BEST COFFEE</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, adipisci porro assumenda, ipsam ab sunt sequi suscipit earum natus quas repellat facere optio laborum sint magnam id facilis pariatur? Consectetur.</p>
      </OverlayText>
    </Wrapper>
  )
}

export default HelloSection
