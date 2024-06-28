// src/components/client/CreateClientForm.tsx
"use client";
import { CreateClientSchema } from "@/schemas/clients.schema";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const CreateClientForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(CreateClientSchema),
  });

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("Error al crear el cliente");
    } else {
      toast.success("Cliente creado correctamente");
      setTimeout(() => {
        push("/clients");
      }, 2000);
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
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.name}
                label="Nombre del cliente"
                className="w-[60%]"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="cuit"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.cuit}
                className="w-full"
                label="CUIT"
                type="number"
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
          <CheckCircleIcon className="w-6 h-6" />
        </Button>
      </form>
    </>
  );
};

export default CreateClientForm;
