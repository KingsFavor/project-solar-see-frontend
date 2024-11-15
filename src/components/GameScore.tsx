import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/logo_100px.svg";
import { ReactComponent as EmptyLogo } from "../assets/logo_outline.svg";
import { ReactComponent as Correct } from "../assets/check1.svg";
import { ReactComponent as Wrong } from "../assets/check2.svg";
import sample from "../assets/image_4_2 1.jpg";

type Position = {
  x: number;
  y: number;
  pIndex: number;
};
type scoreProps = {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  checks: number[];
  setChecks: React.Dispatch<React.SetStateAction<number[]>>;
  marks: Position[];
  setMarks: React.Dispatch<React.SetStateAction<Position[]>>;
  panel: { all_points_x: number[]; all_points_y: number[] }[];
  lifeCount: number;
  setLifeCount: React.Dispatch<React.SetStateAction<number>>;
  setIsGameMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameScore(props: scoreProps) {
  const [logos, setLogos] = useState<JSX.Element[]>([]);
  const correctClicks = props.checks.filter((num: number) => num === 1).length;
  const wrongClicks = props.marks.filter(
    (value: Position) => value.pIndex === -1
  ).length;

  useEffect(() => {
    const newLogos = [
      ...Array(props.lifeCount - wrongClicks)
        .fill(null)
        .map((_, index) => (
          <Logo
            key={index}
            className="w-[7.6335878vw] h-[7.6335878vw]"
            style={{
              marginRight: index < props.lifeCount ? "9.6692112vw" : "0",
            }}
          />
        )),
      ...Array(5 - props.lifeCount + wrongClicks)
        .fill(null)
        .map((_, index) => (
          <EmptyLogo
            key={props.lifeCount + index}
            className="w-[7.6335878vw] h-[7.6335878vw]"
            style={{ marginRight: index < 4 ? "9.6692112vw" : "0" }}
          />
        )),
    ];
    setLogos(newLogos);
    props.setScore(props.score + correctClicks);
    props.setLifeCount(Math.max(0, props.lifeCount - wrongClicks));
  }, []);

  const handleNextGame = () => {
    props.setIsGameMode(true);
    props.setRound(props.round + 1);
    props.setChecks([]);
    props.setMarks([]);
  };

  return (
    <div className="sm:p-4 md:p-6 lg:p-8">
      <div className="flex flex-row justify-between w-full">
        <p className="text-lg">ROUND {props.round}</p>
        <p>{props.score}</p>
      </div>

      <div className="relative flex w-full aspect-square">
        <img src={sample} className="w-full aspect-square" alt="" />
        <svg
          className="absolute left-0 top-0 z-10"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          {props.checks.map(
            (count, i) =>
              props.panel[i] && (
                <polygon
                  key={i}
                  points={props.panel[i].all_points_x
                    .map(
                      (point: number, j: number) =>
                        `${(point * 100) / 393},${
                          (props.panel[i].all_points_y[j] * 100) / 393
                        }`
                    )
                    .join(" ")}
                  fill="rgba(0, 0, 0, 0)"
                  stroke={`${count === 0 ? "#FF7729" : "rgb(127, 168, 255)"}`}
                  strokeWidth="1"
                />
              )
          )}
        </svg>
        <ul>
          {props.marks.map((location, index) => (
            <li key={index}>
              {location.pIndex !== -1 && (
                <Correct
                  style={{
                    position: "absolute",
                    left: `${location.x}px`,
                    top: `${location.y}px`,
                    transform: "translate(-50%, -50%)",
                    width: "27.9px",
                    height: "29px",
                    zIndex: 20,
                  }}
                />
              )}
              {location.pIndex === -1 && (
                <Wrong
                  style={{
                    position: "absolute",
                    left: `${location.x}px`,
                    top: `${location.y}px`,
                    transform: "translate(-50%, -50%)",
                    width: "27.9px",
                    height: "29px",
                    zIndex: 20,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center top-[69.95305vh]">
        {logos.map((logo, index) => (
          <div key={index}>{logo}</div>
        ))}
      </div>

      <div className="flex flex-col items-center top-[76.05634vh]">
        <p>
          {props.panel.length}개 중 {correctClicks}개 맞힘, {wrongClicks}개
          틀림, {props.panel.length - correctClicks}개 놓침
        </p>
        <p className="text-3xl font-bold text-yellow">{correctClicks}점</p>
      </div>

      <div className="flex flex-row justify-between top-[88.967136vh]">
        <button className="rounded-lg bg-[#FFA629] w-[44.2744809vw] h-[6.45533991vh]">
          AI의 실수 잡아내기
        </button>
        <button
          className="rounded-lg bg-[#D9D9D9] w-[44.2744809vw] h-[6.45533991vh]"
          onClick={handleNextGame}
        >
          다음 게임 시작하기
        </button>
      </div>
    </div>
  );
}

export default GameScore;