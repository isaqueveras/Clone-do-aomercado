import Head from 'next/head';
import Link from 'next/link';
import Menu from '../components/Menu';

import { 
  makeStyles, 
  Button, 
  Typography, 
  Container, 
  Box,
  Grid,
  CardContent,
  Card,
  CardMedia,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    background: '#f0f0f4',
    border: 'none',
  },
  spacing: {
    marginLeft: theme.spacing(0.3),
    marginRight: theme.spacing(0.3),
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
    paddingTop: 65,
    paddingBottom: 65,
  },
  textBox: {
    color: '#fff',
    marginBottom: 6,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  CardContent: {
    paddingLeft: 0,
    marginLeft: 0,
  }
}));

export default function Home() {
  const classes = useStyles();
 
  return (
    <div>
      <Head>
        <title>Interface aomercado</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main>
        <div className={classes.root}>
          <Menu />

          <Box className={classes.box}>
            <Container fixed color="primary">
              <Typography variant="h4" className={classes.textBox} component="h1">
                A maior vitrine dos pequenos <br/> lojista do Ceará está aqui!
              </Typography>
              <Typography className={classes.textBox}>
                As melhores promoções das lojas do Ceará está aqui! <br/><br/>
                <Button color="inherit" variant="outlined">Criar minha conta</Button>
              </Typography>
            </Container>
          </Box>

          <Container fixed color="primary" className={classes.Container}>
            <Typography variant="h6">
              Ultimos produtos <br/>
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      <Link href="/details">
                        Designer com renna 
                      </Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root} variant="outlined">
                  <CardMedia
                    className={classes.media}
                    image="http://aomercado.com.br/storage/images/image/1606351760.png"
                    title="Paella dish"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Espaço estetica e bem estar 
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Designer com renna 
                    </Typography>
                    <Typography variant="body2" component="p">
                      Remoção dos cravos abertos e fechados, nutrição , renovação celular, aparelho de alta frequência. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              
            </Grid>
          </Container>
        
        </div>
      </main>
    </div>
  )
}
