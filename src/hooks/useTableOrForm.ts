import { useState } from "react";

export default function useTableOrForm() {
  const [ visivel, setVisivel ] = useState<'table' | 'form'>('table')
  
  const showTable = () => setVisivel('table')
  const showForm = () => setVisivel('form')

  return {
    formularioVisivel: visivel === 'form',
    tabelaVisible: visivel === 'table',
    showForm,
    showTable,
  }
}