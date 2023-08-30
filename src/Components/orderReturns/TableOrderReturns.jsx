import React, { useState } from "react";
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

const TableOrderReturns = (props) => {
  const { DataOrderReturns } = props;
  const [tableData, setTableData] = useState(DataOrderReturns);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [exportOpen, setexportOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null); // Store the ID of the row to delete

  const toggleExport = () => {
    setexportOpen(!exportOpen);
  };

  const getStatus = (Status) => {
    if (Status === "Completed")
      return (
        <div className="card rounded-md bg-green-400 text-center text-xs font-semibold">
          {Status}
        </div>
      );
    if (Status === "Processing")
      return (
        <div className="card rounded-md bg-blue-400 text-center text-xs font-semibold">
          {Status}
        </div>
      );
    if (Status === "Pending")
      return (
        <div className="card rounded-md bg-yellow-400 text-center text-xs font-semibold">
          {Status}
        </div>
      );
    else return <div className="badge badge-ghost">{Status}</div>;
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
  const handleDelete = (rowId) => {
    setRowToDelete(rowId);
  };

  const confirmDelete = () => {
    if (rowToDelete) {
      // Update the data and remove the row with the specified ID
      const updatedData = tableData.filter((row) => row.id !== rowToDelete);
      setTableData(updatedData);
      setRowToDelete(null); // Clear the rowToDelete
    }
  };

  const sortedData = orderBy
    ? [...tableData].sort((a, b) =>
        order === "asc"
          ? a[orderBy] < b[orderBy]
            ? -1
            : 1
          : b[orderBy] < a[orderBy]
          ? -1
          : 1
      )
    : tableData;

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
    <Card className="mt-5 w-full text-[10px]">
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
          <button className="bg-[#36C6D3] h-[2.1rem] w-full md:w-[4.5rem] rounded-lg mt-2 md:mt-0">
            <a className="flex  p-2" href="">
              {" "}
              <TbReload className=" mr-[3px] text-lg" />
              Reload
            </a>
          </button>
        </div>
      </div>

      <CardContent>
        <div className="overflow-x-auto">
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
                  <TableCell className="text-black ">
                    <Button onClick={() => handleSort("OrderId")}>
                      Order Id
                      {orderBy === "OrderId" ? (
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
                    <Button onClick={() => handleSort("Customer")}>
                      Customer
                      {orderBy === "Customer" ? (
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
                    <Button onClick={() => handleSort("ProductItem")}>
                      Product Item
                      {orderBy === "ProductItem" ? (
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
                    <Button onClick={() => handleSort("Status")}>
                      Status
                      {orderBy === "Status" ? (
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
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.OrderId}</TableCell>
                    <TableCell>{row.Customer}</TableCell>
                    <TableCell>{row.ProductItem}</TableCell>
                    <TableCell>{getStatus(row.Status)}</TableCell>
                    <TableCell>{row.CreatedAt}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                          <MdEdit />
                        </button>

                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-md"
                          onClick={() => handleDelete(row.id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
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
      {rowToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[14px]">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to delete this row?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={confirmDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-black px-3 py-1 rounded-md ml-2"
                onClick={() => setRowToDelete(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TableOrderReturns;
