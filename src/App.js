import {Container, Header, Statistic} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Container>
      <Header as='h1'>
        Budget
      </Header>
      <Statistic size="small">
        <Statistic.Label>
          Your Balance: 
        </Statistic.Label>
        <Statistic.Value>
          2,550.53
        </Statistic.Value>
      </Statistic>
    </Container>
  );
}

export default App;
