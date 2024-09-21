import Header_text from "./Components/Header_text"
import Header from "./Components/Navbar"
import Body from "./Components/Body"
function App() {
  return (
  <div className="w-auto h-auto bg-slate-100 ">
    <div className="w-auto h-auto bg-no-repeat bg-cover bg-center" style={{
        backgroundImage: `url("/people3.jpg")`,
      }}>
      <Header/>
      <Header_text/>
    </div>
    <Body/>
    </div>
  );
}

export default App;
