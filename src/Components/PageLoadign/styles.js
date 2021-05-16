import styled , {keyframes} from "styled-components";

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
`
const ldsgrid = keyframes`
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`;

export const Lds = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    
    & div {
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation: ${ldsgrid} 1.2s linear infinite;
        &:nth-child(1){
            top: 6px;
            left: 6px;
            animation-delay: 0s;
        }
        &:nth-child(2){
            top: 6px;
            left: 26px;
            animation-delay: -0.4s;
        }
        &:nth-child(3){
            top: 6px;
            left: 45px;
            animation-delay: -0.8s;
        }
        &:nth-child(4){
            top: 26px;
            left: 6px;
            animation-delay: -0.4s;
        }
        &:nth-child(5){
            top: 26px;
            left: 26px;
            animation-delay: -0.8s;
        }
        &:nth-child(6){
            top: 26px;
            left: 45px;
            animation-delay: -1.2s;
        }
        &:nth-child(7){
            top: 45px;
            left: 6px;
            animation-delay: -0.8s;
        }
        &:nth-child(8){
            top: 45px;
            left: 26px;
            animation-delay: -1.2s;
        }
        &:nth-child(9){
            top: 45px;
            left: 45px;
            animation-delay: -1.6s;
        }

    }
    
`