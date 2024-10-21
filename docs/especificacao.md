# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Constarão a seguir os detalhamentos dos requisitos do sistema.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades dos usuários que devem ser atendidas pelo projeto Portal de Notícias e Lançamentos do Mundo dos Videogames.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será um Portal de Notícias e Lançamentos do Mundo dos Videogames com o nome “PIXELNEWS”. Ele será composto por sete componentes (módulos), com elementos necessários à gestão de contas de usuário, publicação de notícias, avaliações e comentários, pesquisa e filtros avançados, gestão de conteúdo visual, sistema de notificações e feed personalizado, além de uma interface do usuário (UI) intuitiva e um banco de dados robusto.

### 3.2.2 Missão do produto
Fornecer uma plataforma interativa e abrangente para que os jogadores possam acessar as últimas notícias e lançamentos do mundo dos videogames, bem como avaliar, comentar e compartilhar suas opiniões sobre jogos, criando uma comunidade engajada e colaborativa, enquanto recebem informações atualizadas e personalizadas que enriquecem sua experiência gamer.

### 3.2.3 Limites do produto
O Portal de Notícias e Lançamentos do Mundo dos Videogames não fornece integração direta com plataformas de e-commerce para a compra de jogos ou acessórios. Além disso, o sistema não realiza curadoria automática ou moderação prévia dos comentários, avaliações ou conteúdos publicados pelos usuários, sendo necessário monitoramento manual ou por denúncias da comunidade para evitar abusos.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Acesso rápido e atualizado a notícias e lançamentos de jogos |	Essencial |
|2 | Ferramentas de avaliação de comentarios sobre jogos e notícias | Essencial | 
|3 | Personalização de feed e notificações de interesse gamer | Essencial | 
|4	| Pesquisa avançada e filtragem por gênero, plataforma, e data de lançamento | Essencial | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Usuários |	Processamento de Cadastro, Edição de Perfil, Recuperação de Senha e Exclusão de Contas de Usuários. |
| RF2 | Gerenciar Notícias	| O sistema deve permitir aos administradores criar, editar, publicar e excluir notícias relacionadas a lançamentos e atualizações no mundo dos jogos. |
| RF3	| Avaliar e Comentar Jogos |	Processamento de Avaliações de Jogos com Pontuação de 1 a 5 Estrelas e Publicação de Comentários em Notícias e Análises de Jogos. |
| RF4 |	Pesquisar e Aplicar Filtros	| Processamento de Pesquisa de Jogos, Notícias e Análises por Palavras-Chave e Aplicação de Filtros por Gênero, Plataforma, Data de Lançamento, entre Outros. |
| RF5 |	Gerenciar Conteúdo Visual	| Processamento de Upload, Gerenciamento e Exibição de Conteúdo Visual (Gráficos, Trailers, Imagens) para Complementar Notícias e Análises de Jogos. |
| RF6 |	Enviar Notificações Personalizadas	| Processamento de Envio de Notificações Automáticas com Base nas Preferências e Histórico de Navegação dos Usuários, Atualizando o Feed com Conteúdo Personalizado. |
| RF7 |	Facilitar Interação Social	| Processamento de Funcionalidades de Interação Social, Permitindo Comentários, Curtidas e Compartilhamentos de Conteúdos pelos Usuários. |
| RF8 |	Enviar Notificações Push	| Processamento de Envio de Notificações Automáticas sobre Novos Lançamentos de Jogos, Atualizações de Notícias e Respostas a Comentários, Tanto no Site Quanto via E-mail. |
| RF9 |	Gerenciar Eventos	| O sistema deve permitir a criação, edição, divulgação e exclusão de eventos de jogos, com detalhes como data, horário e informações adicionais. |
| RF10 |	Receber Feedback dos Usuários	| Processamento de Recebimento de Feedback dos Usuários sobre a Plataforma e Seus Conteúdos, Facilitando Melhoria Contínua do Site. |
| RF11 |	Gerenciar Biblioteca de Jogos	| O sistema deve permitir ao usuário adicionar, editar, excluir e visualizar sua biblioteca de jogos, incluindo informações detalhadas de cada jogo. |
| RF12 |		Gerenciar Fórum	| O sistema deve permitir a criação, edição, exclusão e moderação de tópicos e discussões no fórum, incluindo a capacidade de responder e interagir com outros usuários. |
| RF13 |		Login	| 	O sistema deve permitir que os usuários façam login utilizando suas credenciais (e-mail e senha) de maneira segura. |
| RF14 |		Logout	| 	O sistema deve permitir que os usuários façam logout de suas contas, encerrando sua sessão de maneira adequada e segura. |
| RF15 |			Gerenciar Jogos	| 	O sistema deve permitir aos administradores criar, editar, visualizar e excluir jogos, incluindo detalhes como nome, descrição, plataforma e data de lançamento. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RNF1 | Compatibilidade | O sistema deve ser compatível com múltiplos dispositivos e navegadores, incluindo desktops, tablets e smartphones, e ser responsivo para diferentes resoluções. | 
| RNF2 | Usabilidade | O portal deve proporcionar uma interface intuitiva e de fácil navegação, com uma curva de aprendizado mínima, permitindo o uso por usuários de diferentes perfis. |
| RNF3 |	Segurança | O portal deve utilizar criptografia SSL para proteger a comunicação de dados, especialmente informações de login e senha dos usuários. |
| RNF4 |	Desempenho |	O sistema deve carregar páginas em menos de 3 segundos em uma conexão padrão de internet. |
| RNF5 |	Escalabilidade |	O portal deve ser escalável para suportar um grande número de acessos simultâneos, especialmente durante eventos de grande tráfego, como lançamentos de jogos. |
| RNF6 |	Backup |	O sistema deve realizar backups automáticos diários, garantindo a recuperação em caso de falhas. |
| RNF7 |	Disponibilidade |	O portal deve ter alta disponibilidade, com 99% de uptime, exceto durante as janelas de manutenção previamente agendadas. |
| RNF8 |	Acessibilidade |	O portal deve seguir as diretrizes de acessibilidade (WCAG), permitindo o uso por pessoas com diferentes deficiências. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Usuário Regular |	Usuário regular do sistema que pode visualizar e interagir com o conteúdo, como jogos, notícias e fóruns, além de comentar e avaliar, sem permissões administrativas. |
| Moderadores |	Usuários responsáveis por monitorar e moderar o conteúdo gerado por outros usuários, incluindo a exclusão de comentários e tópicos impróprios no fórum. |
| Administradores |	Usuários com acesso total ao sistema, responsáveis pela criação, edição e exclusão de jogos, notícias, eventos e pelo gerenciamento de usuários. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, tanto moderador quanto o administrador, podem realizar diversas alterações referentes a parte de funcionamento das postagens, já o usuario comum, pode somente se auto editar e visualizar as postagens

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](../src/UseCase.svg)
 
### 3.4.2 Descrições de Casos de Uso

#### Login (CSU01)

Descrição: O usuario comum pode acessar o sistema através de suas credenciais.

Ator Principal: Usuario regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- o usuario deve estar cadastrado no sistema.

**Fluxo Principal**

 1) O usuário acessa a pagina de login e informa o usuário e senha.
 2) O sistema realiza a validação do login do usuário.
 3) Caso a senha esteja correta, o usuario poderá acessar o sistema e esse caso de uso se encerra; caso contrario o é retornado ao passo 1.

**Pós-condições:** O usuário tem acesso a informações como o seu perfil e as funcionalidades do forum.

*****

#### Logout (CSU02)

Descrição: O usuario comum pode sair do sistema e deixar de acessar as funcionalidades do site.

Ator Principal: Usuario regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- o usuario deve estar autenticado no sistema.

**Fluxo Principal**

 1) O usuário acessa a pagina de perfil e clica na opção "Sair".
 2) O sistema realiza a validação do logout do usuário.
 3) O usuário irá retornar a tela de login.

**Pós-condições:** O usuário deixa de ter acesso a informações como o seu perfil e as funcionalidades do forum, precisando realizar um novo "Login" para que possa retomar o acesso a conta.

***

#### Avaliar e comentar Jogos (CSU03)

Descrição: O usuario comum pode realizar uma avaliação de um jogo e atribuir nota.

Ator Principal: Usuario regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- o usuario deve estar autenticado no sistema.

**Fluxo Principal**

 1) O usuário acessa a página do jogo dentro do site.
 2) O usuário escreve a sua avaliação sobre o jogo, com um breve texto e uma pontuação entre 0 e 5.
 3) O usuário clica em publicar avaliação.
 4) O sistema processa o texto e o adiciona a pagina do Jogo na parte de avaliações.

**Pós-condições:** O usuário tem sua avaliação publicada no site e qualquer outro usuario poderá visualizar.

***

#### Pesquisar e aplicar filtros (CSU04)

Descrição: O usuario pode realizar uma pesquisa para encontrar determinado jogo, utilizando palavras chaves e filtros.

Ator Principal: Usuario regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- o usuario deve estar autenticado no sistema.

**Fluxo Principal**

 1) O usuário acessa a página de buscas dentro do site e realiza a inserção de uma palavra chave na aba de buscas.
 2) O usuário clica em "Buscar Jogo" e uma lista de jogos será apresentada.
 3) O usuário poderá selecionar filtros para melhorar os resultados encontrados.


**Pós-condições:** É apresentado ao usuário uma lista de jogos baseados nas palavras chaves e filtros aplicados.

***

#### Gerenciar biblioteca de Jogos (CSU05)

Descrição: O usuario possui uma lista de jogos em que pode adicionar, remover, favoritar jogos.

Ator Principal: Usuario regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- o usuario deve estar autenticado no sistema.

**Fluxo Principal**

 1) O usuário acessa a página de um jogo dentro do site.
 2) O usuário clica na opção "adicionar a Lista".
 3) Irá mostrar um popup para o usuário solicitando para que ele escolha qual lista de jogos que deseja adicionar o jogo.
 4) Ao selecionar a lista, irá aparecer uma notificação mostrando que o jogo foi adicionado a lista determinada pelo usuário.


**Pós-condições:** O usuário tem um novo jogo adicionado a lista de jogos em sua biblioteca e poderá acessa-los a qualquer momento.

***

#### Facilitar interação social (CSU06)

Descrição: Moderadores ou Administradores possuem recursos para facilitar a interação entre os usuários, dentre esses recurso está a divulgação de uma pagina ou conteudo especifico (Highlight), destacar comentarios de postagens do forúm.

Ator Principal: Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- O Moderador deve estar autenticado no sistema.

**Fluxo Principal**
 1) O moderador acessa o forúm e nas abas de discursão
 2) O moderador poderá selecionar algum comentario em alguma postagem e ativaria a função de destaque para esse comentario.
 3) O sistema processa a solicitação e adicona um indicação de comentario "destaque".

**Fluxo Alternativo: Inclusão**
1) O moderador realiza uma postagem no forúm e seleciona a opção de "Postagem Divulgação".
2) Após selecionar realizar a publicação da postagem, o sistema irá processar e depois irá notificar que o conteúdo foi publicado no site. 


**Pós-condições:** A postagem de divulgação é mostrada no forúm para todos os usuarios como postagem prioritaria, porém com uma prioridade abaixo das postagens de aviso.

***

#### Gerenciar Forúm (CSU07)

Descrição: Os usuários realizam a gestão do forum, podendo adicionar e editar conteúdos proprios. Os Moderadores e Administradores podem realizar as mesmas funções com a adição de que podem editar e remover conteúdos dos quais não foram de autoria dos mesmos, como também possuem a permissão para excluir comentarios e postagens, como também banir usuários.

Ator Principal: Usuário Regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- O usuários deve estar autenticado no sistema.

**Fluxo Principal**

 1) O usuário acessa o forúm e realiza o procedimento para realizar uma postagem.
 2) Após o processamento do sistema, a postagem se encontra disponivel para todos os usuários com acesso ao forúm.

**Fluxo alternativo: Inclusão**
1) O usuário pode acessar uma postagem ou comentario no forúm e realizar um comentario a partir de uma área dedicada a comentarios.
2) O uruário pode curtir o comentario clicando no icone de "like".

**Fluxo Alternativo: Alteração**
1) O usuário acessa a sua propria postagem e seleciona a opção de editar postagem.
2) Irá abrir uma tela em que será possível do usuario editar a postagem que realizou.
3) Após a edição, o sistema irá apresentar uma notificação informando que a alteração foi realizada com sucesso.

**Fluxo Alternativo: Exclusão**
1) O moderador selecionar a postagem ou comentario desejado e seleciona a opção de excluir.
2) Será apresentada um popup que perguntará o motivo da exclusão do comentario ou postagem.
3) O sistema irá notificar o administrador que irá aprovar a exclusão ou não.
4) Caso aceite, o item em questão será deletado, porém caso o administrador não aprove a exclusão, o conteúdo irá permanecer no site.

**Pós-condições:** O usuário tem sua postagem no forúm realizada e poderá futuramente edita-la ou receber curtidas e repostagens.

***

#### Gerenciar Conteúdo Visual (CSU08)

Descrição: O moderador pode realizar publicações no site principal e realizar edições também no conteúdo que publicaram.

Ator Principal: Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- O Moderador deve estar autenticado no sistema.

**Fluxo Principal**

 1) O moderador acessa o site e realiza o procedimento para realizar uma publicação.
 2) Após o processamento do sistema, a publicação se encontra disponivel para todos os usuários com acesso ao site.

**Fluxo Alternativo: Alteração**
1) O moderador acessa a sua propria publicação e seleciona a opção de editar publicação.
2) Irá abrir uma tela em que será possível do usuario editar a publicação que realizou.
3) Após a edição, o sistema irá apresentar uma notificação informando que a alteração foi realizada com sucesso.

**Fluxo Alternativo: Exclusão**
1) O moderador selecionar a publicação desejada e seleciona a opção de excluir.
2) Será apresentada um popup que perguntará o motivo da exclusão da publicação.
3) O sistema irá notificar o administrador que irá aprovar a exclusão ou não.
4) Caso aceite, o item em questão será deletado, porém caso o administrador não aprove a exclusão, o conteúdo irá permanecer no site.

**Pós-condições:** O moderador tem sua publicação no site realizada e poderá futuramente edita-la.

***

#### Gerenciar Usuário (CSU09)

Descrição: Os usuários realizam a gestão de usuário, podendo editar o perfil proprios. 

Ator Principal: Usuário Regular, Moderdores ou Administradores

Ator Secundário: Não possui

Pre-condições:
- O usuários deve estar autenticado no sistema.

**Fluxo Principal**
1) O anonimo acessa a pagina de criação de usuario e insere todas as credenciais requeridas pelo sistema.
2) O sistema irá mandar um pedir uma confirmação no email.
3) Após a confirmação, o usuario é criado e poderá ser acessado através das credenciais relacionadas.

**Fluxo Alternativo: Alteração** 
 1) O usuário acessa a pagina de perfl e acessa as opções de edição de perfil.
 2) o usuário realiza as edições desejadas no perfil.
 3) Após o processamento do sistema as alterações realizadas se encontraram disponíveis o perfil do usuário.


**Pós-condições:** O usuário tem o seu perfl criado e pode acessar as funcionalidades do site e forúm.

***

#### Gerenciar Eventos (CSU10)

Descrição: O administrador pode criar, editar e excluir eventos no sistema.

Ator Principal: Administradores

Ator Secundário: Não possui

Pre-condições:
- O Administrador deve estar autenticado no sistema.

**Fluxo Principal**
 1) O Administrador acessa o sistema na pagina de eventos e vai na opção de novo evento.
 2) O sistema irá requisitar descrições e funcionalidades que devem ser  inseridas na descrição do evento. Após isso, o Administrador seleciona a opção "Criar Evento".
 3) O sistema irá processar a solicitação e apresentará para todos os usuarios logados no site. 

**Fluxo Alternativo: Alteração**
1) O Administrador pode realizar alterações no evento a qualquer hora, desde inserir novas informações, alterar os status do evento.
2) Qualquer administrador pode encerrar ou suspender algum evento.

**Fluxo Alternativo: Exclusão**
1) O administrador opta por excluir o evento do sistema
2) Ele acessa as configurações de edição do sistema.
3) Altera o status do evento para "Finalizado" ou "Suspenso".
4) Realiza a exclusão do evento.

**Pós-condições:** O evento é criado e todos os usuários autenticados no site podem visualizar.

***

#### Receber Feedback dos usuários (CSU11)

Descrição: Os usuários enviam feedback sobre o site/forúm para o sistema, essa infomação para os administradores.

Ator Principal: Administradores

Ator Secundário: Usuário Regular

Pre-condições:
- O usuários deve estar autenticado no sistema.

**Fluxo Principal**

 1) O usuário acessa o seu perfil e seleciona a opção feedback.
 2) O usuário escreve uma sugestão de melhoria ou feedback e envia.
 3) O sistema processa e a mensagem aparece na tela de mensagens para o Administrador.

**Pós-condições:** O usuário tem sua sugestão de feedback enviada ao painel princiapal do site.

***

#### Gerenciar Noticias (CSU12)

Descrição: Os administradores podem realizar a criação, edição e exclusão de noticias no site. As noticias são sobre novos jogos que estão para serem lançados ou de algumas novidades que envolvam o mercado dos Games.

Ator Principal: Administradores

Ator Secundário: Usuario Regulares

Pre-condições:
- O administrador deve estar autenticado no sistema.

**Fluxo Principal**

 1) O administrador acessa a pagina de criação de noticias dentro do site e acessa a aba de criação de noticias.
 2) O sistema irá solicitar descrição, imagens e fontes.
 3) Após serem inseridas as informações e selecionada a função de "Criar noticia", o sistema irá processar e será publicada a noticia.
 4) Com a noticia publicada, ela será visivel para todos os usuarios e visitantes do site.


**Fluxo alternativo: Inclusão**
1) O usuário autenticado pode criar um comentario nas noticias a partir da aba de comentarios.
2) O comentario do usuário pode receber "gostei" e pode ser denunciado.


**Fluxo Alternativo: Alteração**
1) O administrador pode realizar a edição na noticia através da seção de edição de noticia
2) Ao clicar no botão de edição, irá aparecer um formulario para edição.
3) após a edição, será possível aplicar as mudanças através da opção "Salvar".
4) O sistema vai processar as informações alteradas e as mesmas serão aplicadas imediatamente.

**Fluxo Alternativo: Exclusão**
1) O administrador pode realizar a exclusão de uma noticia através da seção de edição de noticia.
2) Ao clicar no botão de edição, irá aparecer a opção de excluir noticia do site.
3) O sistema irá requisitar a confirmação.
4) Após confirmada, a noticia será excluida do site, caso contrario, irá permanecer no site.

**Pós-condições:** A noticia é publicada no site e todos os usuarios e visitantes do site podem visualiza-las.

***

#### Gerenciar Jogos (CSU13)

Descrição: O administrador realiza a gestão(Validação, inserção, edição e exclusão) dos jogos que estarão dentro do site e que poderão ser inseridos nas bibliotecas dos usuários.

Ator Principal: Administradores

Ator Secundário: Não possui

Pre-condições:
- O administrador deve estar autenticado no sistema.

**Fluxo Principal**

 1) O administrador acessa a pagina de gerenciamento de jogos dentro do site e acessa a aba de adição de novo Jogo.
 2) O sistema irá solicitar descrição, imagens e fontes.
 3) Após serem inseridas as informações e selecionada a função de "adicionar Jogo", o sistema irá processar e o jogo estará disponível para ser acessado no site.
 4) Com o novo jogo adicionado, todos os usuarios autenticados poderão adiciona-lo as suas proprias bibliotecas.


**Fluxo alternativo: Inclusão**
1) O usuário autenticado pode criar uma avaliação do jogo e avaliar com pontuação.

**Fluxo Alternativo: Alteração**
1) O administrador pode realizar a edição do Jogo através da seção de edição de jogos, no painel de jogos.
2) Ao clicar no botão de edição, irá aparecer um formulario para edição.
3) após a edição, será possível aplicar as mudanças através da opção "Salvar".
4) O sistema vai processar as informações alteradas e as mesmas serão aplicadas imediatamente.

**Fluxo Alternativo: Exclusão**
1) O administrador pode realizar a exclusão de um jogo através da seção de edição de Jogos.
2) Ao clicar no botão de edição, irá aparecer a opção de excluir o jogo do site.
3) O sistema irá requisitar a confirmação.
4) Após confirmada, o jogo será excluida do site, caso contrario, irá permanecer no site.

**Pós-condições:** O jogo é publicado no site e todos os usuarios autenticados do site podem visualiza-lo e adiciona-lo as suas bibliotecas para que possam realizar uma avaliação posterior.

***

#### Enviar notificações personalizadas (CSU14)

Descrição: O sistema envia notificações personalizadas para o usuário a partir da biblioteca de jogos do usuário.

Ator Principal: Tempo

Ator Secundário: Usuário

Pre-condições:
- O usuários deve estar autenticado no sistema.

**Fluxo Principal**
 1) O usuario acessa o perfil e seleciona a opção de receber notificações nas configurações de perfil.
 2) Após a permissão, o sistema irá enviar notificações personalizadas ao usuário.

**Pós-condições:** O usuário recebe notificações personalizadas em seu perfil na seção de notificações de sistema.

***

#### Enviar notificações push (CSU14)

Descrição: O sistema envia notificações personalizadas para o usuário a partir do jogos que o usuário determinou que fosse enviada a notificação.

Ator Principal: Tempo

Ator Secundário: Usuário

Pre-condições:
- O usuários deve estar autenticado no sistema.

**Fluxo Principal**
 1) O usuario acessa o perfil e seleciona a opção de "Receber notificações Push" nas configurações de perfil.
 2) Após a permissão, o sistema irá enviar notificações personalizadas ao usuário baseadas nos jogos que o usuario marcar para receber a notificação Push.

**Pós-condições:** O usuário recebe notificações personalizadas em seu perfil na seção de notificações de sistema.

### 3.4.3 Diagrama de Classes 


#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](..//src/DiagramaClasse.svg)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	| Usuario |	Acessar e visualizar conteúdo público e o forúm, avaliar e comentar conteúdo do site e forúm, editar perfil pessoal, gerenciar biblioteca de jogos, favoritar conteúdo |
| 2	| Moderador |	Todas as permissões de um usuário comum, editar ou excluir comentários de outros usuários no forúm, moderar discussões e postagens. |
| 3 | Administrador |	Todas as permissões de um moderador, gerenciar cargos e permissões de todos os usuários, acessar e modificar configurações do sistema; criar, editar ou excluir qualquer conteúdo, bloquear ou desbloquear qualquer usuario, acessar relatórios de atividades suspeitas. |
| 4 | Sistema | Realiza as funções enviar notificações ao usuário sobre atualizações do site e notifica sobre coisas relacionadas a jogos especificados pelo usuário |
| 5 | Jogo | Contem todas as informações relacionadas a um determinado jogo, esse mesmo podendo receber avaliações dos usuários do site |
| 6 | BibliotecaJogo | Lista de jogos favoritados pelos usuários |
| 7 | Avaliacoes | Dados criados pelos usuários para avaliar um determinado jogo e atribuir uma nota de 1 a 5. |
| 8 | Pesquisar | Encontra determinado jogo a partir de palavras chave e filtros que podem ser especificados pelo usuário. |
| 9 | PostagemForum | Comentario no forum realizado por qualquer usuário, pode ser respondido com outros comentarios ou postagem, podem receber curtidas (likes) ou descurtidas (dislike) |
| 10 | Forum | Area do site dedicada a discursões e conversar entre os usuários, o Moderador e o Administrador têm acesso a funcionalidades exclusivas, o forum não permite usuários banidos entrarem, os comentarios e discursões podem ser realizadas a qualquer horário |