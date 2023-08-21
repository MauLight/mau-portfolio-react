/* eslint-disable no-undef */
import React, { useState } from 'react'
import { useNotes } from '../hooks/useNotes'

export const Notes = () => {

  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])

  const notes = useNotes(BACKEND_URL)

  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }

  return (
    <div className="ml-5">
      <h1 className="text-5xl">
        {`Hello Mau! Seems you have farted ${counter} times!`}
      </h1>
      <div className="flex items-end justify-end">
        <button className="rounded border border-solid mt-2 px-5 py-2" onClick={handleClick}>Fart!</button>
      </div>
      <h2>{`${notes.length} notes in server ${BACKEND_URL}`}</h2>
      <ul>
        {
          notes.map(elem => (
            <li key={elem.id}>{elem.content}</li>
          ))
        }
      </ul>
    </div>
  )
}
