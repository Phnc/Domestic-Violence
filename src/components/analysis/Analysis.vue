<template>
  <div id="analysis">
    <div class="center">
      <h3>Quantos casos de violência domestica foram reportados por ano?</h3>
      <parent />
      <h3>Frequência de casos ao longo dos anos</h3>
      <p>
        No gráfico acima conseguimos notar um crescimento contínuo na quantidade
        de casos ao longo dos anos. No entanto, houve uma redução de cerca de
        2,12% entre 2019 e 2020. Não conseguimos afirmar que em 2021 houve outra
        redução no percentual, pois os dados aqui apresentados não contam todos
        os meses.
      </p>
      <p>
        Além disso, não seria correto dizer que o aumento no número de casos
        reportado significa efetivamente que a violência doméstica no estado
        aumentou, pois estariamos desconsiderando as diversas campanhas de
        divulgação da Lei Maria da Penha realizadas ao longo dos anos. O que
        contribuiu no aumento do número de denúncias.
      </p>
      <p>
        Outro ponto a ser notado é que a pandemia mundial do coronavírus pode
        ter contribuído com a diminuição do número de casos reportados por conta
        do isolamento social. O que fez com que muitas mulheres tenham tido
        pouquíssimas oportunidades de estarem longe de seus agressores.
      </p>

      <br />
      <h3>Qual a natureza dos crimes mais frequentes?</h3>
      <horizontalParent />
      <h3>Principais crimes durante os anos</h3>
      <p>
        Como podemos perceber através dos dados apresentados acima, temos 3
        categorias de crimes que se destacam entre as outras pela quantidade de
        casos. Dentre elas, estão Ameaça, Lesão Corporal e Injúria. Listamos
        abaixo a descrição de cada uma delas e suas penas.
      </p>
      <p>
        Ameaça: Art. 147 - Ameaçar alguém, por palavra, escrito ou gesto, ou
        qualquer outro meio simbólico, de causar-lhe mal injusto e grave: <br />
        Pena - detenção, de um a seis meses, ou multa.
      </p>
      <p>
        Lesão Corporal: Art. 129. Ofender a integridade corporal ou a saúde de
        outrem: <br />
        Pena - detenção, de três meses a um ano.
      </p>

      <p>
        Injúria: é atribuir palavras ou qualidades ofensivas a alguém,
        expor defeitos ou opinião que desqualifique a pessoa, atingindo sua
        honra e moral.  <br> Art. 140 –
        Injuriar alguém, ofendendo-lhe a dignidade ou o decoro: <br> Pena – detenção,
        de um a seis meses, ou multa.
      </p>
    </div>
  </div>
</template>

<script>
import Parent from "../barChart/Parent";
import ParentHorizontal from "../horizontalBarChart/ParentHorizontal";

export default {
  name: "Analisis",
  components: {
    parent: Parent,
    horizontalParent: ParentHorizontal,
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  height: 100%;
  padding: 10px;
}

#analysis {
  width: 100%;
  height: 100%;
}
</style>