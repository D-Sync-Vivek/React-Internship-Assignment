import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import type Artwork from '../../types';
import { InputSwitch } from 'primereact/inputswitch';

interface ArtworkTableProps {
  artworks: Artwork[];
}

const ArtworkTable = ({ artworks }: ArtworkTableProps) => {
  const [rowsPerPage] = useState<number>(12);
  const [selectedArt, setSelectedArt] = useState<Artwork[]>([]);
  const [metaKey, setMetaKey] = useState<boolean>(false)
  const [first, setFirst] = useState(0);
  const [selectCount, setSelectCount] = useState<number>(0)

  const currentPageRows = artworks.slice(first, first + rowsPerPage);

  const isSelected = (row: Artwork) => selectedArt.some(a => a.id === row.id)

  const handleApplySelectCount = () => {
    if (!selectCount || selectCount <= 0) return;

    const unselectedOnPage = currentPageRows.filter(r => !isSelected(r));
    const toAdd = unselectedOnPage.slice(0, selectCount);


    setSelectedArt(prev => {
      const existingIds = new Set(prev.map(a => a.id));
      const newOnes = toAdd.filter(a => !existingIds.has(a.id));
      return [...prev, ...newOnes];
    });
  };


  console.log(selectedArt)


  return (

    <main className=' px-5'>
      <InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} className='hidden' />
      <div className='mb-5'>Selected: <span className='text-blue-500'>{selectedArt.length}</span> rows</div>
      <div className="mb-3 flex items-center gap-2">
        <input
          type="number"
          min={1}
          className="border px-2 py-1 w-20"
          value={selectCount || ''}
          onChange={(e) => setSelectCount(Number(e.target.value) || 0)}
        />
        <button
          type="button"
          onClick={handleApplySelectCount}
          className="px-3 py-1 border rounded"
        >
          Select N on this page
        </button>
      </div>
      <DataTable
        dataKey="id"
        value={artworks}
        rows={rowsPerPage}
        showGridlines
        lazy
        selectionMode="checkbox"
        selection={selectedArt}
        onSelectionChange={(e) => setSelectedArt(e.value)}
        metaKeySelection={metaKey}
        tableStyle={{ minWidth: '50rem' }}
        className='text-sm'
      >

        <Column selectionMode='multiple' style={{ minWidth: '30px' }} >
        </Column>
        <Column field='title' header="Title" style={{ minWidth: '150px', maxWidth: '320px' }} className='h-11 font-semibold'></Column>
        <Column field='place_of_origin' header="Place of Origin" style={{ minWidth: '120px' }} className='w-10 text-center'></Column>
        <Column field='artist_display' header="Artist" style={{ minWidth: '140px' }} className='w-75 truncate max-w-75' ></Column>
        <Column field='inscriptions' header="Incriptions" style={{ minWidth: '220px', maxWidth: '240px' }} body={(rowData) => rowData.inscriptions ?? "N/A"} className='truncate max-w-50' ></Column>
        <Column field='date_start' header="Start Date" ></Column>
        <Column field='date_end' header="End Date" ></Column>

      </DataTable>
    </main>
  )
}

export default ArtworkTable
