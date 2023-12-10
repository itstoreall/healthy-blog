import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import { SearchInputProps } from "../types";
import s from "./Search.module.scss";
import { contrstDark, middleDark } from "@/theme";

const SearchInput = (props: SearchInputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const { label, value, inputHandler, placeholder, disabled } = props;

  return (
    <div className={s.inputWrap}>
      <SearchIcon fill={isFocus ? contrstDark : middleDark} size={"s"} />

      {!disabled && inputHandler && label ? (
        <input
          type={"text"}
          value={value}
          onChange={(e) => inputHandler({ label, e })}
          placeholder={placeholder}
          className={s.modalInput}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      ) : (
        <input
          defaultValue={value}
          readOnly={true}
          disabled={disabled}
          className={s.modalInput}
        />
      )}
    </div>
  );
};

export default SearchInput;
