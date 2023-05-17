import bgVideo from "./assets/bg.mp4";
import Heading from "./components/heading";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App font-Poppins container py-16 px-6 min-h-screen mx-auto">
      <video
        className="video-background"
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          objectFit: "cover"
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Heading />
      <ToDoList />
    </div>
  );
}

export default App;
