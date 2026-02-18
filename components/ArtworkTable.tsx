import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import type Artwork from '../types';

interface ArtworkTableProps {
  artworks: Artwork[];
}

const ArtworkTable = ({artworks}: ArtworkTableProps) => {
  const [rowsPerPage] = useState<number>(12); 
  return (
    <main className='py-2 px-10'>
      <DataTable
        value={artworks}
        rows={rowsPerPage}
        showGridlines
        >
        <Column selectionMode='multiple' className='w-10'></Column>
        <Column field='title' header="Title" style={{ minWidth: '150px', maxWidth: '320px' }} className='h-13 font-semibold'></Column>
        <Column field='place_of_origin' header="Place of Origin" style={{ minWidth: '120px' }} className='w-10 text-center'></Column>
        <Column field='artist_display' header="Artist" style={{ minWidth: '150px'}} className='w-80 truncate max-w-80' ></Column>
        <Column field='inscriptions' header="Incriptions" style={{ minWidth: '220px', maxWidth: '240px' }} body={(rowData) => rowData.inscriptions ?? "N/A"} className='truncate max-w-50' ></Column>
        <Column field='date_start' header="Start Date" ></Column>
        <Column field='date_end' header="End Date" ></Column>
        
      </DataTable>
    </main>
  )
}

export default ArtworkTable
