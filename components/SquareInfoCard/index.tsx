import clsx from "clsx";
import { Tooltip } from "../Tooltip";
import { Card } from "../ui/card";

interface SquareInfoCardProps {
  tipText: string;
  h4: string;
  h5: string;
  h6?: string;
  titleH5?: boolean; // If the text of h5 have to be the title of the card (for accessibity)
  vertical?: boolean;
}

export function SquareInfoCard({
  tipText,
  h4,
  h5,
  h6,
  titleH5 = false,
  vertical = true,
}: SquareInfoCardProps) {
  return (
    <Tooltip tipText={tipText}>
      <Card
        className={clsx("p-5 flex gap-2 items-center h-full", {
          "flex-col justify-center": vertical,
        })}
      >
        {titleH5 === false ? (
          <>
            <h4 className="text-3xl text-center">{h4}</h4>
            <h5 className="text-center">{h5}</h5>
          </>
        ) : (
          <>
            <h5 className="text-3xl text-center">{h4}</h5>
            <h4 className="text-center">{h5}</h4>
          </>
        )}
        {h6 && <h6 className="text-[12px] text-center">{h6}</h6>}
      </Card>
    </Tooltip>
  );
}
