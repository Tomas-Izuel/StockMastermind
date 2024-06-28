"use client";
import { CreateOrderSchema } from "@/schemas/order.schema";
import { Order } from "@/types/order";
import { Provider } from "@/types/provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface CreateOrderFormProps {
  providers: Provider[];
}

const CreateOrderForm: FC<CreateOrderFormProps> = ({ providers }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(CreateOrderSchema),
  });

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const response = await fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("Error al crear la orden");
      return;
    }
    toast.success("Orden creada correctamente");
    setTimeout(() => {
      push("/order");
    }, 2000);
  };

  return (
    <>
      <Toaster />
      <form
        className="mt-20 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Datos de la orden</h3>
        <div className="flex justify-between items-center gap-4">
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.quantity}
                label="Cantidad"
                type="number"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="article_id"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.article_id}
                label="ID del artículo"
                type="text"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="provider_id"
            control={control}
            render={({ field }) => (
              <Select label="Proveedor" {...field} required>
                {providers.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id.toString()}>
                    {provider.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <Button
          className="py-7 px-20 ml-3 font-semibold"
          color="primary"
          type="submit"
          isLoading={isSubmitting}
        >
          Crear Orden
        </Button>
      </form>
    </>
  );
};

export default CreateOrderForm;
