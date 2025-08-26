---
title: "A pirataria no Super Nintendo: Coisas para se descobrir 35 anos depois do seu lançamento."
date: 2025-08-26 08:53:34 -0300
permalink: /2025/08/26/a-pirataria-no-super-nintendo-coisas-para-se-descobrir-35-anos-depois-do-seu-lancamento
thumbnail: /assets/uploads/2025/08/26/chatgpt-1756038159291-thumb.jpg
tags: [SNES, Super Nintendo, desbloqueio, pirataria, reparo, jogos piratas, chip CIC, CIC, retro gaming, história dos games, Paraguai, Brasil, consoles antigos, colecionismo, curiosidades]
---

Olá pessoal! 👋🏻

Hoje vim falar de mais algumas descobertas que fiz enquanto jogava com meu SNES, que comentei no post anterior sobre [**troca de capacitores e concerto do meu SNES pessoal**](https://zenaror.github.io/2025/08/22/manutencao-preventiva-no-snes-e-como-isso-quase-deu-errado). 

Mas... o que de tão assim eu descobri que vale a pena ser compartilhando? Mil tretas, e isso era mais comum do que você imagina hahahaha!

Mas vamos lá, tudo começou quando minha esposa pediu para jogar Super Mario World e o jogo simplesmente não ligava! Então fiz o básico, ~~dei aquela soprada com o peito cheio~~ limpei com álcool isopropílico os contatos do cartucho e.... nada. 😅

Então testei outras fitas, vai que eu tinha feito alguma caca na hora do recap e... todas as minhas outras fitas funcionaram! Então fui abrir o cartucho do Super Mario para ver se tinha algum dano nele, como uma trilha rompida, um capacitor vazado, sei lá.

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/26/chatgpt-1756038171114-thumb.jpg)](/assets/uploads/2025/08/26/chatgpt-1756038171114.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Parte da frentedo cartucho</font></sup>

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/26/chatgpt-1756038159291-thumb.jpg)](/assets/uploads/2025/08/26/chatgpt-1756038159291.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Parte de trás do cartucho</font></sup>

Infelizmente essa foto eu tirei depois já de ter tentado refazer a solda dos componentes e sem sucesso ainda. Mas uma coisa qui me chamou atenção... **Onde caceta está o CIC (U4)!?🤔** Todo jogo de Super Nintendo, pirata ou não, por via de regra TEM QUE TER UM CIC! Ele é a trava de pirataria do jogo. E justamente em uma fita original, que veio com meu vídeo-game, não ter esse chip!?🤔

Então comecei a investigar mais a fundo, pedi ajuda nos Reddit da vida, Discord... tudo! E tudo apontava para que o motivo do jogo não ligar, era exatamente a falta do CIC!

### Mas... o que realmente é o CIC?
* Uma explicação bem rápida, tanto no NES como no SNES e N64, o console tinha um chip, que vamos chamar de "fechadura", e quem tinha a chave era o outro chip que ficava nos cartuchos. Para o seu jogo ligar, ambos tinham que se conversar. Mas se o cartucho não tivesse esse chip, seu jogo basicamente não liga, pois ele não tem a chave. O mesmo se aplicava caso você tivesse um cartucho que tivesse a "chave errada".

Mas voltando ao assunto, depois de um tempo pesquisando, achei esse post muito interessante do "Skooter Blog", no qual ele menciona exatamente esse problema: [Cartuchos originais, com o chip CIC roubado.](https://www.skooterblog.com/2019/10/20/ladroes-de-cic-do-snes-mais-um-motivo-para-nao-comprar-cartucho-de-super-nintendo-no-brasil/) Aparentemente, como muito desses consoles/jogos vinham do Paraguai e a pirataria rolava mais solta ainda, era muito os cartuchos originais virem sem esse chip e o console desbloqueado e.... pera... **DESBLOQUEADO!?😱** Será meu console de infância era desbloqueado e eu deixei passar algo quando fiz o recap!?

Então abri meu console e olhei... e olhei... e olhei... e não achei nada suspeito/diferente do padrão de fábrica! Então comecei a suspeitar de que o problema não era **APENAS** o cartucho, mas também o console em si!

Foi ai que mudei minha pesquisa e comecei a pesquisar sobre como era feito o desbloqueio do SNES e de modificados daquela época. Até que me deparei com esse tópico no Reddit, que [tinha uma particularidade muito semelhante](https://www.reddit.com/r/retrogaming/comments/j9qtsb/hi_so_i_have_this_snes_snscpugpm02_the_video/), o chip do CIC do console tinha EXATAMENTE a mesma "marca" que o meu, que [pode ser vista nessa foto](https://github.com/zenaror/Anotacoes-Consoles-Retro/tree/main/Nintendo/Super%20Nintendo) que tirei quando abri o console pela primeira vez.

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/26/screenshot-20250825-135415-firefox-thumb.jpg)](/assets/uploads/2025/08/26/screenshot-20250825-135415-firefox.jpg)

{:style="text-align:center;"}
<sup><font color="#C0C0C0">Zoom do chip CIC do meu console antes do recap, notem que ele tem a mesma "marca", circulada em azul, do chip da postagem do Reddit</font></sup>

Foi aqui que notei... isso não é uma marca... **É A PORCARIA DA PERNA/PINO DO CHIP QUE LEVANTARAM!🤬** E para ajudar, quando fui fazer o recap, não me atentei a isso. achei que fosse alguma farpa de metal, uma solda mal feita, sei lá eu... mas eu notei que era um pouco mais duro que o normal e consegui abaixar novamente a perna e fazer contato com a trilha devida. E o que aconteceu? Meu console ficou bloqueado novamente!

Agora fazia todo sentido do mundo! O pessoal roubava o CIC do cartucho original para usar em fitas paralelas, desativavam o CIC do console levantando esse pino, o jogo funcionava, e o dono NUNCA IRIA NOTAR! Porém eu notei... muitos anos depois. Por sorte, hoje existem projetos na internet, como o [**SuperCIC**](https://sd2snes.de/blog/cool-stuff/supercic) que permitem agir como um "clone" do CIC original, tanto no console, como no cartucho. Futuramente irei tentar instalar um no meu cartucho do Super Mario, seguindo esse ótimo guia do [DBWBP, no qual usa um PIC12F629](https://www.dbwbp.com/index.php/10-electronic-projects/24-snes-cart-region-free-modification-replacing-cic-lockout-chip-with-supercic). Inclusive penso até em vender futuramente o chip já programado, para quem tiver interesse em substituir no seu cartucho que tenha a mesma situação, caso de sucesso!

O fato do console ter o chip CIC desabilitado, permitia que qualquer jogo rodasse, mesmo que o cartucho não tivesse o CIC. Mas se o CIC estivesse ligado, seu cartucho precisava ter um chip CIC lá para validar.

E qual o problema nisso? Sinceramente nenhum, em partes... até a Nintendo começar a lançar chips, como o S-DD1 e SA1,  que verificavam a presença desse bendito (aliás isso foi o que melhorou a trava de segurança do N64). Tudo bem que não são muitos jogos que realmente faziam isso, meu Super Mario Kart usa o DSP-1 e ele roda normalmente. Porém vai lá tentar comprar um "Super Mario RPG" para ver se você vai conseguir jogar. Provavelmente hoje, na era dos "Everdrive" isso não importe muito, mas para alguém que coleciona ou quer jogar da fita original, isso pode ser um problemão!

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/26/fx-thumb.jpg)](/assets/uploads/2025/08/26/fx.jpg)


{:style="text-align:center;"}
<sup><font color="#C0C0C0">Foto do FxPak Pro (antigo SD2SNES). Ele já possui o Super CIC internamente. Além de suportar quase todos chips especiais do SNES.</font></sup>

Não sei na época, mas hoje é bem comum você achar pessoas que ligavam uma chave seletora nesse pino levantado para ligar e desligar esse chip quando necessário, permitindo jogar esse jogos que exigiam a presença do CIC no console. Por sorte no meu console a perna estava apenas levantada, seria fácil fazer esse ajuste, mas achei relatos de consoles com esse pino cortado.

Mas então, como ficou minha situação? Aqui começou mais uma dor de cabeça minha! Quando ergui esse pino novamente para poder testar o Super Mario, notei que ela estava já mais mole que dente de criança, foi aqui que pensei... "Ferrou, isso vai cair!" foi dito e feito 😰

Juro para vocês, passei quase um dia inteiro tentando prender algum jumper ou algo assim nesse resto de pino que sobrou sem sucesso. E para ajudar ele quebrou super rente ao encapsulamento, então soldar aqui beira quase o impossível!

Então utilizei meu último recurso, tentar desbastar o encapsulamento bem onde quebrou, para tentar pegar um contato um pouco melhor e permitir a solda. Nessa hora, pensa num gelo enorme e num buraco que não passava nem sinal de Wi-fi 😅. Então peguei minha microrretífica e com a ponteira mais fina que encontrei comecei a desbastar o chip *(me senti igual o pessoal que faz o "Mod Kamikaze" do Switch para poder fazer o desbloqueio)*, 
com muito cuidado para não danificar nada por dentro e nem tirar mais do que eu deveria. Então depois de uma meia hora, finalmente consegui um pouquinho mais de área de contato. Então passei mais algumas horas para tentar fazer a ponte, até que finalmente consegui 😍

{:style="text-align:center;"}
[![](/assets/uploads/2025/08/26/20250826-104753-thumb.jpg)](/assets/uploads/2025/08/26/20250826-104753.jpg)


{:style="text-align:center;"}
<sup><font color="#C0C0C0">Depois que 1 dia todo de trabalho, eis que consegui refazer!</font></sup>

Agora o console voltou a ser "de fábrica", infelizmente meu Super Mario não funciona mais por conta disso, mas todas as outras fitas sim. Porém esse reparo ainda não terminou, essa solda ficou extremamente sensível, vou comprar uma máscara de solda e uma luz UV para dar um acabamento nisso e ficar preso por definitivo! Além de proteger a emenda. Quanto ao Mario, como falei, futuramente vou instalar um SuperCIC nele, para que ele volte a funcionar.

E acho que por hoje é só! Quis compartilhar essa jornada/descoberta pois pode ter sido por isso que seu Super Nintendo no passado não lia uma fita, mas no console do amiguinho lia, ou até meio o motivo de um jogo específico nunca ter funcionado, mesmo que original! 

Mas se eu fosse dar uma dica para alguém que tem um console na mesma situação que o meu, com o chip CIC com pino levantado, seria **NÃO TENTE ABAIXAR O PINO**! Ao invés disso, tente ligar uma chave seletora (um simples interruptor mesmo) e deixar do lado de fora do console para que você possa ligar e desligar esse chip sempre que necessário. A ligação aqui é bem simples, esse pino é ligado na linha de VCC/5v do console. Porém quando desligado, recomendo deixar essa linha no terra/GND do console (pode pegar qualquer ponto de GND) para evitar qualquer problema. **Mas faça isso só se você realmente precisar ligar esse chip novamente!**

E é isso! Espero poder ajudar alguém que teve/está tendo esse tipo problema com essa minha jornada!

Até a próxima! 😁
