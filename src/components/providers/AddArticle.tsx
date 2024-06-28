"use client";
import { transformObject } from "@/lib/utils";
import { Article } from "@/types/article";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface AddArticleProps {
  articles: Article[];
  id: string;
}

const AddArticle: FC<AddArticleProps> = ({ articles, id }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const transformed = transformObject(data);
    const response = await fetch(`/api/provider/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformed),
    });

    if (!response.ok) {
      toast.error("Error al crear el proveedor");
      return;
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
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-8 flex-wrap mt-8"
      >
        {articles.map((article) => (
          <article key={article.id} className="w-80">
            <p>{article.name}</p>
            <Controller
              name={`price-${article.id}`}
              control={control}
              render={({ field }) => (
                <Input
                  label={"Precio del articulo"}
                  startContent={
                    <span className="text-gray-600 font-semibold">$</span>
                  }
                  type="number"
                  {...field}
                  required
                />
              )}
            />
          </article>
        ))}
        <Button
          isLoading={isSubmitting}
          type="submit"
          className=" w-80 mt-6 py-7"
          color="primary"
        >
          Guardar
        </Button>
      </form>
    </>
  );
};

export default AddArticle;
