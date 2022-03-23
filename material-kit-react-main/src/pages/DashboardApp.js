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
          <Typography variant="h4">Projeto Integrador 1</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Lorem Ipsulum" subheader="(+43%) than last year" />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
