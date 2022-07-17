import { Table, TableContainer, TableHead, TableRow, TableCell, TablePagination, TableBody } from '@mui/material';
import { IClient, IServiceOrder } from 'models';
import { useEffect, useState } from 'react';
import { TypeData, TypeTable } from './table-models';
import { ClientColumns, createClientData, IClientRows } from './table-models/ClientTableModels';
import { createServiceOrderData, IServiceOrderRows, ServiceOrderColumns } from './table-models/ServiceOrderTableModel';

interface IDataTableProps {
  data: any;
  typeTable: TypeTable;
}

const dataList: any[] = [];
let columnsList: any;

export const DataTable = ({ data, typeTable }: IDataTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const switchReturn = {
    Client: (data: any[]) => {
      // data.map((client: IClient) => {
      //   const newRow: IClientRows = createClientData(client);
      //   console.log(newRow);
      //   dataList.push(newRow);
      // });
      columnsList = ClientColumns;
    },
    ServiceOrder: (data: any[]) => {
      console.log(data);
      // data.map((serviceOrder: IServiceOrder) => {
      //   const newRow: IServiceOrderRows = createServiceOrderData(serviceOrder);
      //   dataList.push(newRow);
      // });
      columnsList = ServiceOrderColumns;
    },
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  switchReturn[typeTable](data);

  return (
    <>
      <TableContainer sx={{ height: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead color="primary">
            <TableRow>
              {columnsList?.map((column: any) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={0} key={index}>
                  {columnsList?.map((column: any) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
