import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/paralax-music";
import "./scripts/parallax-fest";
import anchorScroll from  "./scripts/anchorScroll";

anchorScroll();