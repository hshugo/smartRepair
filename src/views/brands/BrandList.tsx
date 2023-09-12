import { Button } from '@mui/material';
import BrandTable from 'components/brands/BrandTable';

/** TODO - Change Button for functionality Router */
export default function BrandList() {
  return (
    <>
      <div>Brands</div>
      <BrandTable />
      <Button href='/admin/brand/edit' variant='contained' sx={{ width: '200px' }}>
        Edit Brand
      </Button>
    </>
  );
}
