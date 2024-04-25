import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface ICol {
  id: string;
  playerImage: string;
  name: string;
  price: number;
  ownership: number;
  totalPoints: number;
}

export const columns: ColumnDef<ICol>[] = [
  {
    accessorKey: 'playerImage',
    header: 'playerImage',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'ownership',
    header: 'Ownership',
  },
  {
    accessorKey: 'totalPoints',
    header: 'Total Points',
  },
];
