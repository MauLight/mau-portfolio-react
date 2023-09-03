import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Block } from './components/block'
import { Patterns } from './components/patterns'
import './tictac.css'
import bg_site from '../../img/site-back.png'

function TicTac() {


  //Create state for board, current player, the result of the game, declaring a winner.
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [winner, setWinner] = useState(false)
  const [title, setTitle] = useState('Tic-Tac-Toe')
  const [gameStart, setGameStart] = useState(true)

  const chooseBlock = (block) => { //block = index of block pressed (position between 0 and 8).

    if (gameStart) {
      setGameStart(false)
      const filterBoard1 = board.filter((elem, i) => elem === 'X' && i === block)
      const filterBoard2 = board.filter((elem, i) => elem === 'O' && i === block)

      if (filterBoard1.length > 0 || filterBoard2.length > 0) {
        setGameStart(true)
        return -1
      }

      const playerBoard = board.map((val, index) => { //val = X or O chosen.
        if (index === block && val === '') {
          return 'X'
        }
        return val
      })

      setBoard(playerBoard)

      const chosenWinner = checkWinner(playerBoard, 'human')

      if (!chosenWinner && !checkTie(playerBoard)) {
        console.log('AI THINKING STUFF')
        setTimeout(() => setTitle('AI is thinking...'), 1000)
        setTimeout(() => aiChoose(playerBoard), 3000)
      }
      else {
        return -1
      }


    }
  }

  const checkWinner = (board, player) => {

    let winningPattern = false
    let veredict = false

    Patterns.forEach(pattern => {

      const possibleWinner = board[pattern[0]]
      if (possibleWinner === '') {
        return
      }

      winningPattern = true

      pattern.forEach(val => {
        if (board[val] !== possibleWinner) {
          winningPattern = false
        }
      })

      if (winningPattern) {
        veredict = true
        setTimeout(() => setWinner(true), 3000)
        if (player === 'human') {
          setTitle('You win!')
        } else {
          setTitle('AI wins!')
        }
      }

    })

    return veredict

  }

  const checkAboutToWin = (board) => {

    let auxArr = []

    Patterns.forEach((pattern) => {
      let aux = 0

      pattern.forEach((val) => {

        if (board[val] === 'X') {
          aux++
        }
        else if (board[val] === 'O') {
          aux--
        }
      })

      if (aux === 2) {
        console.log('Player almost wins!') //Notification?
        auxArr = [
          {
            value: board[pattern[0]],
            index: pattern[0]
          },
          {
            value: board[pattern[1]],
            index: pattern[1]
          },
          {
            value: board[pattern[2]],
            index: pattern[2]
          },
        ]
      }

    })

    return auxArr.filter(elem => elem.value === '')
  }

  const checkAboutToWinAi = (board) => {

    let auxArr = []

    Patterns.forEach((pattern) => {
      let aux = 0

      pattern.forEach((val) => {

        if (board[val] === 'O') {
          aux++
        }

        if (aux === 2) {
          console.log('Ai almost wins!') //Notification?
          auxArr = [
            {
              value: board[pattern[0]],
              index: pattern[0]
            },
            {
              value: board[pattern[1]],
              index: pattern[1]
            },
            {
              value: board[pattern[2]],
              index: pattern[2]
            },
          ]
        }
      })
    })

    return auxArr.filter(elem => elem.value === '')
  }

  const checkTie = (board) => {

    let veredict = false

    const checkTie = board.every((block) => block !== '' && winner === false)

    if (checkTie) {
      setTitle('It\'s a tie!')
      setWinner(true)
      veredict = true
    }

    return veredict

  }


  const aiChoose = (arr) => {

    const emptySpots = []
    let newArr = arr.map(elem => elem)

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === '') {
        emptySpots.push(i)
      }
    }

    const aiAboutToWin = checkAboutToWinAi(newArr)

    if (aiAboutToWin.length > 0) {
      const move = parseInt(aiAboutToWin[0].index)
      newArr[move] = 'O'
    }

    const aboutToWin = checkAboutToWin(newArr)

    if (aboutToWin.length > 0) {
      const move = parseInt(aboutToWin[0].index)
      newArr[move] = 'O'
    }
    else {
      let randomNumber = Math.floor(Math.random() * emptySpots.length)
      newArr[emptySpots[randomNumber]] = 'O'
    }

    setBoard(newArr)

    if (!checkWinner(newArr, 'AI') && !checkTie(newArr)) {
      setGameStart(true)
      setTitle('Your turn!')
    }
  }

  useEffect(() => {
    if (winner) {
      setTimeout(() => setTitle('Tic-Tac-Toe'), 1000)
      setBoard(['', '', '', '', '', '', '', '', ''])
      setWinner(false)
      setGameStart(true)

    }
  }, [winner])

  return (
    <div
      id='tictac'
      className="h-[500px] sm:h-[700px] border-y-2 relative"
      style={{ backgroundImage: `url(${bg_site})` }}>
      <div className="w-[100vw] box-border overflow-hidden h-[500px] sm:h-[700px] absolute z-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-95"></div>
      <div className="Game absolute z-0 left-[21%] min-[500px]:left-[20%] md:left-[15%] top-[15%]">
        <div className="min-[200px]:max-md:flex-col flex xl:gap-x-[200px]">
          <div className='board w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] xl:w-[500px] xl:h-[500px] bg-black border border-black flex flex-col justify-center items-center rounded-md mr-20'>

            <div className='flex flex-row flex-[33%] bg-black w-[200px] sm:w-[350px] xl:w-[500px] rounded-md'>
              <Block val={board[0]} chooseBlock={() => { chooseBlock(0) }} />
              <Block val={board[1]} chooseBlock={() => { chooseBlock(1) }} />
              <Block val={board[2]} chooseBlock={() => { chooseBlock(2) }} />
            </div>
            <div className='flex flex-row flex-[33%] bg-black w-[200px] sm:w-[350px] xl:w-[500px] rounded-md'>
              <Block val={board[3]} chooseBlock={() => { chooseBlock(3) }} />
              <Block val={board[4]} chooseBlock={() => { chooseBlock(4) }} />
              <Block val={board[5]} chooseBlock={() => { chooseBlock(5) }} />
            </div>
            <div className='flex flex-row flex-[33%] bg-black w-[200px] sm:w-[350px] xl:w-[500px] rounded-md'>
              <Block val={board[6]} chooseBlock={() => { chooseBlock(6) }} />
              <Block val={board[7]} chooseBlock={() => { chooseBlock(7) }} />
              <Block val={board[8]} chooseBlock={() => { chooseBlock(8) }} />
            </div>

          </div>
          <div className='board flex flex-col min-[200px]:max-lg:mt-10 w-screen md:w-[500px] md:mt-[200px]'>
            <h1 className='font-kunika text-5xl md:text-7xl text-black'>{title}</h1>

            <h1 className='font-carbon text-md md:text-2xl'>

              <TypeAnimation sequence={[
                'Start new game by pressing a block_', 3000,
                'Don\'t let the machine beat you!_', 3000,
                'Will you let AI replace you?_', 3000,
                'Is this a matrix style scenario?_', 3000,
                'I am watching you_', 3000,
                'You can\'t defeat me!_', 3000
              ]}
              speed={70}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />

            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicTac
