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
            <Card sx={{ paddingBottom: 3, boxShadow: 12 }}>
              <CardHeader title="Quem somos?" />
              <Typography sx={{ padding: 3 }}>
                Somos o grupo One Meta da disciplina de Projeto Integrador I da UFSC. Somos formados
                por 7 membros: Augusto, Bernardo, Bruno, Eduardo, Jayor, Matheus e Yan.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3, boxShadow: 12 }}>
              <CardHeader title="Projeto" />
              <Typography sx={{ padding: 3 }}>
                A disciplina tinha como foco pesquisar o impacto do uso de água nas plantações de
                arroz na nossa região da bacia do rio Araranguá.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3, boxShadow: 12 }}>
              <CardHeader title="Impactos da qualidade de água" />
              <Typography sx={{ padding: 3 }}>
                Após o estudo da qualidade de água é possível evidenciar que sua aplicabilidade se
                estende tanto para o uso do arroz quanto para o consumo pelos seres vivos. Contudo,
                o Índice de Qualidade de Água (IQA) foi desenvolvido justamente com algumas
                características físico-químicas para o uso doméstico, concentrando alguns parâmetros
                que não são necessários para as lavouras. Dessa forma, em busca de ter uma melhor
                observação para os arrozais, pode-se destacar alguns parâmetros do IQA unidos das
                análises disponíveis pelos laboratórios, sendo eles: potencial hidrogeniônico (ph),
                sólidos totais, temperatura e oxigênio dissolvido. Entretanto, do ponto de vista
                prático, esses parâmetros são comumente ignorados pelos produtores, uma vez que: o
                ph da terra, que seria influenciado pela água, já é periodicamente corrigido pelo
                processo de calagem, independente dos agravantes a serem considerados; as alterações
                naturais de temperatura da água não afetam a produtividade do arroz; e caso houvesse
                alguma alteração importante na concentração de sólidos totais ou no oxigênio
                dissolvido, isso seria facilmente observado no bioma da região, especialmente nos
                peixes que habitam o rio em questão.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3, boxShadow: 12 }}>
              <CardHeader title="Impactos da quantidade de água" />
              <Typography sx={{ padding: 3 }}>
                A quantidade de água empregada na agricultura irrigada é uma das grandes
                preocupações do meio, uma vez que 75% do consumo de água mundial está na irrigação.
                Nessa questão, o arroz é um dos grandes responsáveis, já que é a base alimentar da
                maior parte da população mundial (inclusive do Brasil) e está entre as plantações
                que mais demandam água. A quantidade de água exigida para o cultivo de arroz é o
                somatório da água necessária para saturar o solo, formar uma lâmina, compensar a
                evapotranspiração e repor as perdas por percolação vertical, as perdas laterais e
                dos canais de irrigação. Esta quantidade depende, principalmente, das condições
                climáticas, do manejo da cultura, das características físicas do solo, das dimensões
                e revestimento dos canais, da duração do ciclo da cultivar, da localização da fonte
                e da profundidade do lençol freático. Na região subtropical, estima-se que seja
                usado na lavoura de arroz irrigado um volume de água em torno de 12 mil m3 ha-1 para
                um período médio de irrigação de 85 a 100 dias. Essa quantidade exorbitante é um dos
                grandes motivos da necessidade de investimento no setor, e que preocupa
                especialmente países com menor disponibilidade de recursos hídricos, mas não deve
                ser ignorado pelo Brasil, já que esses recursos são limitados. Apesar disso,
                tecnologias mais avançadas para otimização do gasto de água são pouco utilizadas por
                aumentarem os custos para o produtor, muitas vezes inviabilizando a produção, já que
                não há incentivos fiscais para este fim. Mais informações sobre a quantidade de água
                empregada no cultivo de arroz, assim como os meios utilizados para sua otimização.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ paddingBottom: 3, boxShadow: 12 }}>
              <CardHeader title="Vídeo" />
              <Grid textAlign="-webkit-center">
                <ReactPlayer url="https://youtu.be/uzQFYgiO4u0" />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
