"use client";
import { Client } from "@/types/client";
import { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

interface ClientWrapperProps {
  clients: Client[];
}

const ClientWrapper: FC<ClientWrapperProps> = ({ clients }) => {
  return (
    <Table className="text-black">
      <TableHeader>
        <TableColumn>CUIT</TableColumn>
        <TableColumn>Nombre</TableColumn>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.cuit}>
            <TableCell>{client.cuit || "-"}</TableCell>
            <TableCell>{client.name || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientWrapper;
