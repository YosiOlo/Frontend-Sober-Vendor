import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDate } from "../../utils/api";
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
import { MdOutlineArrowDropDown, MdEdit, MdDelete } from "react-icons/md";
import { TbFileExport, TbReload } from "react-icons/tb";
import { FaFileCsv } from "react-icons/fa";
import { ArrowUpward, ArrowDownward, Search } from "@mui/icons-material";

const RevenueTable = (props) => {
  const [revenue, setRevenue] = useState([]);
  const { DataRevenue } = props;
  const [tableData, setTableData] = useState(DataRevenue);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [exportOpen, setexportOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null); // Store the ID of the row to delete

  useEffect(() => {
    const apiUrl =
      "https://kuro.asrofur.me/sober/api/transaction/vendor/revenue";
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjk0NjczMTE0LCJleHAiOjE2OTQ3NTk1MTR9.vG5ae7OWAPxWdhFF91uzpDNngRHdCB4WOsTePN1cV0Q";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
        setRevenue(response.data.data); // Fixed variable name here

        console.log("ttttttttttttttttttttttttt");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getPaymentMethod = (method) => {
    if (method === "bank_transfer")
      return <p className="text-[12px]">Bank Transfer</p>;
  };

  const toggleExport = () => {
    setexportOpen(!exportOpen);
  };
  const handleSort = (property) => {
    const newOrder = orderBy === property && order === "asc" ? "desc" : "asc";
    setOrder(newOrder);
    setOrderBy(property);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setPage(0);
  };

  const sortedData = orderBy
    ? [...revenue].sort((a, b) =>
        order === "asc"
          ? a[orderBy] < b[orderBy]
            ? -1
            : 1
          : b[orderBy] < a[orderBy]
          ? -1
          : 1
      )
    : revenue;

  const filteredData = sortedData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className="mt-5 flex-wrap text-[12px]">
      <div className="p-2 flex flex-col md:flex-row justify-between">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginLeft: "auto", marginRight: "16px" }}
          InputProps={{
            endAdornment: <Search />,
          }}
        />
        <div className="action flex flex-col md:flex-row space-x-0 md:space-x-3 font-semibold text-[12px] ">
          <div className="relative">
            <button
              className="flex px-4 py-2 bg-[#36C6D3] rounded-lg"
              onClick={toggleExport}
            >
              <TbFileExport className="mr-1 mt-[2px] bg-[#36C6D3]" />
              Export <MdOutlineArrowDropDown className="bg-[#36C6D3]" />
            </button>
            {exportOpen && (
              <div className="absolute w-[100px] text-black p-2 right-0 mt-2 border border-gray-300 rounded-lg">
                <ul className="p">
                  <li className="flex p-1 font-medium items-center border-b border-gray-400 mb-2 hover:bg-[#36C6D3] rounded-lg">
                    {" "}
                    <FaFileCsv className="mr-1" /> Csv
                  </li>
                  <li className="flex p-1 font-medium items-center hover:bg-[#36C6D3] rounded-lg ">
                    {" "}
                    <FaFileCsv className="mr-1" /> Csv
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="bg-[#36C6D3] h-[2.5rem] w-full md:w-[4.5rem] rounded-lg mt-2 md:mt-0">
            <a className="flex  p-2" href="">
              {" "}
              <TbReload className=" mr-[3px] text-lg" />
              Reload
            </a>
          </button>
        </div>
      </div>

      <CardContent>
        <div className="overflow-x-auto text-[12px]">
          <TableContainer component={Paper} className="min-w-full">
            <Table aria-label="custom table" className="min-w-full">
              <TableHead className="text-black">
                <TableRow className="text-black">
                  <TableCell className="text-black ">
                    <Button onClick={() => handleSort("id")}>
                      ID
                      {orderBy === "id" ? (
                        <span>
                          {order === "desc" ? (
                            <ArrowDownward />
                          ) : (
                            <ArrowUpward />
                          )}
                        </span>
                      ) : null}
                    </Button>
                  </TableCell>

                  <TableCell>
                    <Button onClick={() => handleSort("customer")}>
                      Customer
                      {orderBy === "customer" ? (
                        <span>
                          {order === "desc" ? (
                            <ArrowDownward />
                          ) : (
                            <ArrowUpward />
                          )}
                        </span>
                      ) : null}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleSort("Amount")}>
                      Amount
                      {orderBy === "Amount" ? (
                        <span>
                          {order === "desc" ? (
                            <ArrowDownward />
                          ) : (
                            <ArrowUpward />
                          )}
                        </span>
                      ) : null}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleSort("ShippingAmount")}>
                      Shipping Amount
                      {orderBy === "ShippingAmount" ? (
                        <span>
                          {order === "desc" ? (
                            <ArrowDownward />
                          ) : (
                            <ArrowUpward />
                          )}
                        </span>
                      ) : null}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleSort("PaymentMethod")}>
                      Payment Method
                      {orderBy === "PaymentMethod" ? (
                        <span>
                          {order === "desc" ? (
                            <ArrowDownward />
                          ) : (
                            <ArrowUpward />
                          )}
                        </span>
                      ) : null}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleSort("CreatedAt")}>
                      Created At
                      {orderBy === "CreatedAt" ? (
                        <span>
                          {order === "desc" ? (
                            <ArrowDownward />
                          ) : (
                            <ArrowUpward />
                          )}
                        </span>
                      ) : null}
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((revenue) => (
                  <TableRow key={revenue.id}>
                    <TableCell className="whitespace-nowrap">
                      {revenue.id}
                    </TableCell>
                    <TableCell>{revenue.customer_order.name}</TableCell>
                    <TableCell>{revenue.amount}</TableCell>
                    <TableCell>{revenue.shipping_amount}</TableCell>
                    <TableCell>
                      {getPaymentMethod(
                        revenue?.payment_order?.payment_channel
                      )}
                    </TableCell>
                    <TableCell>
                      {formatDate(revenue.customer_order.created_at)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueTable;
