"use client";
import { Article } from "@/types/article";
import { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface ArticleWrapperProps {
  articles: Article[];
}

const ArticleWrapper: FC<ArticleWrapperProps> = ({ articles }) => {
  return (
    <Table className="text-black">
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>Modelo</TableColumn>
        <TableColumn>Marca</TableColumn>
        <TableColumn>Precio</TableColumn>
        <TableColumn>Stock</TableColumn>
        <TableColumn>Familia</TableColumn>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id}>
            <TableCell>{article.name || "-"}</TableCell>
            <TableCell>{article.model || "-"}</TableCell>
            <TableCell>{article.brand || "-"}</TableCell>
            <TableCell>{article.price || "-"}</TableCell>
            <TableCell>{article.stock || "-"}</TableCell>
            <TableCell>{article.family?.name || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ArticleWrapper;
