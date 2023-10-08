import { globalConfig as cfg } from "@/config";
import s from "./ArticleElements.module.scss";
import Paragraph from "../Paragraph";
import Title from "../Title";
import { IElementsProps } from "./types";

const ArticleElements = ({ elements }: IElementsProps) => {
  const { key: titleKey, h3 } = cfg.tagTitle;
  const { key: paragraphKey, p } = cfg.tagParagraph;

  return (
    <div className={s.articleElements}>
      {elements.map((el: { name: string; text: string }, index: number) =>
        el.name === titleKey ? (
          <Title key={index} tag={"h3"} text={el.text} style={h3.artSubtitle} />
        ) : el.name === paragraphKey ? (
          <Paragraph key={index} text={el.text} style={p.artParagraph} />
        ) : null
      )}
    </div>
  );
};

export default ArticleElements;
