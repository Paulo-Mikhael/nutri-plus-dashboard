import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";

dayjs.locale(ptBr);

export function getDaysOfWeek(): string[] {
  const days: string[] = [];
  const daysFromNow = 7;
  const getDay = (daysToJump = 0) => {
    return dayjs().add(daysToJump, "day").format("DD [de] MMMM");
  };

  for (let i = daysFromNow - 7; i < daysFromNow; i++) {
    days.push(getDay(i));
  }

  return days;
}
