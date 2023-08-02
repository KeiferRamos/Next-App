"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  MenuOutlined,
} from "@ant-design/icons";

import { SideContent, StyledSidebar } from "./styles";

function Sidebar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openSide, setOpenSide] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    router.push(href);
    setOpenSide(false);
  };

  return (
    <StyledSidebar>
      <div
        className="desktop-nav"
        style={{
          background: scrollPosition >= 100 ? "#302f2f" : "transparent",
        }}
      >
        <Link href="/">
          <h1>
            CHILL & <span>PLAY</span>
          </h1>
        </Link>
        <div className="links">
          <Link href="/movies">Movies</Link>
          <Link href="/genres">Browse Movie by Genres</Link>
        </div>
        <div className="social-medias">
          <LinkedinFilled />
          <FacebookFilled />
          <InstagramFilled />
        </div>
      </div>
      <div
        className="mobile-nav"
        style={{
          background: scrollPosition >= 100 ? "#302f2f" : "transparent",
        }}
      >
        <header>
          <Link href="/">
            <h1>
              CHILL & <span>PLAY</span>
            </h1>
          </Link>
          <MenuOutlined onClick={() => setOpenSide(true)} />
        </header>
        <SideContent style={{ right: openSide ? 0 : "-100%" }}>
          <header>
            <Link href="/">
              <h1>
                CHILL & <span>PLAY</span>
              </h1>
            </Link>
            <MenuOutlined onClick={() => setOpenSide(false)} />
          </header>
          <br />
          <div className="links">
            <button type="button" onClick={() => handleClick("/movies")}>
              Movies
            </button>
            <button type="button" onClick={() => handleClick("/genres")}>
              Browse Movie by Genres
            </button>
          </div>
          <div className="social-medias">
            <LinkedinFilled />
            <FacebookFilled />
            <InstagramFilled />
          </div>
        </SideContent>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
