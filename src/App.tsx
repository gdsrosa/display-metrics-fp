import { ErrorBoundary } from 'react-error-boundary';

import Grid from '@/components/layout/Grid';
import Container from '@/components/layout/Container';

import Header from '@/components/common/Header';
import Error from '@/components/common/Error';

import TableContainer from '@/containers/Table';
import CardContainer from '@/containers/Card';
import ChartsContainer from '@/containers/Charts';
import WarningContainer from '@/containers/Warning';

import { ChartsProvider } from '@/context/ChartContext';

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <ChartsProvider>
        <Grid>
          <Header />
          <WarningContainer />
          <Container>
            <CardContainer />
            <ChartsContainer />
            <TableContainer />
          </Container>
        </Grid>
      </ChartsProvider>
    </ErrorBoundary>
  );
}

export default App;
