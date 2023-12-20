import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        borderBottom: '1px solid white'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label='AnhKhoaDev MERN Stack Board'
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label='Add to Google Drive'
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<BoltIcon />}
          label='Automation'
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FilterListIcon />}
          label='Filters'
          clickable
          sx={MENU_STYLES}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none'
            }
          }}
        >
          <Tooltip title='Anh Khoa 1'>
            <Avatar alt="Anh Khoa" src="https://www.oca.edu.vn/uploads/images/info/meo-trong-tieng-anh-la-gi.png" />
          </Tooltip>
          <Tooltip title='Anh Khoa 2'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </Tooltip>
          <Tooltip title='Anh Khoa 3'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/4412580/pexels-photo-4412580.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
          <Tooltip title='Anh Khoa 4'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/5308199/pexels-photo-5308199.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
          <Tooltip title='Anh Khoa 5'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/14293723/pexels-photo-14293723.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
          <Tooltip title='Anh Khoa 6'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
          <Tooltip title='Anh Khoa 6'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
          <Tooltip title='Anh Khoa 8'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
          <Tooltip title='Anh Khoa 9'>
            <Avatar alt="Anh Khoa" src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
