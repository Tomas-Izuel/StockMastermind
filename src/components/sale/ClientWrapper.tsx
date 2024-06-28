"use client";
import { Client } from "@/types/client";
import { FC, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  CircularProgress,
} from "@nextui-org/react";
import { Sale } from "@/types/sale";
import { Article } from "@/types/article";
import { format } from "date-fns";

interface SaleWrapperProps {
  sales: Sale[];
  clients: Client[];
  articles: Article[];
}

const SaleWrapper: FC<SaleWrapperProps> = ({ sales, clients }) => {
  const [page, setPage] = useState(1);
  const [salesInPage, setSalesInPage] = useState(
    sales.reverse().slice((page - 1) * 6, page * 6)
  );
  console.log(sales);
  return (
    <>
      <Table className="text-black">
        <TableHeader>
          <TableColumn>Cliente</TableColumn>
          <TableColumn>Cantidad de articulos</TableColumn>
          <TableColumn>Total ($)</TableColumn>
          <TableColumn>Fecha</TableColumn>
          <TableColumn className="flex justify-center items-center">
            Calificación(reseña)
          </TableColumn>
        </TableHeader>
        <TableBody>
          {salesInPage.map((sale) => (
            <TableRow key={sale.id}>
              <TableCell>
                {clients.find((client) => (client.cuit || 1) === sale.client_id)
                  ?.name || "Juan Gomez"}
              </TableCell>
              <TableCell>
                {sale.sale_articles.reduce(
                  (acc, saleArticle) => acc + saleArticle.quantity,
                  0
                )}{" "}
                Articulos
              </TableCell>
              <TableCell>
                {sale.sale_articles.reduce(
                  (acc, saleArticle) =>
                    acc + saleArticle.quantity * saleArticle.price,
                  0
                )}
              </TableCell>
              <TableCell>{format(sale.date, "dd/MM/yyyy")}</TableCell>
              <TableCell className="flex justify-center items-center">
                <CircularProgress
                  size="sm"
                  value={sale.calification || 80}
                  color="warning"
                  showValueLabel={true}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        total={Math.ceil(sales.length / 6)}
        initialPage={1}
        onChange={(page) => {
          setPage(page);
          setSalesInPage(sales.slice((page - 1) * 6, page * 6));
        }}
      />
    </>
  );
};

export default SaleWrapper;
