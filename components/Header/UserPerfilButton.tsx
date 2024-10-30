"use client";

import user from "@/assets/user.png";
import maleUser from "@/assets/male-user.png";
import femaleUser from "@/assets/female-user.png";
import { Tooltip } from "../Tooltip";
import { Button } from "../ui/button";
import { UserInfosDialog } from "../UserInfosDialog";
import Image from "next/image";
import { useUserGender } from "@/hooks/use-user-gender";

export function UserPerfilButton() {
  const userGender = useUserGender();

  return (
    <>
      <Tooltip tipText="Ver Perfil">
        <UserInfosDialog>
          <Button variant="ghost" size="icon">
            <Image
              width={32}
              height={26}
              className="rounded-full"
              src={userGender ? (userGender === "man" ? maleUser : femaleUser) : user}
              alt="imagem do usuário"
            />
          </Button>
        </UserInfosDialog>
      </Tooltip>
    </>
  );
}
