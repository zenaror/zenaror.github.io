---
title: "Manutenção preventiva no SNES e como isso QUASE deu errado!"
date: 2025-08-22 10:55:27 -0300
permalink: /2025/08/22/manutencao-preventiva-no-snes-e-como-isso-quase-deu-errado
thumbnail: /assets/uploads/2025/08/22/20250822-092211-thumb.jpg
tags: [snes, super nintendo, manutenção, reparo, recap, restauração, troca de capacitor, capacitor eletrolítico, lm324, reparo de trilha, eletrônica, soldagem, conserto, retrô, retro gaming, videogames clássicos, diagnóstico snes, arrumar super nintendo]
---

Olá novamente!

Hoje vim compartilhar um pouco da experiência que tive de fazer uma manutenção preventiva em um dos meus primeiros videogame que tive: um Super Nintendo (sim, aquele quadradão cinza/branco)

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/20250822-092211-thumb.jpg)](/assets/uploads/2025/08/22/20250822-092211.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Por mais que tenha se passado anos, ele até que está bem conservado.</font></sup>

Ele estava guardado na casa dos meus pais bom uns belos anos, e como ultimamente gosto de colecionar esse tipo de coisa, decidi resgatar de lá e fazer uma preventiva nele após anos empoeirado e mais outros anos me dando tanta diversão!

Mas, o que seria uma preventiva aqui? Tirando o fato de limpar ele (coisa que ainda não fiz direito), seria a troca dos capacitores dele, pois caso não saiba, com o tempo eles tentem a perder a sua capacidade de armazenar carga ou até mesmo vazar com o tempo.

Mas por qual motivo isso importa? Bem... mesmo que seja de coleção, gosto de ter meus consoles funcionando! E pelo menos no Gameboy Color, a troca de capacitores basicamente resolveu meu problema com som extremamente baixo! Talvez eu traga essa história um dia aqui :sweat_smile:.

Mas voltando ao SNES. Junto com a desmontagem, aproveitei para começar a fazer o máximo de documentação possível, no qual caso tenha interesse só [**CLICAR AQUI**](https://github.com/zenaror/Anotacoes-Consoles-Retro), coisa que comecei recente. E após alguns parafusos, eis que chegamos a placa principal do console!

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/img-2609-thumb.jpg)](/assets/uploads/2025/08/22/img-2609.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Eis a "placa-mãe" do console.</font></sup>

Então, após um pequeno banho com álcool isopropílico e uma escova de dentes velha, o passo agora é a remover TODOS esses capacitores da parte de cima. Sim, troquei apenas os eletrolíticos. Aqui é importante uma coisa, existem algumas técnicas para remover eles: para tirar esses Radiais (C57 e C59) foi tão simples quuanto virar a placa, esquentar os pinos e tirar eles... Agora esses de alumínio (todos os outros), muita gente costuma cortar eles na base com um alicate de corte de precisão, e depois só ir removendo o que sobrou... mas eu decidi ir por outro caminho: esquentar as pernas minúsculas deles e ir puxando devagar. E é aqui que a merda começou a acontecer... mais tarde vocês vão entender...

Para quem tiver interesse, deixo abaixo um vídeo do Tito (Macho Nacho Productions) que comenta exatamente sobre como remover os capacitores:
<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/0fP1wKfwOyU?si=N2qQLK4YE-2IStxG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

Mas bem, após algum tempo, eis o resultado! Placa sem nenhum capacitor:

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/img-20250819-wa0003-thumb.jpg)](/assets/uploads/2025/08/22/img-20250819-wa0003.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Depois de meia hora, finalmente tirei tudo!</font></sup>

E agora? Bem, vamos lá soldar os novos! Mas tem um porém aqui... os capacitores que comprei são todos THT/Radiais, ou seja, precisei adaptar para soldar eles onde iriam os capacitores SMD. Mas por qual motivo comprei todos do mesmo estilo ao invés de comprar idêntico? Kits são caros e as vezes pode nem conseguir ter o do seu modelo de placa específico, além de que os THT são mais baratos e fáceis de achar! O importante aqui é tomar cuidado na hora de comprar os capacitores, onde eles tem que tem a mesma capacitância (o valor do uF) e uma voltagem igual ou maior (mas nem tanto também) ao capacitor antigo. Para esse meu modelo do SNES, eu documentei tudo certinho.

A adaptação para soldar aqui não tem muito segredo, é dobrar as perninhas, cortar o excesso e soldar. E como qualquer trabalho com solda, FAÇA COM PACIÊNCIA! (e sempre use fluxo, isso ajuda muito no resultado final!

Então, após quase uma hora para tentar deixar tudo bonitinho, eis que finalmente finalizei! :heart:

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/20250820-202411-thumb.jpg)](/assets/uploads/2025/08/22/20250820-202411.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Aprovei o trabalho para trocar a placa traseira do conector de energia que estava quebrada</font></sup>

Então, depois de fechar tudo direitinho, fui testar e... BAM! SEM SOM! :broken_heart: (mas nenhum capacitor explodiu)

Então pensei... ok, vou rever aqui a solda e.... tudo certinho! E não sei se da para ver, mas lembram que comentei que a merda começou quando inventei de tirar os capacitores esquentando as perninhas? Não sei se da para ver na foto, mas o capacitor C61 aqui está com um pequeno fiozinho, pois sem querer arranquei a trilha dele, mas consegui emendar ali onde vi que a trilha estava seguindo.

Então o desespero começou a bater :cold_sweat:! A solda estava certa, nenhum capacitor estava em curto... Não sabia o que fazer :cold_sweat:! Então após procurar muito, achei esse video de um canal brasileiro chamado "Assistência Retro" que me ajudou muito a diagnosticar.

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/N5Iq68QNoaw?si=tUlcB8mNRywAItuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

Então consegui fazer uma "sonda" semelhante a dele para conseguir ouvir o som direto do circuito, e realmente eu estava com exatamente o mesmo diagnostico dele! O problema? Um chipzinho na marcação U10. Esse carinha é responsável por mixar e fazer um "pós-processamento" do som para enviar para a saída da TV.

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/20250822-100700-thumb.jpg)](/assets/uploads/2025/08/22/20250822-100700.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">"Technolooooooghia"</font></sup>

Por sorte, esse chipzinho ainda é fabricado (o LM324) e é bem baratinho, um kitzinho com 10 unidades, paguei 15 reais! Comprei, chegou, troquei e.... BAM! AINDA SEM SOM! :sob:

Ainda pronto, já bate aquele gelo na barriga e tristeza imaginando o tamanho da minha burrice e pensando "Porquê raios fui inventar de fazer essa porcaria!?  :rage:". Então junto com o desespero veio a busca por fóruns/reddit/discord para tentar buscar ajuda para solucionar o problema. E no dia seguinte, um abençoado no [REDDIT](https://www.reddit.com/r/consolerepair/comments/1mvv2fq/full_snes_recap_but_no_sound_after_that/) me veio com uma possível solução, lembram do capacitor C61 que eu arranquei a trilha dele sem querer? Pois é... na verdade eram 2 TRILHAS que ele era ligado!

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/full-snes-recap-but-no-sound-after-that-sns-cpu-gpm-02-v0-wlhk6fxrqakf1-thumb.jpg)](/assets/uploads/2025/08/22/full-snes-recap-but-no-sound-after-that-sns-cpu-gpm-02-v0-wlhk6fxrqakf1.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Como podem ver, esse pequeno e minúsculo também estava ligado no mesmo PAD que eu arranquei!</font></sup>

Então imediatamente fui ver com uma lupa/microscópio digital e... não que é o miserável é um gênio!? Realmente estava rompido nesse ponto!
então peguei e fiz um pequeno jumperzinho, testei e.... BAM! OLHA AI O SOM NOVAMENTE!

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/22/20250821-081524-thumb.jpg)](/assets/uploads/2025/08/22/20250821-081524.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Foto final com o novo jumper e de quebra o novo amplificador LM324</font></sup>

Na mesma hora, imaginem a alegria a criança barbada de 31 anos ao conseguir arrumar isso! Fechei tudo na mesma hora, montei, fiz mais um teste para garantir que nada tinha saído do lugar e.. agora é só aproveitar novamente meu Super Nintendo!

Sei que não ficou o melhor reparo do mundo, mas consegui fazer com as ferramentas que eu tinha na mão no momento! Futuramente pretendo fazer um reparo definitivo, onde vou reconstruir o PAD e as trilhas que eu arranquei, aplicar uma máscara de solda UV para fixa tudo no lugar e garantir ai outros anos e anos de diversão! Poderia deixar assim como fiz, mas esse grande guerreiro não merece isso!

Mas devo admitir que foi uma grande aventura fazer isso! Me fez correr atrás de esquemas da placa, aprender mais sobre eletrônica, estudar sobre... e é muito gratificante ver no final um resultado positivo.

E qual é a moral da história? Levem seus consoles em técnicos de CONFIANÇA :sweat_smile:! Vocês podem até tentar fazer por vocês mesmos, mas como vocês viram, o risco de dar uma merda é ENORME! Mesmo para uma tarefa relativamente simples como essa. E a minha lição foi... quando for trocar capacitores, corte eles com um alicate, é mais prático! 
