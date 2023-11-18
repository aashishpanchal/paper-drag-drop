import { DraggableBox } from "./components";

function App() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden bg-center bg-cover bg-img">
      <DraggableBox
        render={(props) => (
          <div {...props} className="paper-box ">
            <p className="text-3xl paper-p">
              My Favorite Programming Language ▫
            </p>
            <p className="text-3xl paper-p">
              JavaScript, TypeScript, Python 😍
            </p>
          </div>
        )}
      />
      <DraggableBox
        render={(props) => (
          <div {...props} className="translate-x-5 -translate-y-5 paper-box">
            <p className="text-3xl paper-p">Mr.Aashish Panchal</p>
            <p className="text-3xl paper-p">Lovely coder 😍 </p>
          </div>
        )}
      />
      <DraggableBox
        render={(props) => (
          <div {...props} className="translate-x-5 -translate-y-5 paper-box">
            <p className="text-3xl paper-p">I ❤️ you, Aashish </p>
          </div>
        )}
      />
    </div>
  );
}

export default App;
