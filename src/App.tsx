import { createContext, useContext, useEffect, useState } from 'react'
import Button from './component/Button'

export type fieldContextModel = 
{
  fieldData: (boolean | null)[][],
  setButton: () => void,
}

export const fieldContext = createContext<fieldContextModel>({fieldData: []})

function App() {
  const [field, setField] = useState<(boolean | null)[][]>([])

  useEffect(() => {
    let gameBoard: (boolean | null)[][] = new Array(3).fill(new Array(3).fill(null))
    setField(gameBoard);
  }, [])

  function setButton(x: number, y: number, val: boolean | null)
  {
    const nextField = field.map((row, fYI) => row.map((fx, fXI) => (fXI === x && fYI === y ? fx = val : fx)));
    setField(nextField);
  }
  
  return (
    <div className='fieldGrid'>
      <fieldContext.Provider value={{fieldData: field}}>
        {
          field.map((y, yI) => y.map((x, xI) => <Button x={xI} y={yI}></Button>))
        }
      </fieldContext.Provider>
    </div>
  )
}

export default App
