import { ButtonContainer, CardContainer, IconContainer, ResultContainer } from "./Home.styles";

import iconStarImg from "../assets/icon-star.svg"
import thankyou from "../assets/illustration-thank-you.svg"

export function Home() {
  let aparecerResultado = true

  return (
    aparecerResultado === false ?(
      <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icone estrela" />
        </IconContainer>

        <h1>Como foi o atendimento</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitaçao. Agradecemos muito seu feedback para podermos melhorar nosso atendimento</p>
    
        <ButtonContainer>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </ButtonContainer>

        <button>Enviar</button>
    </CardContainer>
    ) : (
      <CardContainer>
        <img src={thankyou} alt="imagem de agradecimento" />

        <ResultContainer>
          <p>voce selecionou 4 de 5</p>
        </ResultContainer>
      
        <h1>obrigado</h1>

        <p>agradecemos por dedicar um momento para nos avaliar, se precisar de mias suporte, nao hesite em entrar em contato</p>
      </CardContainer>
    )
  )
}
