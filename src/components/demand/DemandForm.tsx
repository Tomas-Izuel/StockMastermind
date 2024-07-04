// src/components/client/CreateClientForm.tsx
"use client";
import { CreateClientSchema } from "@/schemas/clients.schema";
import { DemandCalculatedSchema } from "@/schemas/demand.schema";
import { Article } from "@/types/article";
import { DemandCalculated } from "@/types/demand";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface CreateClientFormProps {
    articles: Article[];
}

const CalculateDemandForm: FC<CreateClientFormProps> = ({
    articles
}) => {

    const [demand, setResponse] = useState<null | DemandCalculated>(null)
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/demand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const dataResponse = await response.json();

      console.log(dataResponse)
  
      setResponse(dataResponse);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <>
      {!demand ? <form
        className=" flex flex-col gap-6 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
                name="periods"
                control={control}
                render={({ field }) => (
                  <Select label="Periodos a calcular (meses)" {...field} required>
                    <SelectItem value="1" key={"1"}>1</SelectItem>
                    <SelectItem value="2" key={"2"}>2</SelectItem>
                    <SelectItem value="3" key={"3"}>3</SelectItem>
                    <SelectItem value="4" key={"4"}>4</SelectItem>
                    <SelectItem value="5" key={"5"}>5</SelectItem>
                    <SelectItem value="6" key={"6"}>6</SelectItem>
                  </Select>
                )}
              />
       <Controller
                name="article_id"
                control={control}
                render={({ field }) => (
                  <Select label="Articulo" {...field} required>
                    {articles.map((article) => (
                      <SelectItem key={article.id} value={article.id}>
                        {article.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
        <Button
          className="py-7 px-20 font-semibold"
          color="primary"
          type="submit"
          isLoading={isSubmitting}
        >
          Calcular demanda
          <CheckCircleIcon className="w-6 h-6" />
        </Button>
      </form> : <div>
        <h3>Demanda calculada</h3>
        <p>Mejor metodo: {demand.bestMethod}</p>
        <p>Demanda: {demand.demand_predicted}</p>
        <p>Maximo stock: {demand.max_stock}</p>
        <p>Punto de pedido: {demand.request_point}</p>
        <p>Lote optimo: {demand.lot_optimum}</p>
        <p>Stock de seguridad: {demand.security_stock}</p>
        <p>Error promedio: {demand.errors.MeanAbsoluteDeviation}</p>
        <p>Error cuadratico medio: {demand.errors.MeanSquaredError}</p>
        </div>}
    </>
  );
};

export default CalculateDemandForm;
