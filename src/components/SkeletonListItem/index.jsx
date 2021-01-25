import React from 'react';
import styled from 'styled-components'

export const SkeletonWrapper = styled.div`
  background: #f2f2f2;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`
export const SkeletonText = styled.div`
  background: #ddd;
  margin: 10px 0;
  border-radius: 4px;
  width: 90%;
  height: 1.25rem;
  margin: 15px;
`
export const SkeletonTitle = styled.div`
  background: #ddd;
  margin: 10px 0;
  border-radius: 4px;
  width: 50%;
  height: 1.75rem;
  margin: 15px;
`
// export const SkeletonAvatar = styled.div`
//   width: 50%;
//   height: 20px;
//   margin-bottom: 15px;
// `
// export const SkeletonThumbnail = styled.div`
//   width: 100px;
//   height: 100px;
// `
export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 1.5s infinite; 

  @keyframes loading {
    0% { transform: translateX(-150%) }
    50% { transform: translateX(-60%) }
    100% { transform: translateX(150%) }
  }
`
export const Shimmer = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255,255,255,0.05);
`



const SkeletonListItem = () => {


  return (
    <li>
      <SkeletonWrapper>
          <SkeletonTitle />
          <SkeletonText />
          <SkeletonText />
          <ShimmerWrapper><Shimmer></Shimmer></ShimmerWrapper>
      </SkeletonWrapper>
    </li>
  )
}

export default SkeletonListItem;