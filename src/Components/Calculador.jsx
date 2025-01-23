import { useState } from 'react';
import './Calculador.css';
import Container from '@mui/material/Container';

export default function Calculador() {
  const [num, setNum] = useState("0"); // Inicia como string para facilitar a concatenação
  const [oldnum, setOldNum] = useState("0");
  const [operador, setOperador] = useState("");

  function inputNum(e) {
    const input = e.target.textContent;
    setNum((prevNum) => {
      if (prevNum === "0") {
        return input;
      } else {
        return prevNum + input;
      }
    });
  }

  function limpar() {
    setNum("0");
    setOldNum("0");
    setOperador("");
  }

  function porcentagem() {
    setNum((parseFloat(num) / 100).toString());
  }

  function maisemenos() {
    setNum((prevNum) => (parseFloat(prevNum) * -1).toString());
  }

  function Operador(e) {
    const operadorInput = e.target.textContent;
    if (operadorInput === "÷") {
      setOperador("/");
    } else if (operadorInput === "X") {
      setOperador("*");
    } else {
      setOperador(operadorInput);
    }
    setOldNum(num);
    setNum("0");
  }

  function igual() {
    let resultado;
    const num1 = parseFloat(oldnum);
    const num2 = parseFloat(num);

    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        resultado = num1 / num2;
        break;
      default:
        resultado = num2;
    }

    setNum(resultado.toString());
    setOldNum("0");
    setOperador("");
  }

  return (
    <div>
      <Container maxWidth="xs">
        <div>
          {/* Exibição do resultado */}
          <h1 className="resultado">{num}</h1>

          {/* Botões da calculadora */}
          <button className="cinza" onClick={limpar}>
            AC
          </button>
          <button className="cinza" onClick={maisemenos}>
            +/-
          </button>
          <button className="cinza" onClick={porcentagem}>
            %
          </button>
          <button className="laranja" onClick={Operador}>
            ÷
          </button>
          <button className="preto" onClick={inputNum}>
            7
          </button>
          <button className="preto" onClick={inputNum}>
            8
          </button>
          <button className="preto" onClick={inputNum}>
            9
          </button>
          <button className="laranja" onClick={Operador}>
            X
          </button>
          <button className="preto" onClick={inputNum}>
            4
          </button>
          <button className="preto" onClick={inputNum}>
            5
          </button>
          <button className="preto" onClick={inputNum}>
            6
          </button>
          <button className="laranja" onClick={Operador}>
            -
          </button>
          <button className="preto" onClick={inputNum}>
            1
          </button>
          <button className="preto" onClick={inputNum}>
            2
          </button>
          <button className="preto" onClick={inputNum}>
            3
          </button>
          <button className="laranja" onClick={Operador}>
            +
          </button>
          <button className="preto1" onClick={inputNum}>
            0
          </button>
          <button className="preto" onClick={inputNum}>
            .
          </button>
          <button className="laranja" onClick={igual}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}