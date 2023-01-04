import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
const data = {
  welcome: "Welcome to component and props corner",
  title: "React",
  subtitle: "Javascript Library",
  user: {
    firstname: "John",
    lastname: "Sedrick",
  },
  techskill: ["HTML", "JS", "CSS", "REACT"],
  date: new Date(),
};
const greetPeople = () => {
  alert ("Welcome to my corner")
}
const showDate = () =>{
  let date = new Date();
  alert(date);
};

return (
  <>
  <div className='container'>

  </div>
    <Header 
      welcome={data.welcome}
      title={data.title}
      subtitle={data.subtitle}
    />
    <Main user={data.user} techs={data.techskill} 
    greetPeople={greetPeople}
    showDate={showDate}
    />


    <Footer date={data.date}/>
    </>
)


}

export default App;
