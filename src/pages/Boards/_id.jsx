import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'

import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
// import { mockData } from '~/apis/mock-data'
import { fetchBoardDetailAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'

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
  }, [])

  // Func này có nhiệm vụ gọi API tạo mới Column và làm lại dữ liệu State Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })
    console.log('createdColumn: ', createdColumn)

    // Cập nhật state board
  }

  // Func này có nhiệm vụ gọi API tạo mới Card và làm lại dữ liệu State Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })
    console.log('createdCard: ', createdCard)

    // Cập nhật state board
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
      />
    </Container>
  )
}

export default Board
