import { z } from "zod";

const transform = (val: string) => {
    const numberVal = Number(val);
    if (isNaN(numberVal)) {
      throw new Error("Invalid number");
    }
    return numberVal;
  };

export const ClientSchema = z.object({
    cuit: z.number(),
    name: z.string()
});

export const CreateClientSchema = z.object({
    cuit: z.string().transform(transform),
    name: z.string()
  });