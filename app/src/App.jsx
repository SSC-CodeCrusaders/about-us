import HeaderText from "./Components/HeaderText"
import Header from "./Components/Navbar"
import Body from "./Components/Body"
import TeamMembers from "./Components/TeamMembers";
function App() {
  return (
  <div className="w-auto h-auto bg-slate-100 ">
    <div className="w-auto h-auto bg-no-repeat bg-cover bg-center" style={{
        backgroundImage: `url("/people3.jpg")`,
      }}>
      <Header/>
      <HeaderText/>
    </div>
    <Body/>
    <TeamMembers/>
    </div>
  );
}

export default App;
