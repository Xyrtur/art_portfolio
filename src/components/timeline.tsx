"use client"
import { motion } from "framer-motion";

export function Timeline({ showTitle = true }: { showTitle?: boolean }) {
    const timelineProgress: boolean[] = [true, true, false, false, false];
    const goalsList: string[] = ["Active member of ISSA", "Sell at markets", "Signature member of ISSA", "Galleries and exhibitions", "Master member of ISSA"];
    let yStart = 45;
    let yEnd = 120;
    let circleCenter = 150;
    let lineDelay = 1;
    let circleDelay = lineDelay + 1;
    let firstLineCompleted = false;

    return (<div className="flex flex-row">
        <motion.svg
            className="h-96 w-20 text-white self-start "
            width="100"
            height="900"
            viewBox="-80 -13 200 900"
            strokeWidth="4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"

        >
            < motion.rect fill="none" initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }} transition={{
                    duration: 1
                }} x="35" y="15" width={30} height={30} />

            {goalsList.map((_, index) => {

                const thing = (<>
                    <motion.line initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }} transition={{
                            duration: 0.75, delay: lineDelay
                        }} x1="50" y1={yStart} x2="50" y2={yEnd} />


                    <motion.circle fill="none" initial={timelineProgress[index] ? {
                        fill: "rgba(255,255,255,0)",
                    } : undefined}
                        animate={timelineProgress[index] ? {
                            fill: "rgba(255,255,255,1)",
                        } : undefined}
                        transition={timelineProgress[index] ? { duration: 0.75, delay: circleDelay } : undefined} r="30" cx="50" cy={circleCenter} /></>);
                yStart += firstLineCompleted ? 150 : 135;
                yEnd += 150;
                circleCenter += 150;
                lineDelay = timelineProgress[index] ? circleDelay : lineDelay + 0.75;
                circleDelay = lineDelay + 0.75;
                firstLineCompleted = true;
                return thing;
            })}
        </motion.svg>
        <div className={`flex flex-col space-y-9 ${showTitle ? "" : "mt-16"}`}>
            {showTitle && (<p className="text-secondary-color text-xl text-center">Timeline</p>)}
            {goalsList.map((goal: string) => {
                return (<p>{goal}</p>);
            })}

        </div>
    </div>);
}