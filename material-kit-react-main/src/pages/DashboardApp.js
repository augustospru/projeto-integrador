import React from 'react';
import ReactPlayer from 'react-player';
// material
import { Box, Grid, Container, Typography, Card, CardHeader } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="One meta">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Impactos da água em plantações de arroz</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3 }}>
              <CardHeader title="Quem somos?" />
              Somos pessoas
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3 }}>
              <CardHeader title="Projeto" />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3 }}>
              <CardHeader title="Impactos da qualidade de água" />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3 }}>
              <CardHeader title="Impactos da quantidade de água" />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3 }}>
              <CardHeader title="Vídeo" />
              <Grid textAlign="-webkit-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=ZaYvwn9nBD4" />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
