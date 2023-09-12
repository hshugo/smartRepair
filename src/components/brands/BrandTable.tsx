import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'aaa', col2: 'weewer' },
  { id: 2, col1: 'bbb', col2: 'is asdssad' },
  { id: 3, col1: 'ccc', col2: 'is wwwwww' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function BrandTable() {
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
