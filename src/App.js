import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import { Home, Contact, Artwork, Exhibition, PageNotFound, Layout} from'./components';
import { Kupoayo, JamesObonyo, Mchechu, Kamyoso, BonMwiru} from'./pages';
import { KupoayoSlide, JamesObonyoSlide, MchechuSlide, KamyosoSlide, BonMwiruSlide} from'./pages/Slides';

function App() {
  
  return (
    <div className="App ">
      
    <BrowserRouter >
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/artwork" element={<Artwork />} />

          <Route path ="/artwork/kupoayo" element={<Kupoayo />}/>
            <Route path ="/artwork/kupoayoslide" element={<KupoayoSlide />} />

          <Route path ="/artwork/jamesobonyo" element={<JamesObonyo />} />
           <Route path ="/artwork/jamesobonyo/jamesobonyoslide" element={<JamesObonyoSlide />} />
          
          <Route path ="/artwork/mchechu" element={<Mchechu />} />
            <Route path ="/artwork/mchechu/mchechuslide" element={<MchechuSlide />} />
          
          
          <Route path ="/artwork/kamyoso" element={<Kamyoso />} />
          <Route path ="/artwork/kamyoso/kamyososlide" element={<KamyosoSlide />} />

          <Route path ="/artwork/bonmwiru" element={<BonMwiru />} />
          <Route path ="/artwork/bonmwiru/bonmwiruslide" element={<BonMwiruSlide />} />
        <Route path="contact" element={<Contact />} />
        <Route path="exhibition" element={<Exhibition />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
