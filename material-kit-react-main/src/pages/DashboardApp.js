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
              <CardHeader title="Vídeo" />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
