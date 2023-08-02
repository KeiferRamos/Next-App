import React from "react";
import { Loader } from "../../styles";

function Loading() {
  return (
    <Loader>
      <div>
        <img src="/images/wait.png" alt="" />
        <p>loading...</p>
      </div>
    </Loader>
  );
}

export default Loading;
