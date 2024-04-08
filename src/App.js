import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import PlaylistComponent from './Requests/Playlist/PlaylistComponent'
import MainComponent from './Process/MainComponent/MainComponent'

function App() {
  return(
    <>
      <Header/>
      <Body></Body>
      <Footer></Footer>
      <MainComponent />
      <PlaylistComponent />
    </>
    );
}

export default App;
