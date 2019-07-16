import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import ReactLogo from './ReactLogo'
import Hi from './Highlight'

export default () => (
  <Wrapper>
    <PerspectiveProvider>
      <ReactLogo />
      <ReactLogo style={{animationDelay: '300ms', opacity: .5}} fill="rgb(255, 66, 129)" />
      <ReactLogo style={{animationDelay: '100ms', opacity: .5}} fill="rgb(78, 255, 62)" />
      <ReactLogo style={{animationDelay: '200ms', opacity: .5}} fill="rgb(29, 170, 251)" />
    </PerspectiveProvider>
    <h1>Intro to <Hi>React JS</Hi></h1>
    <Subtitle>Building UI's in the year 6000</Subtitle>
  </Wrapper>
)

const spin = keyframes`
  from{
    transform: rotate3d(0,1,0,0deg);
  }
  to{
    transform: rotate3d(0,1,0,360deg);
  }
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    animation: ${spin} 1600ms linear infinite;
    will-change: transform;
  }
`

const PerspectiveProvider = styled('div')`
  perspective: 30vw;
  width: 20vw;
  height: 20vw;
`

const Subtitle = styled('h3')`
  margin-top: -1em;
  color; ${({theme}) => theme.primary.color};
  font-style: italic;
`
