import AnimatedCursor from "react-animated-cursor";

import "./App.scss";
import "./theme/global.scss";
import Pages from "./Pages";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />

      <Pages />
    </>
  );
};

export default App;
