import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import YoutubeAuthentication from './Requests/YoutubeAuthentication'
import PlaylistComponent from './Requests/Playlist/PlaylistComponent'
import MainComponent from './Process/MainComponent/MainComponent'

function App() {
  return(
    <>
      <Header/>
      <Body></Body>
      <Footer></Footer>
      {/* <YoutubeAuthentication></YoutubeAuthentication>
      <PlaylistComponent /> */}
      <MainComponent />
    </>
    );
}

export default App;
