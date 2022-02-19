import Question from "./components/Question";
import Styles from "./App.module.scss";

function App() {
  return (
    <main>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <h2>Questions And Answers About Login</h2>
        </div>
        <section>
          <Question />
        </section>
      </div>
    </main>
  );
}

export default App;
