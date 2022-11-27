import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { isColorLight } from "./utils";
import "./Styles/ColorBox.css";

export const ColorBox = ({
  background,
  name,
  paletteId,
  id,
  showLink,
  singleColorClassName,
}) => {
  const [copied, isCopied] = useState(false);

  const changeCopied = () => {
    isCopied(true);
    setTimeout(() => {
      isCopied(false);
    }, 1500);
  };

  const isLight = isColorLight(background);

  return (
    <CopyToClipboard text={background} onCopy={changeCopied}>
      <div
        style={{ background }}
        className={`colorBox ${singleColorClassName}`}
      >
        <div
          style={{ background }}
          className={`${copied && "show"} colorBox__copyOverlay`}
        />
        <div className={`${copied && "show"} colorBox__copyMsg`}>
          <h1>copied!</h1>
          <p className={isLight ? "dark-text" : undefined}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="colorBox__boxContent">
            <span className={!isLight ? "light-text" : undefined}>{name}</span>
          </div>
          <button className={`copy-button ${isLight && "dark-text"}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`see-more ${isLight && "dark-text"}`}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};
