'use client'
import { Article } from "@/types/article"
import { ChartBarIcon } from "@heroicons/react/24/outline"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { FC, useState } from "react"
import CalculateDemandForm from "./DemandForm"

interface DemandHeaderProps {
    articles:Article[]
}

const DemandHeader:FC<DemandHeaderProps> = ({
    articles
}) => {
    const [isOpen, setOpen] = useState(false)

    const onOpenChange = () => setOpen(!isOpen)
    return (
        <><header className="flex justify-between items-center">
            <h1>Demanda general</h1>

            <Button color="primary" onClick={onOpenChange}>
                <ChartBarIcon className="w-6 h-6" /> Calcular demanda
            </Button>
        </header><Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Calcular demanda para un articulo</ModalHeader>
                            <ModalBody>
                                <CalculateDemandForm articles={articles} />
                            </ModalBody>
                           
                        </>
                    )}
                </ModalContent>
            </Modal></>
    )
}

export default DemandHeader