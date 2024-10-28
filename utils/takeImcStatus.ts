import type { UserImcStatus } from "@/types/UserImcStatus";

export function takeImcStatus(imc: number): UserImcStatus {
  if (imc < 18.5) {
    return "Baixo Peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}
