// src/components/client/ClientWrapper.tsx
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
        <TableColumn>Nombre</TableColumn>
        <TableColumn>CUIT</TableColumn>
      </TableHeader>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.cuit}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientWrapper;
