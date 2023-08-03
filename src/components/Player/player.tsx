"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { StyledPlayer, VideoContainer, Controls } from "./styled";
import device from "@/lib/utils/device";
import { FiX, FiMaximize } from "react-icons/fi";
type PropsType = {
  url: string;
};

function Player({ url }: PropsType) {
  const ref = useRef({} as any);
  const [fullScreen, setFullScreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(device());
  }, []);

  return (
    <StyledPlayer ref={ref}>
      <VideoContainer className={fullScreen ? "full-screen" : ""}>
        {isMobile ? (
          <button>
            <FiX />
          </button>
        ) : null}
        <ReactPlayer url={url} className="player" />
        <Controls className={fullScreen ? "absolute-controls" : ""}>
          <FiMaximize onClick={() => setFullScreen(!fullScreen)} />
        </Controls>
      </VideoContainer>
    </StyledPlayer>
  );
}

export default Player;
