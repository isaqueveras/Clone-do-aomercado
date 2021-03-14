import { 
  Box,
  Container, 
  Grid, 
  makeStyles, 
  Paper, 
  Typography,
  Divider,
  Chip,
  Button,
  Avatar
} from '@material-ui/core';

import Image from 'next/image';
import Head from 'next/head';
import Menu from '../../components/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#f0f0f4',
  },
  Container: {
    marginTop: 50,
    marginBottom: 50,
  },
  media: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Paper: {
    boxShadow: 'none',
  },
  Box: {
    padding: 25,
  },
  Button: {
    marginBottom: 8,
  },
  Price: {
    fontSize: 24,
  }
}));

export default function Details() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Detalhes - aomercado</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      
      <body>
        <main>
          <div className={classes.root}>
            <Menu />

            <Container fixed className={classes.Container}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                  <Paper className={classes.Paper}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        src="https://http2.mlstatic.com/D_NQ_NP_968386-MLA43035187941_082020-O.webp"
                        alt="Picture of the author"
                        className={classes.media}
                        width={550}
                        height={550}
                      />
                    </div>
                    <Divider />
                    <Box className={classes.Box}>
                      <Typography variant="h5" component="h4">
                        Descrição
                      </Typography>

                      <Typography component="p">
                        Inteligente e preditivo <br/>
                        O sistema operacional avançado Android 9.0 Pie aprende seus hábitos para se adaptar à sua rotina e obter a máxima eficiência de seu equipamento. Seu dispositivo terá a autonomia necessária para reduzir o consumo de energia, ajustando automaticamente o brilho e gerenciando a bateria de maneira inteligente, para que você possa priorizar o uso de seus aplicativos usuais. <br/> <br/>
                        Experiência visual incrível <br/>
                        Assista às suas séries e filmes favoritos com a melhor definição por meio de sua tela de PLS de 6.2". Desfrute de cores brilhantes e detalhes precisos em todo o seu conteúdo. <br/> <br/>
                        O espaço que você precisa <br/>
                        Com sua memória interna de 32 GB, baixe seus aplicativos favoritos e salve todas as fotos e vídeos que você quiser! <br/> <br/>
                        Bateria superior <br/>
                        Desligue-se! Com a super bateria 4000 mAh, você terá muita mais energia para jogar, assistir séries ou trabalhar sem necessidade de recarregar seu telefone. <br/> <br/>
                        Efeto bokeh incrível <br/>
                        Suas 2 câmeras traseiras de 13 Mpx/2 Mpx lhe permitirão capturar imagens com o famoso modo retrato raso. <br/> <br/>
                        Além disso, o dispositivo tem uma câmera frontal de 8 Mpx para que possa tirar-se selfies divertidas ou fazer videochamadas. <br/> <br/>
                        Tecnologia premium <br/>
                        Maximize a sua segurança e certifique-se de que só você possa desbloquear o seu telefone. Graças ao sensor de impressões digitais, você pode ativar seu dispositivo com apenas um toque. Além disso, possui reconhecimento facial que é ativado rapidamente quando você coloca a tela na frente do seu rosto. <br/> <br/>
                      </Typography>
                    </Box>

                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper className={classes.Paper}>
                    <Box className={classes.Box}>
                      <Chip
                        size="small"
                        label="Estoque disponível"
                        style={{background: '#00a650', color: '#fff', borderRadius: 4}}
                      />
                      
                      <Typography variant="h4" component="h5" style={{ marginTop: 8, fontWeight: '600', fontFamily: 'Roboto'}}>
                        Samsung Galaxy A10s Dual Sim 32 Gb Vermelho 2 Gb Ram
                      </Typography>
                      <Typography className={classes.Price} variant="h5" component="h5" style={{ marginTop: 8, fontSize: 28, fontWeight: '300'}}>
                        <small>R$</small> 889,00
                      </Typography>
                      <Typography className={classes.Price} variant="p" component="p" style={{ fontSize: 16, color: '#00a650'}}>
                        em 3x R$ 296,33 sem juros
                      </Typography>

                      <Grid container wrap="nowrap" spacing={2} style={{ marginTop: 8, marginBottom: 8, display: 'flex', alignItems: 'center'}}>
                        <Grid item>
                          <Avatar>E</Avatar>
                        </Grid>
                        <Grid item xs>
                          <Typography>Espaço estetica e bem estar</Typography>
                          <Typography variant="p">4 vendas</Typography>
                        </Grid>
                      </Grid>
                      
                      <Button variant="contained" className={classes.Button} color="primary" disableElevation fullWidth={true} size="large">
                        Comprar agora
                      </Button>
                      <Button variant="outlined" className={classes.Button} color="primary" disableElevation fullWidth={true} size="large">
                        Adicionar ao carrinho
                      </Button>
                    </Box>

                    <Divider />
                    <Box className={classes.Box}>
                      <Typography variant="h6" style={{color: '#00a650'}}>
                        Devolução grátis.
                      </Typography>
                      <Typography variant="p">
                        Você tem 7 dias a partir da data de recebimento.
                        Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.
                      </Typography>

                    </Box>

                    <Divider />
                    
                    <Box className={classes.Box}>

                      <Chip
                        variant="outlined"
                        label="Oferta do dia"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais vendidos"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais procurado"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais procurado"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais procurado"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais procurado"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais procurado"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />
                      <Chip
                        variant="outlined"
                        label="Mais procurado"
                        style={{ marginRight: 8, marginBottom: 8 }}
                      />

                    </Box>

                    <Divider />

                    <Box className={classes.Box}>
                      <Typography variant="h6" component="p">
                          <strong>Frete grátis</strong>
                      </Typography>
                      <Typography variant="p">
                          Saiba os prazos de entrega e as formas de envio.<br/><br/>
                      </Typography>
                      <Typography variant="h6" component="p">
                        <strong>Está pronto para enviar</strong><br/>
                      </Typography>
                      <Typography variant="p">
                        Já está no centro de distribuição do Mercado Livre.<br/><br/>
                      </Typography>
                      <Typography variant="h6" component="p">
                        <strong>Cuidamos do produto até chegar</strong><br/>
                      </Typography>
                      <Typography variant="p">
                        Embalamos o produto bem protegido para que o receba em perfeito estado.<br/>
                      </Typography>
                    </Box>

                  
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>

      </body>
    </div>
  );
};