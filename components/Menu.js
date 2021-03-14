import Link from 'next/link';
import { 
  fade, 
  makeStyles, 
  Button, 
  AppBar, 
  Toolbar, 
  Typography, 
  Avatar, 
  InputBase, 
  Container,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#f0f0f4',
  },
  grow: {
    flexGrow: 1,
  },
  spacing: {
    marginLeft: theme.spacing(0.3),
    marginRight: theme.spacing(0.3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  Container: {
    marginTop: 25,
  },
  AppBar: {
    background: '#000',
    boxShadow: 'none',
  },
  box: {
    background: '#000',
    paddingTop: 45,
    paddingBottom: 45,
  },
  textBox: {
    color: '#fff',
    marginBottom: 6,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

function Menu() {
  const classes = useStyles();
   
  return (
      <AppBar position="static" className={classes.AppBar}>
        <Container fixed>

          <Toolbar>
            <Avatar src='http://aomercado.com.br/storage/images/logo.png' />
            <Typography variant="h6">
            &nbsp;aomercado&nbsp;
            </Typography>

            <Link color="inherit" className={classes.spacing} href="./">Lojas&nbsp;&nbsp;</Link>
            <Link color="inherit" className={classes.spacing} href="./">Categorias&nbsp;&nbsp;</Link>
            <Link color="inherit" className={classes.spacing} href="./">Sobre&nbsp;&nbsp;</Link>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Procure um produto pelo nome..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            <div className={classes.grow} />
            
            <Button color="inherit" className={classes.spacing}>Cadastre-se</Button>&nbsp;
            <Button color="inherit" variant="outlined"><AccountCircle />&nbsp;Fazer Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Menu;