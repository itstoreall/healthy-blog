"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { globalConfig as cfg } from "@/config";
import s from "./Preloader.module.scss";
import Spinner from "../Loading/Spinner";

const Preloader = () => {
  const [isPreloader, setIsPreloader] = useState<boolean>(true);

  const { setTheme } = useTheme();

  useEffect(() => {
    const globalWrapperElement = document.getElementById("global_wrapper");
    if (globalWrapperElement) {
      globalWrapperElement.style.display = "none";
      const lsTheme = localStorage.getItem("theme");
      setTheme(lsTheme ? lsTheme : "dark");
      globalWrapperElement.style.display = "block";
      setTimeout(() => setIsPreloader(false), cfg.gen.preloader.timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isPreloader && (
        <div className={s.preloaderWrap}>
          <div className={s.preloader}>
            <Spinner />
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
