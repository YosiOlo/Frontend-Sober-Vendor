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
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown, MdEdit, MdDelete } from "react-icons/md";
import { TbFileExport, TbReload } from "react-icons/tb";
import { FaFileCsv } from "react-icons/fa";
import { ArrowUpward, ArrowDownward, Search } from "@mui/icons-material";
import axios from "axios";
import { formatDate } from "../../utils/api";

const TableProducts = () => {
  const [orderBy, setOrderBy] = useState("id");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [exportOpen, setexportOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null); // Store the ID of the row to delete
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      "https://kuro.asrofur.me/sober/api/product/vendor/list?name&limit=5&search";
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjk1Mjc4MDQ0LCJleHAiOjE2OTUzNjQ0NDR9.gTdleJdGE7IVNxnBzOvBGZGWg50yAB1pTbfOsLXF_7s";

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        setProducts(response?.data.data.rows);
        setLoading(false); // Data is loaded
        console.log("ttttttttttttttttttttttttt");
        console.log(response.data.data.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Error occurred, set loading to false
      }
    };

    fetchData();
  }, []);

  const toggleExport = () => {
    setexportOpen(!exportOpen);
  };
  const getStatus = (Status) => {
    if (Status === "published")
      return (
        <div className="card rounded-md p-1 bg-[#36c6d3] text-center text-xs font-semibold">
          Published
        </div>
      );
    else {
      return (
        <div className="card rounded-md bg-red-400 text-center text-xs font-semibold">
          Pending
        </div>
      );
    }
  };
  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = [...products].sort((a, b) => {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return order === "asc" ? valueA - valueB : valueB - valueA;
    } else if (typeof valueA === "string" && typeof valueB === "string") {
      return order === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      return 0; // Handle other data types or return 0 if no data type matches
    }
  });

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setPage(0); // Reset the page to the first page when searching
  };

  const filteredData = sortedData.filter((row) => {
    const valuesToSearch = [
      row.id.toString(),
      row.name,
      row?.price,
      row?.quantity,
      row?.sku,
      row?.order,
      formatDate(row.created_at), // Assuming formatDate returns a string
    ];

    // Check if any value contains the search term
    return valuesToSearch.some(
      (value) => value && value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const confirmDelete = async () => {
    if (rowToDelete !== null) {
      await deleteData(rowToDelete);
    }
    setRowToDelete(null); // Clear the rowToDelete
  };

  const deleteData = async (rowId) => {
    try {
      const apiUrl = `https://kuro.asrofur.me/sober/api/product/${rowId}`;
      const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYiLCJlbWFpbCI6InNvYmVyb2ZmaWNpYWxAZ21haWwuY29tIiwiaWF0IjoxNjk1Mjc4MDQ0LCJleHAiOjE2OTUzNjQ0NDR9.gTdleJdGE7IVNxnBzOvBGZGWg50yAB1pTbfOsLXF_7s";

      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      if (response.status === 200) {
        console.log("Success! Data deleted from API.");
        console.log("Response data:", response.data); // Cetak respons data
        // Data berhasil dihapus dari API, sekarang update state
        const updatedData = products.filter((row) => row.id !== rowId);
        setProducts(updatedData);
        setRowToDelete(null); // Reset rowToDelete setelah berhasil dihapus
      } else {
        console.error(
          "Failed to delete data from API. Status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error deleting data:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const handleDeleteClick = (rowId) => {
    setRowToDelete(rowId); // Set ID baris yang akan dihapus saat tombol "Delete" pada baris diklik
  };

  const headers = [
    {
      label: "id",
      key: "id",
    },
    {
      label: "Thumbnail",
      key: "thumbnail",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Price",
      key: "price",
    },
    {
      label: "Quantity",
      key: "quantity",
    },
    {
      label: "SKU",
      key: "SKU",
    },
    {
      label: "Order",
      key: "order",
    },
    {
      label: "Created At",
      key: "created_at",
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  const DataSet = [
    {
      data: paginatedData.map((data) => ({
        id: data?.id,
        thumbnail: "https://kuro.asrofur.me/sober/" + data.images,
        name: data?.name,
        price: data?.price,
        quantity: data?.quantity,
        sku: data?.sku,
        order: data?.order,
        created_at: data?.created_at,
        status: data?.status,
      })),
    },
  ];

  const csvLinkProps = {
    filename: "Products.csv",
    headers: headers,
    data: DataSet[0].data, // Access the data property from DataSet
  };
  const handleExportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(DataSet[0].data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Products.xlsx");
  };

  return (
    <Card className="mt-5 w-full">
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
        <div className="action flex text-white flex-col sm:w-[100%] text-white md:flex-row space-x-0 md:space-x-3 font-semibold text-[12px] ">
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
                  <li className=" p-1 font-medium items-center hover:bg-[#36C6D3] rounded-lg ">
                    {" "}
                    <CSVLink className="flex" {...csvLinkProps}>
                      <FaFileCsv className="mr-1" />
                      <p className="mt-[-2px]">Csv</p>
                    </CSVLink>
                  </li>
                  <li className="flex cursor-pointer p-1 font-medium items-center hover:bg-[#36C6D3] rounded-lg ">
                    <FaFileCsv className="mr-1" />
                    <p onClick={handleExportToExcel}>Excel</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="bg-[#36C6D3] flex justify-between p-2 h-[2.5rem] w-full md:w-[6rem] rounded-md mt-2 md:mt-0">
            <TbReload className="  text-lg" />
            Reload
          </button>
          <Link to="/VenCreateProduct">
            <button className="bg-[#36C6D3] flex justify-between p-2 h-[2.5rem] w-full md:w-[6rem] rounded-lg mt-2 md:mt-0">
              <TbReload className="text-lg mt-1" />
              Create
            </button>
          </Link>
        </div>
      </div>

      <CardContent className="sm:w-auto">
        <div className="overflow-x-auto">
          <TableContainer component={Paper} className="min-w-full">
            <Table aria-label="custom table" className="min-w-full">
              <TableHead className="text-black">
                <TableRow className="text-black">
                  <TableCell className="text-black ">
                    <Button onClick={() => handleSort("no")}>
                      No
                      {orderBy === "no" ? (
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
                    <Button onClick={() => handleSort("thumbnail")}>
                      Thumbnail
                      {orderBy === "thumbnail" ? (
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
                    <Button onClick={() => handleSort("name")}>
                      Name
                      {orderBy === "name" ? (
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
                    <Button onClick={() => handleSort("price")}>
                      Price
                      {orderBy === "price" ? (
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
                    <Button onClick={() => handleSort("quantity")}>
                      Quantity
                      {orderBy === "quantity" ? (
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
                    <Button onClick={() => handleSort("sku")}>
                      Sku
                      {orderBy === "sku" ? (
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
                    <Button onClick={() => handleSort("order")}>
                      Order
                      {orderBy === "order" ? (
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
                  <TableCell>
                    <Button onClick={() => handleSort("status")}>
                      Status
                      {orderBy === "status" ? (
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
                {paginatedData.map((product) => (
                  <TableRow key={product?.id}>
                    <TableCell className="whitespace-nowrap">
                      {product?.id}
                    </TableCell>
                    <TableCell>
                      <img
                        className="h-14 w-14"
                        src={"https://kuro.asrofur.me/sober/" + product.images}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{product?.name}</TableCell>
                    <TableCell>{product?.price}</TableCell>
                    <TableCell>{product?.quantity}</TableCell>
                    <TableCell>{product?.sku}</TableCell>
                    <TableCell>{product?.order}</TableCell>
                    <TableCell>{formatDate(product?.created_at)}</TableCell>
                    <TableCell>{getStatus(product?.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded-md"
                          onClick={() => handleEdit(row.id)} // Implement the handleEdit function
                        >
                          <MdEdit />
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-md"
                          onClick={() => handleDeleteClick(product.id)} // Implement the handleDelete function
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[14]">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure, you want to delete this row??</p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-md"
                onClick={confirmDelete}
              >
                delete
              </button>
              <button
                className="bg-gray-300 text-black px-3 py-1 rounded-md"
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

export default TableProducts;
