import React, { useState } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

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

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.07;

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
          <p className={isLightColor ? "dark-text" : undefined}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="colorBox__boxContent">
            <span className={isDarkColor ? "light-text" : undefined}>
              {name}
            </span>
          </div>
          <button className={`copy-button ${isLightColor && "dark-text"}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`see-more ${isLightColor && "dark-text"}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};
