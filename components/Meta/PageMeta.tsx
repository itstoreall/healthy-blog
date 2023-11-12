import { IMetaProps } from "./types";
import { globalConfig as cfg } from "@/config";
import s from "./Meta.module.scss";
import Title from "../Title";
import Paragraph from "../Paragraph";

const PageMeta = ({ title, description, location }: IMetaProps) => {
  return (
    <div className={`${s.pageMeta} ${s[location]}`}>
      <Title tag={"h2"} text={title} style={cfg.tagTitle.h2.pageTitle} />
      <Paragraph text={description} style={cfg.tagParagraph.p.artDescription} />
    </div>
  );
};

export default PageMeta;
