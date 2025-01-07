/** @format */

"use client";
import { motion } from "framer-motion";

export function Timeline({
  showTitle = true,
  showDates = true,
}: {
  showTitle?: boolean;
  showDates?: boolean;
}) {
  const timelineProgress: boolean[] = [true, true, false, false, false];
  const goalsList: string[] = [
    "Active member of ISSA",
    "Sell at markets",
    "Strathearn Art Walk",
    "Enter ISSA Annual Exhibition",
    "Signature member - ISSA",
    "Complete series on mountains",
    "Complete series on waterfalls",
    "Be represented by a gallery",
    "Join ASA and SAA",
    "Master member - ISSA",
  ];
  const datesList: string[] = ["2024", "2024", "(2025)", "(2026)", "(2026)", "(2027)", "(2029)", "(2032)", "(2033)", "(2036)"];
  let yStart = 45;
  let yEnd = 120;
  let circleCenter = 150;
  let lineDelay = 3;
  let circleDelay = lineDelay + 1;
  let firstLineCompleted = false;
  const shapeList: JSX.Element[] = [];
  const dateTextList: JSX.Element[] = [];
  goalsList.map((_, index) => {
    shapeList.push(
      <motion.line
        key={"line " + index}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: lineDelay,
        }}
        x1="50"
        y1={yStart}
        x2="50"
        y2={yEnd}
      />
    );

    shapeList.push(
      <motion.circle
        key={"circle " + index}
        fill="none"
        initial={
          timelineProgress[index]
            ? {
              fill: "rgba(255,255,255,0)",
            }
            : undefined
        }
        animate={
          timelineProgress[index]
            ? {
              fill: "rgba(255,255,255,1)",
            }
            : undefined
        }
        transition={
          timelineProgress[index]
            ? { duration: 0.75, delay: circleDelay }
            : undefined
        }
        r="30"
        cx="50"
        cy={circleCenter}
      />
    );

    dateTextList.push(
      <motion.p
        key={"date " + index}
        className="text-end min-[800px]:text-sm max-[800px]:text-base lg:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.75,
          delay: circleDelay,
        }}
      >
        {datesList[index]}
      </motion.p>
    );

    yStart += firstLineCompleted ? 150 : 135;
    yEnd += 150;
    circleCenter += 150;
    lineDelay = timelineProgress[index] ? circleDelay : lineDelay + 0.75;
    circleDelay = lineDelay + 0.75;
    firstLineCompleted = true;
  });

  return (
    <div className="flex flex-row">
      {Boolean(showDates) && (
        <div className="flex flex-col min-[800px]:space-y-9 max-[800px]:space-y-10 lg:space-y-10 mt-16">{dateTextList}</div>
      )}
      {/* To add a new goal to timeline: add (estimate it)rem to height className and 80 to svg height*/}
      <motion.svg
        className="min-[800px]:h-[38.5rem] max-[800px]:h-[43rem] lg:h-[43rem] w-16 text-white self-start "
        width="50"
        height="1620"
        viewBox="25 -30 50 1620"
        strokeWidth="4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          x="35"
          y="15"
          width={30}
          height={30}
        />

        {shapeList}
      </motion.svg>
      <div
        className={`flex flex-col min-[800px]:space-y-9 min-[800px]:text-sm max-[800px]:text-base max-[800px]:space-y-10 lg:space-y-10 lg:text-base ${showTitle ? "" : "mt-16"
          }`}
      >
        {showTitle && (
          <p className="text-secondary-color text-xl text-center">Timeline</p>
        )}
        {goalsList.map((goal: string, index) => {
          return <p key={"goal " + index}>{goal}</p>;
        })}
      </div>
    </div>
  );
}
