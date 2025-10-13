---
title: "Finalizando as modificações nos consoles antigos!"
date: 2025-10-13 17:11:10 -0300
permalink: /2025/10/13/finalizando-as-modificacoes-nos-consoles-antigos
thumbnail: /assets/uploads/2025/10/13/20251006-215144-thumb.jpg
tags: [famicom, nes, master-system, mega-drive, sega, nintendo, mods, recap, manutenção, restauração, eletrônica, video-game, retro, retro-gaming, modding, som, vídeo-composto, fonte, energia, conserto, consoles-clássicos, diy, projeto, nostalgia]
---

Olá pessoal! Tudo em paz?

Hoje vou finalizar e comentar sobre as últimas etapas de preventiva e mods que realizei nos meus consoles de vídeo-game antigos.

Os escolhidos da vez, serão 3 hoje! Famicom (NES japonês), Master System 3 e Mega Drive 3. E como um bônus, vou mostrar também algumas fontes do GameCube e Nintendo 64.

# Começando pelos capacitores!

Para começar, vamos ver o Famicom e Master System, já que eles eram o únicos que faltavam fazer a troca dos capacitores.

Bom, a troca aqui não tem muito segredo, ambos os consoles usam capacitores chamados de THT (ou capacitores de perninhas, igual o Mega Drive. Então aqui não tem muito segredo, é remover a solda, limpar e colocar o novo. Tirando a parte que tive alguns "problemas" durante a troca 😅

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251006-215144-thumb.jpg)](/assets/uploads/2025/10/13/20251006-215144.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Master System 3 já com a troca feita. Sim, esse console tem uma fonte interna que da todo o peso do console.</font></sup>

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251006-215218-thumb.jpg)](/assets/uploads/2025/10/13/20251006-215218.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Pequeno acidente no caminho, a ilha da esquerda simplesmente sumiu, mas perfeitamente reparável. Muito cuidado ao mexer com essas placas bem antigas!</font></sup>


Como podem ver, tem algumas coisinhas a mais na imagem, como o cabo branco, onde deveria ser o cabo da tomada, e 3 fios pretos saindo na parte superior. O cabo branco é basicamente o conector em forma de 8 que mencionei na postagem anterior. Já esses 3 fios é uma plaquinha que montei para ter uma saída de vídeo composto (aquela dos 3 pinos), já que o console originalmente tem apenas saída RF (de antena), mas daqui a pouco comento deles.

Vamos agora para o Famicom, onde também tive um pequeno acidente, e aqui as coisas começam a ficar um pouquinho mais chatas!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251011-080824-thumb.jpg)](/assets/uploads/2025/10/13/20251011-080824.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Assim como os outros, é basicamente tirar a solda, limpar e colocar o novo capacitor. Mas o problema é essa carcaça metálica enorme no topo!</font></sup>

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251011-080844-thumb.jpg)](/assets/uploads/2025/10/13/20251011-080844.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Como podem ver, tem um capacitor escondido bem embaixo dela. Então tive que trocar o capacitor sem remover a estrutura (pois daria muito trabalho)</font></sup>

Como podem ver, aqui ja deu um pouco mais de trabalho, por conta dos capacitores na parte onde fica a estrutura metálica. Eu tentei remover ela no início, mas percebi que eu teria muito mais trabalho tentando remover ela, do que me virar para colocar eles assim mesmo. E foi exatamente o que fiz... até que... sem querer esquentei um ponto que não era de um capacitor, e como diria uma famosa cantora americana: "*Oops!... I Did It Again* - Spears, Britney".

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/chatgpt-1759856760839-thumb.jpg)](/assets/uploads/2025/10/13/chatgpt-1759856760839.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Só que dessa vez foi pior...</font></sup>

Como podem ver, a perna do lado da faixa preta simplesmente caiu sozinha quando encostei o ferro. Esse componente é um "Indutor Axial", até ai ok... mas e para conseguir identificar o valor desse com essa faixinhas microscópicas!? Até hoje não sei se isso é marrom, laranja ou vermelho!

Esse carinha faz parte exatamente do circuito de RF para poder gerar a imagem. Após quase uma semana procurando, achei um possível substituto, um [Indutor Axial de 33µH](https://www.acheicomponentes.com.br/indutor/indutor-33uh-medio-epoxy-axial-10). Se é o mesmo valor, não sei. Mas as cores eram parecidas, liguei ele e funcionou. Então vai ser ele mesmo!

Confesso que me deu um gelo enorme na barriga, pois postei em vários grupos de reparo de consoles, e ninguém sabia o valor original, mas todos citavam algo entre 22 e 33µH, então só fechei o olho e fui! 🤣

# E agora, as modificações!

### Primeiramente as tomadas!

Agora vamos para a parte que acho que muitos preferem: as modificações!

Como disse antes, queria algo que tornasse minhas jogatinas práticas e acessíveis. Por isso escolhi fazer 2 coisas: Colocar um conector em forma de 8 onde tinha um cabo de energia incluso e fazer um mod de vídeo composto nos consoles que tem só saída RF!

O primeiro é o mais fácil, colocar um conector. Aqui foi tão simples quando remover completamente o fio antigo e soldar um novo com o conector na outra ponta. Quem deu um pouco mais de trabalho aqui foram as fontes do N64 e GameCube. A do N64 pelo fato de ela estar "colada" no outro lado da carcaça (nada que um pouco de álcool isopropílico não resolva) e do GameCube por usar conector na placa, ao invés do cabo de energia soldado direto.

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251009-073218-thumb.jpg)](/assets/uploads/2025/10/13/20251009-073218.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Fontes já sem o cabo de energia.</font></sup>

Depois de tudo soldado e preso, o problema era... Como prender esse conector para que fique relativamente firme, SEM CORTAR AS CARCAÇAS!?.

Inicialmente pensei em imprimir uma peça em 3D para reaproveitar o buraco original. Mas percebi que ia ficar um tanto quanto frágil fazer isso, pois as paredes laterais iam ter que ser bem finas.

Então usei a boa e velha cola quente! Que além tem um bom isolante, consegue prender tudo no lugar. Sei que não vai ficar a coisa mais linda do mundo, mas fica funcional e atende minhas necessidades.

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251009-095829-thumb.jpg)](/assets/uploads/2025/10/13/20251009-095829.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Fontes já com o conector incluso. Como falei, não ficou bonito, mas ficou funcional e sem troca troca de cabos.</font></sup>

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251009-073506-thumb.jpg)](/assets/uploads/2025/10/13/20251009-073506.jpg) [![](/assets/uploads/2025/10/13/20251009-073443-thumb.jpg)](/assets/uploads/2025/10/13/20251009-073443.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">O mesmo resultado, só que com o Mega Drive 3.</font></sup>


{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251009-073325-thumb.jpg)](/assets/uploads/2025/10/13/20251009-073325.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">E agora fiquei com uma coleção de cabos de força 🤣.</font></sup>


E para encerrar essa parte de energia, queria citar um pequeno "rabicho" que montei para poder alimentar o Super Nintendo/Famicom. A ideia é utilizar a própria fonte do PS2 Slim que tenho para alimentar o console. Sim, ela é totalmente compatível e diria que até mais segura que a própria fonte da época ou fontes paralelas!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251013-093823-thumb.jpg)](/assets/uploads/2025/10/13/20251013-093823.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Pequeno cabo Y para poder ligar os consoles. Infelizmente não achei um conector fêmea bonito para a ponta da fonte, então usei um conector de PS One/Slim</font></sup>

Quem que interessar, acoonselho esse vídeo com mais detalhes! Para terem uma noção ela consegue até bancar o Megazord da SEGA (Mega Drive, Sega CD e Sega 32X) sozinha!

{:style="text-align:center;"}
[![The Ultimate Multi-Console Power Supply For Your Retro Consoles / MY LIFE IN GAMING](https://markdown-videos-api.jorgenkh.no/url?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzDQ46F_QO8I)](https://www.youtube.com/watch?v=zDQ46F_QO8I)


### E agora, os mods de vídeo!

Devo admitir, até que foi bem fácil fazer isso. A parte mais complicada foi achar um lugar para deixar as plaquinhas.

A primeira vítima foi o Master System 3 (pois era o que estava aberto na hora), basicamente segui um [esquema online desse site](https://raelcunha.com/2016/07/29/jornada-retro-sega-master-system/) onde ele mostra como colocar as duas saídas suportadas: RGB (que eu ignorei) e Composto. E o melhor, o próprio chip também processa o áudio! Então já estava tudo no mesmo lugar! Eu fiquei um tanto quanto tentado para fazer a saída de S-Vídeo dele, mas infelizmente onde comprei os componentes estava com o transistor em falta.

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251006-134716-thumb.jpg)](/assets/uploads/2025/10/13/20251006-134716.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Fios já soldados, sem muita complicação!</font></sup>

E agora a dúvida, onde deixar a plaquinha de vídeo? Bem, acho que achei o lugar perfeito para ela, do lado do módulo RF!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251006-142251-thumb.jpg)](/assets/uploads/2025/10/13/20251006-142251.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">A plaquinha é bem simples! 2 capacitores e um resistor. E um fio direto para o GND.</font></sup>

Depois de dar uma ajeitadinha, soldar os fios e por um pouco de fita isolante para evitar possíveis contatos com partes indesejadas e mais um monte de cola quente para prender tudo do lado de fora e isolar a parte de baixo da plaquina, eis o resultado final!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251013-090534-thumb.jpg)](/assets/uploads/2025/10/13/20251013-090534.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Resultado final, já com o conector de energia em forma de 8 e o conector de vídeo do... NINTENDO?</font></sup>

Bem...como podem ver, escolhi exatamente um conector do Super Nintendo para usar de saída de vídeo. E o motivo disso? Bem... é um cabo que acha fácil, encaixa e sai fácil e tem tanto saída RGB, S-Vídeo e Composto! Achei baratinho lá no [Aliexpress](https://pt.aliexpress.com/item/1005009120279750.html) uma plaquinha customizada e o conector impresso em 3D.

Agora foi a vez do Famicom. Aqui era simplesmente adicionar uma saída de vídeo ao mesmo estilo que fiz no Master System. Para isso segui [esse guia aqui](https://github.com/beber666/Famicom-OpenAV) onde ele cita as duas revisões mais comuns: HVC-CPU-07 e HVC-CPU-GPM-02 (que é a minha).

Também tem esse vídeo no youtube que aborda especificamente a minha placa

{:style="text-align:center;"}
[![Mod Famicom AV simplificado](https://markdown-videos-api.jorgenkh.no/url?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dky8rFPbzGMU)](https://www.youtube.com/watch?v=ky8rFPbzGMU)

Foi bem fácil achar os pontos de solda e juntar tudo. Depois de feio a solda, coloquei um pouco de fita para proteger as conexões

 {:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251011-080915-thumb.jpg)](/assets/uploads/2025/10/13/20251011-080915.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Tudo soldado e protegido!</font></sup>

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251011-080921-thumb.jpg)](/assets/uploads/2025/10/13/20251011-080921.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Plaquinha já montada!</font></sup>


{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251013-094820-thumb.jpg)](/assets/uploads/2025/10/13/20251013-094820.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Foi difícil, mas achei um cantinho para esconder ela. E assim como no Master System, coloquei um pouco de fita isolante em volta para evitar contatos indesejados.</font></sup>


{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251013-081726-thumb.jpg)](/assets/uploads/2025/10/13/20251013-081726.jpg)

<sup><font color="#C0C0C0">E por fim, o conector devidamente instalado! Note que aproveitei o lugar onde passa o fio do Controle 1 para passar o fio do vídeo junto!</font></sup>

Um detalhe importante nesses mods, é que ambos os consoles só tem som MONO!, ou seja, vai sair som só por um lado. Para isso, fiz um pequeno jumper nos pinos de áudio! Então o mesmo som vai sair nos dois canais de áuido, similar ao que fiz no Mega Drive na postagem anterior.

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/20251009-214728-thumb.jpg)](/assets/uploads/2025/10/13/20251009-214728.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Jumper feitos! aproveitei também e fiz um jumper no GND só por garantia.</font></sup>

Feito SÓ TUDO ISSO, nessa saga de alguns posts, posso dizer que estou bem satisfeito com meu "setup". Posso deixar basicamente a fonte do PS2 ligada o tempo todo e só indo alternando os consoles, já que ou vai usar o conector dela ou vai usar o cabo em forma de 8 que ela tem.

E para os cabos de vídeo, agora consigo usar todos consoles no meu upscaler Retrotink 5x Pro! Criei basicamente um perfil genérico para poder atender todos sem nenhuma preocupação!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/13/gif-consoles.gif)](/assets/uploads/2025/10/13/gif-consoles.gif)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Mostrando como ficou tudo no final! Todos são alimentados pela mesma fonte (ou pelo cabo em forma de 8) e por 3 cabos que funcionam em todos os consoles.</font></sup>

E é isso pessoal! Caso tenham ficado com alguma dúvida, podem colocar nos comentários aqui e vamos bater um papo se quiserem! 😁

Espero que essa série de postagem consiga ajudar alguém que busca fazer a mesma coisa!

Até a próxima! 👋🏻
