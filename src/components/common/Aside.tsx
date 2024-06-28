"use client";
import {
  ArchiveBoxIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  PresentationChartBarIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";

const Aside = () => {
  const path = usePathname();
  return (
    <>
      <h3 className="mb-14">StockMastermind</h3>
      <ul className="flex flex-col gap-3">
        <Link href={"/articles"}>
          <Button
            variant="flat"
            className={
              path === "/articles"
                ? "bg-gray-200 w-full flex justify-start text-lg"
                : "w-full flex justify-start text-lg bg-transparent"
            }
          >
            <ArchiveBoxIcon className="w-6 h-6" />
            Articles
          </Button>
        </Link>
        <Link href={"/providers"}>
          <Button
            variant="flat"
            className={
              path === "/providers"
                ? "bg-gray-200 w-full flex justify-start text-lg"
                : "w-full flex justify-start text-lg bg-transparent"
            }
          >
            <BuildingOffice2Icon className="w-6 h-6" />
            Proveedores
          </Button>
        </Link>
        <Link href={"/clients"}>
          <Button
            variant="flat"
            className={
              path === "/clients"
                ? "bg-gray-200 w-full flex justify-start text-lg"
                : "w-full flex justify-start text-lg bg-transparent"
            }
          >
            <UserGroupIcon className="w-6 h-6" />
            Clientes
          </Button>
        </Link>
        <Link href={"/sales"}>
          <Button
            variant="flat"
            className={
              path === "/sales"
                ? "bg-gray-200 w-full flex justify-start text-lg"
                : "w-full flex justify-start text-lg bg-transparent"
            }
          >
            <BanknotesIcon className="w-6 h-6" />
            Ventas
          </Button>
        </Link>
        <Link href={"/order"}>
          <Button
            variant="flat"
            className={
              path === "/orders"
                ? "bg-gray-200 w-full flex justify-start text-lg"
                : "w-full flex justify-start text-lg bg-transparent"
            }
          >
            <TruckIcon className="w-6 h-6" />
            Ordenes
          </Button>
        </Link>
        <Link href={"/demand"}>
          <Button
            variant="flat"
            className={
              path === "/demand"
                ? "bg-gray-200 w-full flex justify-start text-lg"
                : "w-full flex justify-start text-lg bg-transparent"
            }
          >
            <PresentationChartBarIcon className="w-6 h-6" />
            Demanda
          </Button>
        </Link>
      </ul>
    </>
  );
};

export default Aside;
