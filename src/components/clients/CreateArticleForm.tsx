"use client";
import { CreateArticleSchema } from "@/schemas/articles.schema";
import { CreateArticle } from "@/types/article";
import { Family } from "@/types/family";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface CreateArticleFormProps {
  families: Family[];
}

const CreateArticleForm: FC<CreateArticleFormProps> = ({ families }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    resolver: zodResolver(CreateArticleSchema),
  });

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const response = await fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("Error al crear el articulo");
    }
    toast.success("Articulo creado correctamente");
    setTimeout(() => {
      push("/articles");
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
                label="Nombre del articulo"
                className="w-[60%]"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="model"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.model}
                className="w-full"
                label="Modelo"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="brand"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.brand}
                label="Marca"
                className="w-[60%]"
                {...field}
                required
              />
            )}
          />
        </div>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              label="Descripción del articulo (opcional)"
              className="w-full"
              {...field}
            />
          )}
        />
        <h3>Venta</h3>
        <div className="flex justify-between items-center gap-4">
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.price}
                label="Precio"
                type="number"
                startContent={
                  <span className="text-gray-600 font-semibold">$</span>
                }
                {...field}
                required
              />
            )}
          />
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.stock}
                label="Stock inicial"
                type="number"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="storage_cost"
            control={control}
            render={({ field }) => (
              <Input
                isInvalid={!!errors.storage_cost}
                label="Costo de almacenamiento (unitario)"
                type="number"
                startContent={
                  <span className="text-gray-600 font-semibold">$</span>
                }
                {...field}
                required
              />
            )}
          />
          <Controller
            name="family_id"
            control={control}
            render={({ field }) => (
              <Select label="Familia de articulos" {...field} required>
                {families.map((family) => (
                  <SelectItem key={family.id} value={family.id}>
                    {family.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          <Button
            className="py-7 px-20 ml-3 font-semibold"
            color="primary"
            type="submit"
            isLoading={isSubmitting}
          >
            Crear articulo
            <CheckCircleIcon className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateArticleForm;
