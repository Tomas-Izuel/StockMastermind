"use client";

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { FC, useState } from 'react';

interface Order {
  id: number;
  quantity: number;
  article_id: number;
  provider_id: number;
  subtotal: number;
  total: number;
  status_id: number;
}

interface OrderWrapperProps {
  orders: Order[];
}

const OrderWrapper: FC<OrderWrapperProps> = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);

  const toggleOrderStatus = async (orderId: number) => {
    setOrderList((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, status_id: order.status_id === 1 ? 2 : 1 }
          : order
      )
    );

    const orderToUpdate = orderList.find((order) => order.id === orderId);
    if (orderToUpdate) {
      await updateStock(orderToUpdate.article_id, orderToUpdate.quantity, orderToUpdate.id);
    }
  };

  const updateStock = async (articleId: number, quantity: number, order_id: number) => {
    try {
      const response = await fetch('/api/order',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ article_id: articleId, quantity, order_id }),
      })

      if (!response.ok) {
        throw new Error('Failed to update stock');
      }
      console.log('Stock updated successfully');
    } catch (error) {
      console.error('Error updating stock:');
    }
  };


  return (
    <Table className="text-black">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>Cantidad</TableColumn>
        <TableColumn>ID del Artículo</TableColumn>
        <TableColumn>ID del Proveedor</TableColumn>
        <TableColumn>Subtotal</TableColumn>
        <TableColumn>Total</TableColumn>
        <TableColumn>Estado</TableColumn>
        <TableColumn>Acciones</TableColumn>
      </TableHeader>
      <TableBody>
        {orderList.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.quantity}</TableCell>
            <TableCell>{order.article_id}</TableCell>
            <TableCell>{order.provider_id}</TableCell>
            <TableCell>{order.subtotal}</TableCell>
            <TableCell>{order.total}</TableCell>
            <TableCell>{order.status_id === 1 ? 'Creada' : 'Recibida'}</TableCell>
            {order.status_id === 1 ? <TableCell>
              <button
                style={{
                  backgroundColor: '#007bff',
                  border: 'none',
                  color: 'white',
                  padding: '10px 20px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '16px',
                  margin: '4px 2px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transitionDuration: '0.4s'
                }}
                onClick={() => toggleOrderStatus(order.id)}
                onMouseOver={(e) => {
                  (e.currentTarget.style.backgroundColor = 'white'),
                    (e.currentTarget.style.color = 'black'),
                    (e.currentTarget.style.border = '2px solid #007bff');
                }}
                onMouseOut={(e) => {
                  (e.currentTarget.style.backgroundColor = '#007bff'),
                    (e.currentTarget.style.color = 'white'),
                    (e.currentTarget.style.border = 'none');
                }}
              >
                Cambiar Estado
              </button>
            </TableCell> : <TableCell>Recibida</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderWrapper;