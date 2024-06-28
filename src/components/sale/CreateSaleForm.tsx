"use client";
import { transformSale } from "@/lib/utils";
import { Article } from "@/types/article";
import { Client } from "@/types/client";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface CreateSaleFormProps {
  client: Client[];
  articles: Article[];
}

const CreateSaleForm: FC<CreateSaleFormProps> = ({ client, articles }) => {
  const [articlesCount, setArticlesCount] = useState(1);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const transformed = {
      ...transformSale(data),
      date: new Date(),
    };

    const completed = {
      ...transformed,
      articles: transformed.articles.map((article) => ({
        ...article,
        price: articles.find((a) => a.id === article.article_id)?.price || 0,
      })),
    };
    const response = await fetch("/api/sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completed),
    });

    if (!response.ok) {
      toast.error("Error al crear la venta");
      return;
    }
    toast.success("Venta registrada correctamente");
    setTimeout(() => {
      push("/sales");
    }, 2000);
  };
  return (
    <>
      <Toaster />
      <form
        className="mt-4 flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Cliente</h3>
        <Controller
          name="client_id"
          control={control}
          render={({ field }) => (
            <Select label="Seleccione un cliente" {...field} required>
              {client.map((single_client) => (
                <SelectItem
                  key={single_client.cuit || single_client.id || 1}
                  value={single_client.cuit || single_client.id || 1}
                >
                  {single_client.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <div className="flex justify-between items-center">
          <h3>Articulos</h3>
          <Button
            isIconOnly
            onClick={() => setArticlesCount(articlesCount + 1)}
          >
            <PlusCircleIcon className="w-6 h-6" />
          </Button>
        </div>
        <section className="flex flex-col gap-5">
          {Array.from({ length: articlesCount }).map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-10"
            >
              <Controller
                name={`article-${index}`}
                control={control}
                render={({ field }) => (
                  <Select label="Seleccione un articulo" {...field} required>
                    {articles.map((article) => (
                      <SelectItem key={article.id} value={article.id}>
                        {article.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
              <Controller
                name={`quantity-${index}`}
                control={control}
                render={({ field }) => (
                  <Input
                    isInvalid={!!errors.storage_cost}
                    label="Cantidad"
                    type="number"
                    {...field}
                    required
                  />
                )}
              />
            </div>
          ))}
        </section>

        <div className="flex w-full justify-end items-center">
          <Button
            className="py-7 px-20 ml-3 font-semibold"
            color="primary"
            type="submit"
            isLoading={isSubmitting}
          >
            Registrar venta
            <CheckCircleIcon className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateSaleForm;
