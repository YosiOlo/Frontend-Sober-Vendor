import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
  TextField,
} from "@mui/material";
import axios from "axios";
import { formatDate } from "../../utils/api";
import { Link } from "react-router-dom";

const TableOrders = () => {
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const [transactions, setTransactions] = useState([]);
  const [orderByCreatedAt, setOrderByCreatedAt] = useState("desc"); // Tambah state ini
  // ...

  useEffect(() => {
    const apiUrl =
      "https://kuro.asrofur.me/sober/api/transaction/vendor?limit=30";
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjk1Mjc4MDQ0LCJleHAiOjE2OTUzNjQ0NDR9.gTdleJdGE7IVNxnBzOvBGZGWg50yAB1pTbfOsLXF_7s";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        setTransactions(response?.data.data.rows);
        // console.log("ttttttttttttttttttttttttt");
        // console.log(response.data.data.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const sortedData = [...transactions].sort((a, b) => {
    if (orderBy === "created_at") {
      // Jika sedang mengurutkan berdasarkan "created_at"
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return orderByCreatedAt === "asc" ? dateA - dateB : dateB - dateA;
    }

    const valueA = a[orderBy];
    const valueB = b[orderBy];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return order === "asc" ? valueA - valueB : valueB - valueA;
    } else if (typeof valueA === "string" && typeof valueB === "string") {
      return order === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      return 0;
    }
  });

  const getPaymentStatus = (PaymentStatus) => {
    if (PaymentStatus === "completed")
      return (
        <div className="card rounded-md bg-green-400 text-center text-xs font-semibold">
          Completed
        </div>
      );
    if (PaymentStatus === "pending")
      return (
        <div className="card rounded-md bg-yellow-400 text-center text-xs font-semibold">
          Pending
        </div>
      );
    else return <div className="badge badge-ghost">{PaymentStatus}</div>;
  };

  const getStatus = (Status) => {
    if (Status === "completed")
      return (
        <div className="card rounded-md bg-green-400 text-center text-xs font-semibold">
          {Status}
        </div>
      );
    if (Status === "processing")
      return (
        <div className="card rounded-md bg-blue-400 text-center text-xs font-semibold">
          {Status}
        </div>
      );
    if (Status === "pending")
      return (
        <div className="card rounded-md bg-yellow-400 text-center text-xs font-semibold">
          {Status}
        </div>
      );
  };

  const getPaymentMethod = (method) => {
    if (method === "bank_transfer")
      return <p className="text-[12px]">Bank Transfer</p>;
    if (method === "virtual_account")
      return <p className="text-[12px]">Virtual Account</p>;
    else return <p className="text-[12px]">{method}</p>;
  };

  return (
    <div>

    <Card className="mt-5 w-full">
      <CardContent className="sm:w-auto">
        <div className="overflow-x-auto">
          <TableContainer component={Paper} className="min-w-full">
            <Table aria-label="custom table" className="min-w-full">
              <TableHead className="text-black">
                <TableRow className="text-black font-semibold">
                  <TableCell className="text-black ">ID</TableCell>
                  <TableCell>CREATED AT</TableCell>
                  <TableCell>CUSTOMER</TableCell>
                  <TableCell>PAYMENT</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>TOTAL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData.slice(0,5).map((transaction) => (
                    <TableRow key={transaction?.id}>
                    <TableCell className="text-blue-500">
                      {transaction?.code}
                    </TableCell>
                    <TableCell>
                      {formatDate(transaction?.payment_order?.created_at)}
                    </TableCell>
                    <TableCell className="text-blue-500 font-bold">{transaction?.order_addresses?.name}</TableCell>
                   
                    <TableCell>
                      {getPaymentStatus(transaction?.payment_order?.status)}
                    </TableCell>
                    <TableCell>{getStatus(transaction?.status)}</TableCell>
                    <TableCell>{transaction?.sub_total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
      <div className="p-4">
        
    <Link className="text-blue-400 font-semibold" to={"/venOrders"}>View Full Orders
</Link>
      </div>
    </Card>
                </div>
  );
};

export default TableOrders;
