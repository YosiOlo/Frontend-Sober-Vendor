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
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbFileExport, TbReload } from 'react-icons/tb';
import { FaFileCsv } from 'react-icons/fa';
import { ArrowUpward, ArrowDownward, Search } from "@mui/icons-material";

const TableOrders = (props) => {
  const { tableData } = props;
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [exportOpen, setexportOpen] = useState(false);

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
    <Card className="mt-5 w-full">
      <div className=" p-2 flex justify-between">
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
        <div className="action flex space-x-3 font-semibold text-[12px] text-white">
          <div className="relative">
            <button
              className="flex px-4 py-2 bg-[#36C6D3] rounded-lg"
              onClick={toggleExport}
            >
              <TbFileExport className="mr-1 mt-[2px]" />
              Export <MdOutlineArrowDropDown />
            </button>
            {exportOpen && (
              <div className="absolute w-[100px] text-black p-2 right-0 mt-2 border border-gray-300 rounded-lg">
                <ul className="p">
                  <li className="flex p-1 font-medium items-center border-b border-gray-400 mb-2 hover:bg-[#36C6D3] rounded-lg"> <FaFileCsv className="mr-1"/> Csv</li>
                  <li className="flex p-1 font-medium items-center hover:bg-[#36C6D3] rounded-lg "> <FaFileCsv className="mr-1"/> Csv</li>
                </ul>
              </div>
            )}
          </div>
          <button className="bg-[#36C6D3] h-[2.1rem] w-[4.5rem] rounded-lg">
            <a className="flex  p-2" href=""> <TbReload className=" mr-[3px] text-lg"/>Reload</a>
          </button>
        </div>
      </div>

      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="custom table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Button onClick={() => handleSort("column1")}>
                    {props.column1}
                    {orderBy === "column1" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column2")}>
                    {props.column2}
                    {orderBy === "column2" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column3")}>
                    {props.column3}
                    {orderBy === "column3" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column4")}>
                    {props.column4}
                    {orderBy === "column4" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column5")}>
                    {props.column5}
                    {orderBy === "column5" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column6")}>
                    {props.column6}
                    {orderBy === "column6" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column7")}>
                    {props.column7}
                    {orderBy === "column7" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleSort("column8")}>
                    {props.column8}
                    {orderBy === "column8" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button>
                    {props.column5}
                    {orderBy === "column9" ? (
                      <span>
                        {order === "desc" ? <ArrowDownward /> : <ArrowUpward />}
                      </span>
                    ) : null}
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.column1}</TableCell>
                  <TableCell>{row.column2}</TableCell>
                  <TableCell>{row.column3}</TableCell>
                  <TableCell>{row.column4}</TableCell>
                  <TableCell>{row.column5}</TableCell>
                  <TableCell>{row.column6}</TableCell>
                  <TableCell>{row.column7}</TableCell>
                  <TableCell>{row.column8}</TableCell>
                  <TableCell>{row.column9}</TableCell>
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
      </CardContent>
    </Card>
  );
};

export default TableOrders;
