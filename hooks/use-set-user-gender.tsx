import { useUserStore } from "./state/store";

export function useSetUserGender(): (gender: "man" | "woman") => void {
  const setUserGender = useUserStore((state) => state.setUserGender);

  return (gender: "man" | "woman") => {
    setUserGender(gender);
  };
}
