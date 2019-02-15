import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

class jokes extends React.Component {
  static async getInitialProps() {
    const rsp = await fetch('http://localhost:3001/chuck-norris');
    const jokes = await rsp.json();
    return { jokes };
  }

  render() {
    const { jokes } = this.props;

    return (
      <div>
        <Header />
        Chuck Norris
        <ul>
          {jokes.map(j => (
            <li key={j.key}>{j.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default jokes;
