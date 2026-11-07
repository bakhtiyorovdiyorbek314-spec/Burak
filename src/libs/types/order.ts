import { ObjectId } from "mongoose";
import OrderItemModel from "../../schema/OrderItem.model";
import { OrderStatus } from "../enums/order.enum";

export interface OrderItem {
  _id: ObjectId;
  itemQuantity: number;
  itemPrice: number;
  productId: ObjectId;
  orderId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: ObjectId;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  membertId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  productId: ObjectId;
  orderId?: ObjectId;
}
