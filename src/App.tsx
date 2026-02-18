import './App.css'
import { fetchData } from './api/api';
import { useEffect, useState } from 'react';
import ArtworkTable from '../components/ArtworkTable'
import type Artwork from '../types'
import Footer from '../components/Footer'


function App() {
  const [page, setPage] = useState<number>(1);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData(page)
      setArtworks(result.data);
      setTotalPages(result.totalRecords);
    }

    loadData();
  }, [page])


  return (
    <main className="py-3 px-10">
       <ArtworkTable artworks={artworks} /> 
       <Footer currentPage={page} onPageChange={(newPage: number) => setPage(newPage)} totalPageRecords={totalPages}/>
    </main>
  )
}

export default App
