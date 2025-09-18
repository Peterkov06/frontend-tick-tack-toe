import { createContext, useContext, useEffect, useState } from 'react'
import Button from './component/Button'

export type fieldContextModel = 
{
  fieldData: (boolean | null)[][],
}

export const fieldContext = createContext<fieldContextModel>({fieldData: []})

function App() {
  const [field, setField] = useState<(boolean | null)[][]>([])

  useEffect(() => {
    let gameBoard: (boolean | null)[][] = new Array(3).fill(new Array(3).fill(null))
    setField(gameBoard);
  }, [])

  function setButton(x: number, y: number, val)
  {
    const nextField = field.map((row, fYI) =>
    {
      row.map((fx, fXI) => {
        if (fXI === x && fYI === y)
        {

        }
      })
    }
    )
    setField()
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
