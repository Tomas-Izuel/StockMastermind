"use client";
import { CreateClientSchema } from "@/schemas/client.schema";
import { Client } from "@/types/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface CreateClientFormProps {
  // Define las propiedades necesarias, si las hubiera
}

const CreateClientForm: FC<CreateClientFormProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(CreateClientSchema), // Utiliza el esquema de validación de cliente
  });

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al crear el cliente");
      }

      toast.success("Cliente creado correctamente");
      setTimeout(() => {
        push("/client");
      }, 2000);
    } catch (error) {
      toast.error("Error al crear el cliente");
    }
  };

  return (
    <>
      <Toaster />
      <form
        className="mt-20 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Datos del cliente</h3>
        <div className="flex justify-between items-center gap-4">
          <Controller
            name="cuit"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.cuit}
                label="CUIT del cliente"
                className="w-[60%]"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.name}
                className="w-full"
                label="Nombre del cliente"
                {...field}
                required
              />
            )}
          />
        </div>
        <Button
          className="py-7 px-20 ml-3 font-semibold"
          color="primary"
          type="submit"
          isLoading={isSubmitting}
        >
          Crear cliente
        </Button>
      </form>
    </>
  );
};

export default CreateClientForm;
