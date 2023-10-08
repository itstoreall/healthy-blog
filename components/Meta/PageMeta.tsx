import { IMetaProps } from "./types";
import { globalConfig as cfg } from "@/config";
import s from "./Meta.module.scss";
import Title from "../Title";

const PageMeta = ({ title, description }: IMetaProps) => {
  return (
    <div className={s.pageMeta}>
      <Title tag={"h2"} text={title} style={cfg.tagTitle.h2.pageTitle} />
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default PageMeta;
