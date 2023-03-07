import './App.css';
import News_Card from './components/Card/Card';
import news from './Data';
import NewsState from '../src/context/NewsState'
import Card_Modal from './components/Modal/Modal';
import AppBar from '@mui/material/AppBar';
let images = require.context('../public/images', true)


function App() {
  return (
// 6B4B3E
    <>
      <AppBar sx={{ bgcolor: "#6A2E35" }} className='header'><h2>NEWS</h2></AppBar>
      <NewsState>
        <div className="grid">
          {
            news.map((single_news, key) => {

              let imgSrc = images(`./N${single_news.name}.png`)
              return (
                <div>
                  <News_Card key={key} heading={single_news.heading} image={imgSrc} index={single_news.name} />
                  <Card_Modal />
                </div>
              )
            })
          }
        </div>
      </NewsState>
    </>
  );
}

export default App;
