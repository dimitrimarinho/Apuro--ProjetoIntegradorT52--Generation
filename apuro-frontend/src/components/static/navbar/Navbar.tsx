import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate } from "react-router-dom";
import logoApuro from '../../../assets/logo/logo-apuro.gif'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const handleProfileMenuOpen = (event: React.ChangeEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.ChangeEvent<any>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  var botaoLogin;

  if (token === '') {
    botaoLogin = (
      <Link to='/login' className='text-decoration-none'>
        <Typography>Login</Typography>
      </Link>
    );
  }
  if (token !== '') {
    botaoLogin = (
        <Box onClick={goLogout}>
          Logout
        </Box>
    );
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/login' className='text-decoration-none'>
        <MenuItem onClick={handleMenuClose}>
          {botaoLogin}
        </MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>
        Minha conta
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Carrinho</p>
      </MenuItem>
      <Link to='/listaProduto' className='text-decoration-none'>
        <MenuItem>
          <IconButton color="inherit">
            <Badge color="secondary">
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
          <p>Produtos</p>
        </MenuItem>
      </Link>
      <Link to='/sobre-nos' className='text-decoration-none'>
        <MenuItem>
          <IconButton color="inherit">
            <Badge color="secondary">
              <InfoIcon />
            </Badge>
          </IconButton>
          <p>Sobre</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  function goLogout() {
    dispatch(addToken(''));
    toast.info("Seu usuário foi deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined
    })
    navigate('/login');
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static" className='background'>
        <Toolbar>
          <Link to='/home' className='text-decoration-none'>
            <div className={classes.sectionDesktop}>
              <img className="logoApuro" src={logoApuro} alt="Logo da Apuro" />
            </div>
          </Link>
          <Link to='/' className='text-decoration-none'>
            <div className={classes.sectionMobile}>
              <img className="logoApuro" src={logoApuro} alt="Logo da Apuro" />
            </div>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/listaProduto' className='text-decoration-none'>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to='/sobre-nos' className='text-decoration-none'>
              <IconButton color="inherit">
                <Badge color="secondary">
                  <InfoIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton color="inherit">
              <Badge color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
