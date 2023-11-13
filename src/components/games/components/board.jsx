import React, { useState, useEffect } from 'react'
import AIshipsArray from './optionships'
import { motion } from 'framer-motion'

export const Board = (props) => {

  const gameBoard = new Array(100)
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = 0
  }

  const [board, setBoard] = useState(gameBoard)
  const [enemyBoard, setEnemyBoard] = useState(gameBoard)
  // eslint-disable-next-line no-unused-vars
  const [player, setPlayer] = useState('')
  const [shipLength, setShipLength] = useState('')
  const [angle, setAngle] = useState(0)
  const [isHorizontal, setIsHorizontal] = useState(true)
  const [info, setInfo] = useState('Battleship.')
  const [shipCount, setShipCount] = useState(null)
  const [shipsNum, setShipsNum] = useState(0)
  const [winner, setWinner] = useState(false)
  const [halt, setHalt] = useState(true)

  const OptionShips = () => {

    const angleStyle = {
      'transform': `rotate(${angle}deg)`
    }

    const flipShip = () => {

      if (angle === 0) {
        setAngle(90)
        setIsHorizontal(!isHorizontal)
      }
      else {
        setAngle(0)
        setIsHorizontal(!isHorizontal)
      }
    }


    const handleDragStart = (e) => {

      setTimeout(() => {
        if (shipsNum < 5) {
          setShipLength(parseInt(e.target.id))
        }
        else {
          return
        }
      }, 10)

    }

    const shipsArr = [
      <div id="2" key="1" className={'rounded-full border angle destroyer-preview bg-fuchsia-300 destroyer'} draggable="true" style={angleStyle} onDragStart={handleDragStart} ></div>,
      <div id="3" key="2" className={'rounded-full border angle submarine-preview bg-indigo-500 submarine'} draggable="true" style={angleStyle} onDragStart={handleDragStart} ></div>,
      <div id="4" key="3" className={'rounded-full border angle cruiser-preview bg-fuchsia-500 cruiser'} draggable="true" style={angleStyle} onDragStart={handleDragStart} ></div>,
      <div id="5" key="4" className={'rounded-full border angle battleship-preview bg-purple-500 battleship'} draggable="true" style={angleStyle} onDragStart={handleDragStart} ></div>,
      <div id="6" key="5" className={'rounded-full border angle carrier-preview bg-violet-500 carrier'} draggable="true" style={angleStyle} onDragStart={handleDragStart} ></div>
    ]

    return (
      <div className="option-container flex flex-col items-center justify-center h-[500px] mt-3 pt-4 rounded absolute top-[98px] left-[510px]">
        <div className="flex my-5">
          {
            shipsArr.map((ship) => {
              return ship
            })
          }
        </div>
        <div className="flex gap-x-2 my-2">
          <button className="border border-white hover:text-white px-5 rounded-full hover:bg-black transition-color duration-500" onClick={flipShip}>Flip</button>
          <button className="border border-white hover:text-white px-5 rounded-full hover:bg-black transition-color duration-500" onClick={handleStart}>Start</button>
        </div>
        {
          shipsNum < 5 ? <p className="text-carbon mt-4">Drag your SHIPS to the BOARD and press START!</p> : null
        }
      </div>
    )
  }

  const handleStart = () => {

    if (shipsNum < 5) {
      setInfo('Place your SHIPS on the board!')
      setHalt(true)
      return
    }

    if (winner) {
      setWinner(false)
    }

    setInfo('The BATTLE begins!')
    setHalt(false)
    setTimeout(() => setInfo('ATTACK you ENEMY\'s board!'), 5000)

    const aiBoard = enemyBoard.map(elem => elem)

    for (let i = 0; i < AIshipsArray.length; i++) {
      if (AIshipsArray[i].isHorizontal && AIshipsArray[i].randomPos > 95) {

        let aux = 95

        for (let r = 0; r < AIshipsArray[i].length; r++) {

          aiBoard[aux + r] = 2

        }
      }

      else if (AIshipsArray[i].isHorizontal) {
        for (let r = 0; r < AIshipsArray[i].length; r++) {

          aiBoard[AIshipsArray[i].randomPos + r] = 2

        }
      }

      else if (!AIshipsArray[i].isHorizontal && AIshipsArray[i].randomPos > 50) {

        let aux = AIshipsArray[i].randomPos - 50
        for (let a = 0; a < AIshipsArray[i].length; a++) {

          aiBoard[aux] = 2
          aiBoard[aux + a * 10] = 2
        }
      }
      else {
        for (let a = 0; a < AIshipsArray[i].length; a++) {

          aiBoard[AIshipsArray[i].randomPos] = 2
          aiBoard[AIshipsArray[i].randomPos + a * 10] = 2
        }
      }

    }
    setEnemyBoard(aiBoard)

    let aux = 0 //Number of blocks used by the AI
    for (let ship of aiBoard) {

      if (ship === 2) {
        aux += 1
      }
    }

    setShipCount(aux)
  }

  const AIPlay = (arr) => {

    if (!winner) {
      setPlayer('AI')

      const emptyBlocks = []
      let newArr = arr.map(elem => elem)

      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== 1 || newArr[i] !== 3) {
          emptyBlocks.push(i)
        }
      }

      let randomNumber = Math.floor(Math.random() * emptyBlocks.length)

      if (newArr[emptyBlocks[randomNumber]] === 2) {
        newArr[emptyBlocks[randomNumber]] = 3
        setInfo('AI hit one of your SHIPS!')
      }
      else if (newArr[emptyBlocks[randomNumber]] === 0) {
        newArr[emptyBlocks[randomNumber]] = 1
        setInfo('AI missed!')
      }

      setBoard(newArr)
    }

  }

  const handleClick = (elem, i) => {

    if (halt) {
      return
    }

    const playerBoard = enemyBoard.map((val, index) => { //val = 0 or 1

      if (i === index && elem === 0) {
        setInfo('You MISSED!')
        return 1
      }
      else if (i === index && elem === 2) {
        setInfo('You HIT an AI ship!')
        return 3
      }
      else {
        return val
      }

    })
    setEnemyBoard(playerBoard)

    const didWin = checkWinner()

    if (!didWin) {
      setTimeout(() => setInfo('AI IS THINKING...'), 2000)
      setHalt(true)
      setTimeout(() => AIPlay(board), 3000)
      setTimeout(() => setHalt(false), 3100)
      setTimeout(() => setInfo('YOUR TURN'), 4500)
    }
    else {
      return
    }

  }

  const checkWinner = () => {

    let hits = 0
    for (let hit of enemyBoard) {
      if (hit === 3) {
        hits += 1
      }
    }

    if (hits === shipCount - 1) { //If number of HITS equals number of Blocks used by AI, player wins
      setInfo('YOU WIN!')
      setEnemyBoard(gameBoard)
      setBoard(gameBoard)
      setWinner(true)
      setShipsNum(0)
      return true
    }
    return false
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleOnDrop = (e) => {
    setShipsNum(shipsNum + 1)

    if (shipsNum < 5) {
      const shipBoard = board.map(elem => elem)

      e.preventDefault()
      const startPosition = parseInt(e.target.id) //position of dropped place

      if (isHorizontal && startPosition > 95) {

        let aux = 95

        for (let i = 0; i < shipLength; i++) {

          shipBoard[aux + i] = 2
        }
      }
      else if (isHorizontal) {
        for (let i = 0; i < shipLength; i++) {

          shipBoard[startPosition + i] = 2

        }
      }
      else if (!isHorizontal && startPosition > 50) {

        let aux = startPosition - 50
        for (let a = 0; a < shipLength; a++) {

          shipBoard[aux] = 2
          shipBoard[aux + a * 10] = 2
        }
      }
      else {
        for (let i = 0; i < shipLength; i++) {

          shipBoard[startPosition] = 2
          shipBoard[startPosition + i * 10] = 2
        }
      }

      setBoard(shipBoard)
    }
  }

  useEffect(() => {

    if (winner) {
      setTimeout(() => {
        setInfo('Battleship.')
      }, 3000)
      setTimeout(() => {
        handleStart()
      }, 1000)
    }

  }, [winner])

  return (
    <div
      className="container"
    >
      <div className="absolute z-40 left-[1%] title my-3">
        <div className="flex flex-col justify-center items-center w-screen">
          <h1 className='font-kunika text-6xl text-white'>{info}</h1>
          <div className="board-users flex gap-x-24 justify-center">
            <h4 className='font-carbon text-2xl text-[#464648]'>Your Board</h4>
            <h4 className='font-carbon text-2xl text-[#464648]'>AI Board</h4>
          </div>
        </div>
      </div>

      <div className={`${props.player} gameboard allBoards w-[1220px] pt-[110px] gap-x-15 relative`}>

        <div className="human-board">
          {
            board.map((elem, index) => {

              if (elem === 0) {
                return (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="btn game-block-empty border p-0"
                    key={index}
                    id={index}
                    onDragOver={handleDragOver}
                    onDrop={handleOnDrop}
                  ></motion.div>
                )
              }

              else if (elem === 1) {
                return (
                  <div className="btn game-block-miss border p-0" key={index} id={index} ></div>
                )
              }
              else if (elem === 2) {
                return (
                  <div className="btn game-block-submarine border p-0" key={index} id={index} ></div>
                )
              }
              else if (elem === 3) {
                return (
                  <div className="btn game-block-hit border p-0" key={index} id={index} ></div>
                )
              }
            })
          }
          {

            props.player === 'human' ? <OptionShips /> : null
          }
        </div>

        <div className="AI-board">

          {
            enemyBoard.map((elem, index) => {

              if (elem === 0) {

                return (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="btn game-block-empty border p-0"
                    key={index}
                    id={index}
                    onClick={() => { handleClick(elem, index, props.player) }}
                    onDragOver={handleDragOver}
                    onDrop={handleOnDrop}
                  ></motion.div>
                )
              }
              else if (elem === 1) {
                return (
                  <div className="btn game-block-miss border p-0" key={index} id={index}></div>
                )
              }
              else if (elem === 2) {
                return (
                  <div className="btn game-block-empty border p-0" key={index} id={index} onClick={() => { handleClick(elem, index, props.player) }} ></div>
                )
              }
              else if (elem === 3) {
                return (
                  <div className="btn game-block-hit border p-0" key={index} id={index} ></div>
                )
              }
            })
          }
        </div>
      </div>
    </div>

  )
}