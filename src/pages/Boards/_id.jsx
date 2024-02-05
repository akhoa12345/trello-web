import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'

import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
import { fetchBoardDetailAPI } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    //  Tạm thời fix cứng boardId
    const boardId = '65bfafeceb5a86f96d9ece21'
    // Call API
    fetchBoardDetailAPI(boardId)
      .then((board) => {
        setBoard(board)
      })
    // console.log('board: ', board)
  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  )
}

export default Board
