import * as React from 'react';
import '../Assets/Css/LoginModal.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border:'none',
  boxShadow: 24,
  p: 4,
  '@media (max-width:1150px)':{
    width:'500px'
  },
  '@media (max-width:767px)':{
    width:'450px'
  },
  '@media (max-width:599px)':{
    width:'450px'
  },
  '@media (max-width:480px)':{
    width:'90%'
  }
};

export default function LoginModal({loginmodal,setloginmodal}) {
  const handleClose = () => setloginmodal(false);

  return (
    <div>
      <Modal disablePortal 
        open={loginmodal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          
        }}
      >
        <Box sx={style}>
          <div className="modal-content">
          <div className="heading">
          <span>Login</span>



          </div>
          <div className="form">

          <Box
         
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField 
       className='form-input' 
       fullWidth
       sx={{
        '& .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #D1CEC6', // Default border
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #D1CEC6', // Hover border
        },
      }}
 
      id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField fullWidth   


 

sx={{
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #D1CEC6', // Default border
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #D1CEC6', // Hover border
  },
}}
      className='form-input'
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

    </Box>
    <a   href="#">forgot your password</a>

    <div className="login-signup">

    <Button  className='btn'  variant='contained'> Login</Button>
<p>
New customer? Create your account</p>
</div>

          </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
