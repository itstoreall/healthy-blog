"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cfg from "./config";
import { getCurrentTheme } from "@/utils";
import s from "./GoToTopButton.module.scss";
import Arrow from "./Arrow";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = useTheme();
  const currentTheme = getCurrentTheme(theme);

  const visibleValue = () => (window.scrollY > cfg.visibleValue ? true : false);
  const visibleStyle = isVisible ? cfg.visibleStyle : "";
  const scrollConfig = cfg.scroll as ScrollToOptions;

  useEffect(() => {
    window.addEventListener(cfg.event, handleScroll);
    return () => window.removeEventListener(cfg.event, handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToTop = () => isVisible && window.scrollTo(scrollConfig);
  const handleScroll = () => setIsVisible(visibleValue());

  return (
    <div className={`${s.progressLine} ${s[currentTheme]}`}>
      <div className={`${s.goToTopButtonWrap} ${s[visibleStyle]}`}>
        <span className={s.goToTopButton} onClick={scrollToTop}>
          <Arrow direction={"up"} size={"l"} width={"16px"} height={"16px"} />
        </span>
      </div>
    </div>
  );
};

export default GoToTopButton;
