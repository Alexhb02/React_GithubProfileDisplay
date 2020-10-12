import React from "react";
import { useSpring, animated } from "react-spring";
function Home() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <div class="homeBox">
      <div class="welcome">
        <h1>Welcome!</h1>
      </div>
      <div class="spacer"></div>
      <div>
        <p class="mainText">
          This is a very quick website I made to show you that I have a decent
          understanding of React, since in the other website I sent I didn't use
          any react. I learned react primarily through hackathons as well as
          tutorials that I watched about React. <br></br>
          <br></br>
          In this website, you will find a menu with a link to my github
          portfolio. I generate the github portfolio through API requests. I
          went a bit overboard with the css styling, but since this was just a
          personal project, I thought I would have fun with it. Proceed by
          clicking on the menu option in the top right and choosing the
          "Projects" link.
          <br></br>
          <br></br>
          <br></br> Thanks,<br></br> <br></br> <br></br>Alexander HB.
        </p>
      </div>
    </div>
  );
}

export default Home;
