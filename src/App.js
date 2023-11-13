import { CssModules } from "./components/cssModules";
import { Emotion } from "./components/emotion";
import { InlineStyle } from "./components/inlineStyle";
import { StyledComponents } from "./components/styledComponents";
import { StyledJsx } from "./components/styledJsx";
import "./styles.css";
// import Emotion from "emotion/dist/emotion.cjs";
// import { css } from "./components/@emotion/css";
// import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
