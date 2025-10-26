---
title: "It's SEGA TIME! Hora de fazer uma preventiva no Mega Drive 3!"
date: 2025-10-06 10:13:53 -0300
permalink: /posts/2025/10/06/it-s-sega-time-hora-de-fazer-uma-preventiva-no-mega-drive-3
thumbnail: /assets/uploads/2025/10/06/20251006-094940.jpg
tags: [tectoy, megadrive, sega, sega-megadrive, mods, restauração, recap, manutenção, eletrônica, console, videogame, som-estéreo, audio, retro, retro-gaming, conserto, tutorial, projetos, modding]
---

Olá pessoal! Depois de um bom tempo quieto, fui arrumar alguma coisa para fazer ~~e quebrar~~.

Recentemente comprei um porrada de capacitores para revisar meus consoles antigos, ainda tem um Master System 3 e um Famicom na fila, porém esses ainda tem um adicionar de mod de vídeo componente.

E antes que alguém fale, "Ah, mas por que você não faz um mod RGB, com um SCART e os caramba tudo?"... Simplesmente não, por um lado gosto da "imagem ruim", porém esses 2 em particular infelizmente eles tem só saída RF (aquela de antena de TV), e assim não consigo ligar no meu upscaler. (E se eu quisesse uma imagem super limpa, eu jogaria no emulador, além de exigir um cabo caro que não acha tão fácil assim)

Mas enfim, voltando ao assunto... tudo começou quando pesquisei um dia como fazer o mod de região no meu Megadrive e descobri que não existe ~~um puto~~ de documentação da minha versão, que é uma versão de meados de 2000 da Tectoy, no qual pode [**ver aqui**](https://github.com/zenaror/Anotacoes-Consoles-Retro/tree/main/Sega/Mega%20Drive%20III).

A primeira coisa que pensei na hora, até para facilitar o uso de "uma fonte universal" (vulgo fonte do PS2 Slim), foi tirar o cabo de energia incluso nele, e trocar por um conector em forma de 8 (igual do Playstation com fonte interna), assim não precisa me preocupar de "tira fonte, coloca fonte" (em breve devo comentar sobre). Bem essa foi a parte fácil, como podem imaginar, e eis o resultado!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/06/20251006-092808-thumb.jpg)](/assets/uploads/2025/10/06/20251006-092808.jpg)

Aproveitando o console aberto, aproveitei e fiz a troca de todos capacitores eletrolíticos dele (as torrezinhas verdes). Particularmente achei que foi bem mais fácil que o Super Nintendo, no qual [postei anteriormente](https://zenaror.github.io/2025/08/22/manutencao-preventiva-no-snes-e-como-isso-quase-deu-errado), porém aqui tem muito capacitor... da uma preguiça... mas tomei vergonha na cara e troquei (22 ao todo)!

Aproveitei também e troquei o botãozinho de RESET dele que não estava mais funcionando. Por sorte esse botão é uma chave táctil/push button comum desses de eletrônica de Arduino.

Mas como podem ver, esta tudo muito bom e indo muito bem certo? Mas agora que começa a parte divertida, para o meu desespero!

Quando fui testar os controles, comecei a notar que especificamente na porta 1 do controle, não importasse qual controle eu colocasse, a seta para cima não funcionava nem com reza brava. Já na porta 2 funcionava perfeitamente!

Então qual foi a primeira coisa que pensei? Deve ter algo em curto, alguma trilha rompida (incrível como a gente sempre já pensa no pior!). Então comecei a examinar, mapear o que ia para onde (pois como disse, não tem uma documentação dessa versão), e tudo parecia em ordem!

Foi ai que pensei, "quer saber? vou arrancar esse cabo flat duro e refazer toda essa conexão com fios novos!". E para minha sorte... isso resolveu!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/06/20251006-094809-thumb.jpg)](/assets/uploads/2025/10/06/20251006-094809.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Resultado final. Os novos fios ficaram um pouquinho grande, mas não atrapalha aqui.</font></sup>

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/06/20251006-094933-thumb.jpg)](/assets/uploads/2025/10/06/20251006-094933.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Parte de trás. Como disse, ainda não fiz a carcaça para proteger o conector, e também não sou doido de furar minha carcaça original. Vou tentar reaproveitar o suporte onde encaixava o fio para travar o conector.</font></sup>

Ah sim, e já estava me esquecendo. Por algum motivo, esse console (não sei as outras versões) tem só áudio MONO!
Então fiz só um rápido ajuste, para que o som saísse nos 2 canais, soldando uma "ponte" entre esses 2 pinos.

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/06/ce7e5027-c1da-4732-8bfa-745a6c66361d-thumb.jpg)](/assets/uploads/2025/10/06/ce7e5027-c1da-4732-8bfa-745a6c66361d.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">O mais importante é o pino de baixo. Tanto faz soldar com o acima dele ou do lado.</font></sup>

Isso não te da um som estéreo (por mais que use um amplificador LM324 igual do Super Nintendo), apenas duplica o mesmo canal em ambos os pinos de áudio. (imagino que de para fazer um áudio estéreo, mas não estava afim de estudar de onde vem o áudio dele)

E pronto! Acho que esse vídeo-game agora consegue durar ai outros longos 30 anos!

{:style="text-align:center;"}
[![](/assets/uploads/2025/10/06/20251006-094940-thumb.jpg)](/assets/uploads/2025/10/06/20251006-094940.jpg)

Quando eu fazer a proteção do conector, eu volto aqui para comentar sobre, e também compartilhar os arquivos que usei para imprimir em 3D! Devo fazer isso também no meu Master System 3 e nas minhas fontes de Gamecube e Nintendo 64. (E não... não vou fazer mod USB-C)

Até a próxima e se cuidem!
