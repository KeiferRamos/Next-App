"use client";

import React, { useState, useEffect } from "react";
import device from "@/lib/utils/device";
import { Carousel as CarouselComp } from "antd";

function Carousel({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(device());
  }, []);

  return (
    <CarouselComp slidesToShow={isMobile ? 1 : 3}>{children}</CarouselComp>
  );
}

export default Carousel;
