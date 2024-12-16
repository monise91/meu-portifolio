import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import capaMo from "../../assets/capaMo.jpg";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../componentes/StyledButton/StyledButton";
import { AnimatedBackground } from "../AnimatedBackground";
import "./Home.css";

const Home = () => {
    return (
        <section id="home" className="styled-hero">
            <div className="background-animation">
                <AnimatedBackground />
            </div>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={5}>
                        <div className="image-container">
                            <img src={capaMo} alt="Capa Monise" className="styled-img" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <div className="text-container">
                            <Typography className="fade-in" variant="h1" textAlign="center" pb={2}>
                                Sites e Sistemas
                            </Typography>
                            <Typography className="fade-in delay-1" variant="h4" textAlign="center">
                                Transformo suas <span className="highlight-text">ideias</span> em{" "}
                                <span className="highlight-text">realidade!</span>
                            </Typography>
                            <Typography className="fade-in delay-2" variant="h5" textAlign="center">
                                Crie seu site e sistema personalizado e conquiste mais{" "}
                                <span className="highlight-text">clientes</span>!
                            </Typography>

                            <Grid container justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4}>
                                    <StyledButton>
                                        <a href="#contato" className="styled-link">
                                            <AddIcCallIcon />
                                            <Typography>Orçamento grátis!</Typography>
                                        </a>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <StyledButton>
                                        <a href="#contato" className="styled-link">
                                            <MailOutlineIcon />
                                            <Typography>Entre em Contato!</Typography>
                                        </a>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Home;




// import React from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";
// import capaMo from "../../assets/capaMo.jpg";
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import StyledButton from "../../componentes/StyledButton/StyledButton";
// import { AnimatedBackground } from "../AnimatedBackground";
// import "./Home.css";
//
// const Home = () => {
//     return (
//         <section id="home" className="styled-hero">
//             <Container maxWidth="lg">
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} md={5}>
//                         <Box position="relative">
//                             <Box position="absolute" width={"150%"} top={-100} right={0}>
//                                 <AnimatedBackground />
//                             </Box>
//                             <Box position="relative" textAlign="center">
//                                 <img src={capaMo} alt="Capa Monise" className="styled-img" />
//                             </Box>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} md={7}>
//                         <Typography
//                             className="fade-in"
//                             variant="h1"
//                             textAlign="center"
//                             pb={2}
//                             color="primary.contrastText"
//                         >
//                             Sites e Sistemas
//                         </Typography>
//                         <Typography
//                             className="fade-in delay-1"
//                             variant="h4"
//                             textAlign="center"
//                             color="primary.contrastText"
//                         >
//                             Transformo suas <span className="highlight-text">ideias</span> em{" "}
//                             <span className="highlight-text">realidade!</span>
//                         </Typography>
//                         <Typography
//                             className="fade-in delay-2"
//                             variant="h5"
//                             textAlign="center"
//                             color="primary.contrastText"
//                         >
//                             Crie seu site e sistema personalizado e conquiste mais{" "}
//                             <span className="highlight-text">clientes</span>!
//                         </Typography>
//
//                         <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
//                             <Grid item xs={12} md={4} display="flex" justifyContent="center">
//                                 <StyledButton>
//                                     <AddIcCallIcon />
//                                     <Typography>Orçamento grátis!</Typography>
//                                 </StyledButton>
//                             </Grid>
//                             <Grid item xs={12} md={4} display="flex" justifyContent="center">
//                                 <StyledButton>
//                                     <MailOutlineIcon />
//                                     <Typography>Entre em Contato!</Typography>
//                                 </StyledButton>
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </section>
//     );
// };
//
// export default Home;

