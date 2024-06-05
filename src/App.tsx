import { Form } from "./components/Form/Form.tsx";
import "./styles/styles.scss";
import { Result } from "./components/Result/Result.tsx";
import { useState } from "react";
import { FormStateType } from "./components/Form/Form.types.ts";

function App() {
  const [result, setResult] = useState<FormStateType>();

  return (
    <div className="mt-2">
      <h1 className="text-center">Пошаговая форма</h1>
      <Form result={result} setResult={setResult} />
      {result && <Result result={result} setResult={setResult} />}
    </div>
  );
}

export default App;
