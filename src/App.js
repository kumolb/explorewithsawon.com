import './App.css';
import Navbars from './App/Components/Navbars/Navbars';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>{' '}
      <header>
        <Navbars></Navbars>
      </header>


      <section style={{"backgroundColor": "#d1a584;"}}>
          <h1>We are going under maintenance</h1>
          <h2>We sincerely apologize for the temporary inconvenience</h2>
      </section>

      <section>
        <img style = {{"width": "100%"}} src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/275662468_1663698233962763_8365886042859923009_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xZdB0sV6l3QAb6k8m0S&_nc_ht=scontent.fdac137-1.fna&oh=00_AfCpZPfCZXMJNB_XpnhCHJ0UBRUEgFOornLu5w-crWwWbw&oe=661B8BD4"/>
      </section>

      <section>
        <h2>Section 1: YouTube Video Link</h2>
      </section>

      <section>
        <h2>Section 2: YouTube Video Link</h2>
      </section>

      <section>
        <h2>Section 3: YouTube Video Link</h2>
      </section>

      <button className="book-button">Book Us</button>

    </div>
  );
}

export default App;
