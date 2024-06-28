import { CommonSearchParams, ErrorType } from "@/types/common";
import { type ClassValue, clsx } from "clsx";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isErrorType = (data: unknown): data is ErrorType => {
  return (
    !!data && typeof data === "object" && "code" in data && "message" in data
  );
};

export const deleteEmptyKeys = (obj: Record<string, unknown>) => {
  Object.keys(obj).forEach(
    (key) =>
      (obj[key] &&
        typeof obj[key] === "object" &&
        deleteEmptyKeys(obj[key] as Record<string, unknown>)) ||
      (obj[key] === undefined && delete obj[key])
  );
  return obj;
};

export function formatJSON(json: any) {
  let result = "";
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];
      if (typeof value === "object") {
        // Si el valor es un objeto, llamamos recursivamente a la función para formatear el objeto interno
        result += formatJSON(value);
      } else {
        // Si el valor no es un objeto, lo añadimos al resultado con el formato adecuado
        result += `- ${key}: ${value}\n`;
      }
    }
  }
  return result;
}

export function convertURLSearchParamsToCommonSearchParams(
  urlSearchParams: URLSearchParams
): CommonSearchParams {
  const params: CommonSearchParams = {};

  urlSearchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}

type InputObject = { [key: string]: string };

type OutputObject = {
  sale_price: number;
  article_id: number;
};

export function transformObject(input: InputObject): OutputObject[] {
  const output: OutputObject[] = [];

  Object.keys(input).forEach((key) => {
    const match = key.match(/^price-(\d+)$/);
    if (match) {
      const article_id = Number(match[1]);
      const sale_price = Number(input[key]);
      output.push({ sale_price, article_id });
    }
  });

  return output;
}

type Article = {
  article_id: number;
  quantity: number;
};

export function transformSale(data: any) {
  let transformedData = {
    date: new Date(),
    client_id: parseInt(data.client_id, 10),
    articles: [] as Article[],
  };

  let i = 0;
  while (
    data[`article-${i}`] !== undefined &&
    data[`quantity-${i}`] !== undefined
  ) {
    transformedData.articles.push({
      article_id: parseInt(data[`article-${i}`], 10),
      quantity: parseInt(data[`quantity-${i}`], 10),
    });
    i++;
  }

  return transformedData;
}
