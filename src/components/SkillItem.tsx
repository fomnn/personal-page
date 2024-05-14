import { SVGProps, type CSSProperties } from "react";
import EosIconsMaster from "~icons/eos-icons/master";

export default function SkillItem({
  Icon,
  title,
  mastered = false,
}: {
  Icon: ((props: SVGProps<SVGSVGElement>) => React.ReactElement) | string;
  title: string;
  mastered?: boolean;
}) {
  function getRandomDeg() {
    const numbers = [-3, -6, 3, 6];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomItem = numbers[randomIndex];
    return randomItem;
  }
  const randomDeg = getRandomDeg();

  return (
    <div className="group flex flex-col items-center gap-1 px-2 py-3">
      {typeof Icon === "string" ? (
        <img
          src={Icon}
          alt={title}
          className="size-14 drop-shadow-2xl transition-all duration-150 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-[0px_12px_23px_#34d399]"
        />
      ) : (
        <Icon
          className="text-5xl drop-shadow-2xl transition-all duration-150 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-[0px_12px_23px_#34d399]"
          style={{ rotate: `${randomDeg}deg` }}
        />
      )}
      <h3 className="flex items-start text-base">
        {title}
        {mastered && <EosIconsMaster className="ml-1 text-[7px]" />}
      </h3>
    </div>
  );
}
