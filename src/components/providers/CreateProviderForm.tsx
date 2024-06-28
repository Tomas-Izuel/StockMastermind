"use client";
import { CreateProviderSchema } from "@/schemas/provider.schema";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const CreateProviderForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(CreateProviderSchema),
  });

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/provider", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("Error al crear el proveedor");
    }
    toast.success("Proveedor creado correctamente");
    setTimeout(() => {
      push("/providers");
    }, 2000);
  };
  return (
    <>
      <Toaster />
      <form
        className="mt-20 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Datos del producto</h3>
        <div className="flex justify-between items-center gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.name}
                label="Nombre del proveedor"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="cuit"
            control={control}
            render={({ field }) => <Input label="CUIT" {...field} required />}
          />
          <Controller
            name="shipping_time"
            control={control}
            render={({ field }) => (
              <Input
                label="Tiempo de envio (dias)"
                type="number"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="shipping_cost"
            control={control}
            render={({ field }) => (
              <Input
                label="Costo de envio"
                startContent={
                  <span className="text-gray-600 font-semibold">$</span>
                }
                type="number"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="is_default"
            control={control}
            render={({ field }) => (
              <div className="w-96 flex flex-col justify-center items-center">
                <span>Por defecto</span>
                <Switch {...field} />
              </div>
            )}
          />
        </div>

        <div className="flex w-full justify-end items-center">
          <Button
            className="py-7 px-20 ml-3 font-semibold"
            color="primary"
            type="submit"
            isLoading={isSubmitting}
          >
            Crear proveedor
            <CheckCircleIcon className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateProviderForm;
