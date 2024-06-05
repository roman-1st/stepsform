import { Form } from "./components/Form/Form.tsx";
import "./styles/styles.scss";

function App() {
  return (
    <div className="mt-2 d-flex flex-column align-items-center">
      <h1 className="text-center">Пошаговая форма</h1>
      <Form />
    </div>
  );
}

export default App;
