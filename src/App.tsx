import { Form } from "./components/Form/Form.tsx";
import "./styles/styles.scss";
import { Result } from "./components/Result/Result.tsx";
import { useState } from "react";
import { FormType } from "./components/Form/Form.helper.ts";

function App() {
  const [result, setResult] = useState<FormType>();

  return (
    <div className="mt-2">
      <h1 className="text-center">Пошаговая форма</h1>
      <Form result={result} setResult={setResult} />
      {result && <Result result={result} setResult={setResult} />}
    </div>
  );
}

export default App;
