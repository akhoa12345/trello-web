import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { isEmpty } from 'lodash'

import AppBar from '~/components/AppBar/AppBar'
import BoardBar from '~/pages/Boards/BoardBar/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent/BoardContent'
// import { mockData } from '~/apis/mock-data'
import { fetchBoardDetailAPI, createNewColumnAPI, createNewCardAPI } from '~/apis'
import { generatePlaceholderCard } from '~/utils/formatters'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    //  Tạm thời fix cứng boardId
    const boardId = '65bfafeceb5a86f96d9ece21'
    // Call API
    fetchBoardDetailAPI(boardId)
      .then((board) => {
        // Khi f5 trang web thì cần xử lí vấn đề kéo thả vào 1 column rỗng (Nhớ lại video 37.2)
        board.columns.forEach(column => {
          if (isEmpty(column.cards)) {
            column.cards = [generatePlaceholderCard(column)]
            column.cardOrderIds = [generatePlaceholderCard(column)._id]
          }
        })
        setBoard(board)
      })
  }, [])

  // Func này có nhiệm vụ gọi API tạo mới Column và làm lại dữ liệu State Board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    // Khi tạo Column mới thì nó sẽ chưa có card, cần xử lí vấn đề kéo thả vào 1 column rỗng
    // (Nhớ lại video 37.2)
    createdColumn.cards = [generatePlaceholderCard(createNewColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createNewColumn)._id]

    // Cập nhật state board
    // Phía Front-end chúng ta phải tự làm đúng lại state data board (thay vì phải gọi lại API fetchBoardDetailAPI)
    // Lưu ý: cách làm này phụ thuộc vào tùy lựa chọn và đặc thù dự án, có nơi thì BE sẽ hỗ trợ trả về luôn
    // toàn bộ Board dù đây có là API tạo Column hay Card đi chăng nữa. => Lúc này FE sẽ nhàn hơn.
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    setBoard(newBoard)
  }

  // Func này có nhiệm vụ gọi API tạo mới Card và làm lại dữ liệu State Board
  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })

    // Cập nhật state board
    // Phía Front-end chúng ta phải tự làm đúng lại state data board (thay vì phải gọi lại API fetchBoardDetailAPI)
    // Lưu ý: cách làm này phụ thuộc vào tùy lựa chọn và đặc thù dự án, có nơi thì BE sẽ hỗ trợ trả về luôn
    // toàn bộ Board dù đây có là API tạo Column hay Card đi chăng nữa. => Lúc này FE sẽ nhàn hơn.
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }
    setBoard(newBoard)
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
