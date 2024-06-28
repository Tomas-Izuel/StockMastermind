"use client";
import { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { Provider } from "@/types/provider";
import Link from "next/link";

interface ProviderWrapperProps {
  providers: Provider[];
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ providers }) => {
  return (
    <Table className="text-black">
      <TableHeader>
        <TableColumn>Nombre</TableColumn>
        <TableColumn>CUIT</TableColumn>
        <TableColumn>Por defecto</TableColumn>
      </TableHeader>
      <TableBody>
        {providers.map((provider) => (
          <TableRow key={provider.id}>
            <TableCell>
              <Link
                className=" hover:border-b-1 border-black"
                href={`/providers/${provider.id}`}
              >
                {provider.name || "-"}
              </Link>
            </TableCell>
            <TableCell>{provider.cuit || "-"}</TableCell>
            <TableCell>
              {provider.is_default ? (
                <Chip color="success">Por defecto</Chip>
              ) : (
                "-"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProviderWrapper;
