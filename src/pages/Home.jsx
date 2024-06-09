import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankyou from "../assets/illustration-thank-you.svg"
import { useState } from "react";

export function Home() {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedbackNote,setFeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event) {
    const feedback = Number(event.target.innerText)

    setFeedbackNote(feedback)
  } 

  function handleSubmit() {
  if(feedbackNote === 0) return

  setMostrarResultado(true)
  }


  return (
    mostrarResultado === false ?(
      <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icone estrela" />
        </IconContainer>

        <h1>Como foi o atendimento</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitaçao. Agradecemos muito seu feedback para podermos melhorar nosso atendimento</p>
    
        <ButtonContainer>
            <button onClick={handleFeedbackButtonClick}>1</button>
            <button onClick={handleFeedbackButtonClick}>2</button>
            <button onClick={handleFeedbackButtonClick}>3</button>
            <button onClick={handleFeedbackButtonClick}>4</button>
            <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>

        <button onClick={handleSubmit}>Enviar</button>
    </CardContainer>
    ) : (
      <CardContainer>
        <img src={thankyou} alt="imagem de agradecimento" />

        <ResultContainer>
          <p>voce selecionou {feedbackNote} de 5</p>
        </ResultContainer>
      
        <h1>obrigado</h1>

        <p>agradecemos por dedicar um momento para nos avaliar, se precisar de mias suporte, nao hesite em entrar em contato</p>
      </CardContainer>
    )
  )
}
