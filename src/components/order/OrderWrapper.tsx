"use client";
import { Order } from "@/types/order";
import { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface OrderWrapperProps {
  orders: Order[];
}

const OrderWrapper: FC<OrderWrapperProps> = ({ orders }) => {
  return (
    <Table className="text-black">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Cantidad</TableColumn>
        <TableColumn>ID del Artículo</TableColumn>
        <TableColumn>ID del Proveedor</TableColumn>
        <TableColumn>Subtotal</TableColumn>
        <TableColumn>Total</TableColumn>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.article_id}</TableCell>
            <TableCell>{order.provider_id}</TableCell>
            <TableCell>{order.subtotal}</TableCell>
            <TableCell>{order.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderWrapper;
