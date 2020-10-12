import React from "react";
import { useTransition, useSpring, animated } from "react-spring";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function GithubProject(props) {
  const [spring, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const appear = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div
      onMouseMove={() => set({ xys: [0, 0, 1.1] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: spring.xys.interpolate(trans) }}
    >
      <div class="borderbox">
        <div class="mainbox">
          <div class="githubProjName">{props.project.name}</div>
          <div class="githubDescription">
            <span class="wordDescription">Description: </span>
            {props.project.description}
          </div>
          <div class="githubDescription">
            <span class="wordDescription">Link: </span>
            <a href={props.project.html_url}>{props.project.html_url}</a>
          </div>
          <div class="githubDescription">
            <span class="wordDescription">Creation Date: </span>
            {props.project.created_at.substring(0, 10)}
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default GithubProject;
