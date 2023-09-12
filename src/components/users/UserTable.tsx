import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];
// TODO-Create in base the table main and send props to config
export default function UserTable() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        density='comfortable'
        autoHeight
        rows={rows}
        columns={columns}
        sx={{ '--DataGrid-overlayHeight': '100px' }}
      />
    </div>
  );
}
