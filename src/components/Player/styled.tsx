import styled from "styled-components";

export const StyledPlayer = styled.div`
  width: 650px;
  padding: 10px;

  .full-screen {
    position: fixed;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;

    .player {
      height: calc(100% - 40px) !important;
    }
  }

  .absolute-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 10px);
  }
`;

export const VideoContainer = styled.div`
  width: 650px;
  padding: 10px;
  background: #fff;

  .player {
    width: 100% !important;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Controls = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: end;
  width: 100%;
  color: #069dee;
  font-size: 25px;
`;
