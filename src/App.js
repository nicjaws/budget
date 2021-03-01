import { useState } from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import EntryLines from './components/EntryLines';





function App() {
  const [entries, setsEntries] = useState(initialEntries);
  return (
    <Container>

     <MainHeader title="Budget"/>

      <DisplayBalance title="Your balance" value="2550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries}/>

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
      
    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$100,00",
    isExpense: false 
  },
  {
    id: 2,
    description: "Water Bill",
    value: "$20,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Power Bill",
    value: "$50,00",
    isExpense: true
  }
]