import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-fest";
import anchorScroll from  "./scripts/anchorScroll";
import "./scripts/header";
import "./scripts/popup-menu";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/order";
import "./scripts/paralax-music";

anchorScroll();