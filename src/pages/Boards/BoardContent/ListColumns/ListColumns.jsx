import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

import Column from './Column/Column'

function ListColumns({ columns }) {

  return (
    <Box sx={{
      backgroundColor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>

      {/* Box Column */}
      {columns?.map((column) => {
        return (
          <Column key={column._id} column={column} />
        )
      })}

      {/* Box Add new column CTA */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        backgroundColor: '#ffffff3d'
      }}>
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            paddingLeft: 2.5,
            paddingY: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
