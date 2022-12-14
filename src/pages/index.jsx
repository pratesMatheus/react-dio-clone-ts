import { useState, useEffect, useMemo, useCallback } from "react";


const Teste = () => {
  //useState
  const [name, setName] = useState('Matheus');

  const handleChangeName = () => {
    setName(prev => prev === 'Matheus' ? 'Fulano' : 'Matheus');
  }

  //useEffect
  useEffect(()=> {
    //alert('renderizei');
    handleChangeName();
    //return () => alert('Desmontei'); //Este é usado quando o componente vai "morrer". Dica para uso: quando quero salvar que o usuário está offline
  }, []);
 
  //useMemo
  const [age, setAge] = useState(21);

  const handleChangeAge = () => {
    setAge(prev => prev === 21 ? 16 : 16);
  }
  /* 
  const calculo = useMemo(() => {
    console.log('calculou', age); //o useMemo está guardando a idade original, e apesar dela ter o estado trocado, ele retorna a idade original da mesma forma. Porém isso funciona enquanto o segundo parâmetro estiver vazio.
    return 10 * age;
  }, [age]);
  
  console.log('renderizou', calculo); */

  //useCallback
  const [nameB, setNameB] = useState('Prates');
  const handleChangeNameCallback = useCallback(() => setNameB(prev => prev === 'Prates' ? 'Doe' : 'Prates'), []);
  
  const [ageB, setAgeB] = useState(19);
  const handleChangeAgeCallback = useCallback(() => {
    const newAgeB = 5 * ageB;
    console.log("Age atual", newAgeB, ageB); //o useCallback está guardando a idade original, e apesar dela ter o estado trocado, ele retorna a idade original da mesma forma. Porém isso funciona enquanto o segundo parâmetro estiver vazio.
    setAgeB(prev => prev === 19 ? 30 : 19)
  }, [ageB]); //vai renderizar os dois valores estabelecidos para a idade

  return (
    <div>
    "useState"
      <p>Nome: {name}</p>
      <button onClick={handleChangeName}>
        Alterar
      </button>
      <br /><br />


      "useMemo"
      <p>Idade: {age}</p>
      <button onClick={handleChangeAge}>
        Alterar
      </button>
      <br /> <br />
      
      
      "useCallback"
      <p>Nome: {nameB} useCallback</p>
      <p>Idade: {ageB} useCallback</p>
      <br />
      <button onClick={handleChangeNameCallback}>
        Alterar nome
      </button>
      <br />
      <button onClick={handleChangeAgeCallback}>
        Alterar idade
      </button>
    </div>
  )
}

export { Teste }
