# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da Coordenação do Curso de Sistemas de Informação da PUC Minas que devem ser atendidas pelo projeto SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento. Ele terá somente um componente (módulo) com os devidos elementos necessários à gestão de cursos.

### 3.2.2 Missão do produto
Gerenciar informações sobre a oferta de cursos de aperfeiçoamento, gerenciar a composição das turmas, alunos, professores e matrículas. 

### 3.2.3 Limites do produto
O SCCA não fornece nenhuma forma de avaliação de alunos, pagamento de parcelas do curso, pagamento a professore e agendamentos. O SCCA não contempla o atendimento a vários cursos de Sistemas de Informação de outras unidades da PUC Minas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4	| Melhoria na comunicação com os alunos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Usuários |	Processamento de Cadastro, Login, Edição de Perfil, Recuperação de Senha e Exclusão de Contas de Usuários. |
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

![dcu](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe3-t2-g3-pixelnews/blob/main/src/UMLClass.png)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Noticias (CSU01)

Descrição: Este caso de uso descreve como um administrador pode criar, editar, publicar e excluir páginas em um sistema de gerenciamento de conteúdo.

Ator Principal: Administrador

Ator Secundario: Moderador

Partes Interessadas:
- Administrador
- Moderador
- Visitantes do site

Pré-condições:
- O administrador deve estar autenticado no sistema.
- O administrador deve ter permissões adequadas para gerenciar páginas.

Fluxo Principal:

1) 	O moderador/administrador se autenticam no site, acessam a parte de criação de noticias e criam a noticia, com os textose e imagens, além de poder especificar o tempo em que deverá ser publicada.
2)  Após confirmar a publicação da página, duas coisas acontecem:
      - Se for o moderador, é criada uma requisição para publicação ao administrador apovar.
      - Se caso for um administrador realizando o processo de publicar uma noticia, o mesmo não precisa de autorização.
3) 	Após a aprovção do administrador, a postagem criada é publicada no site e fica disponivel para acesso de todos os usuarios.
4) 	Com a publicação feita, a página se torna dispinível para edição pelo moderador que a publicou ou por qualquer administrador.
5) 	Para a pagina poder ser excluida, o moderador deve ser realizar uma nova requisição aos pedidindo para que a pagina possa ser removida, administradores podem remover a página sem precisar de uma aprovação previa.

Fluxos Alternativos:

Erro de Validação: Se o moderador/administrador não preencher todos os campos obrigatórios ao criar ou editar uma página, o sistema exibe uma mensagem de erro e solicita a correção.
Cancelar Ação: O administrador pode cancelar qualquer ação (criar, editar, publicar, excluir) a qualquer momento, retornando à lista de páginas sem fazer alterações.

Pós-condições:
- A página é criada, editada, publicada ou excluída conforme a ação realizada pelo administrador.
- As alterações são refletidas imediatamente no site, se aplicável.

Requisitos Especiais:
- O sistema deve ser capaz de lidar com múltiplos administradores e moderadores simultaneamente.
- O sistema deve manter um histórico de alterações para auditoria.

#### Criação de usuario (CSU02)
Ator Principal: Usuário

Pré-condições:
- O usuário deve ter acesso ao formulário de registro.
- O sistema deve estar online e funcional.

Fluxo Principal:
1) O usuário acessa a página de registro.
2) O usuário preenche o formulário de registro com as seguintes informações:
     - Nome de usuário
     - Senha
     - E-mail
3) O sistema valida as informações fornecidas.
4) Se as informações forem válidas, o sistema cria uma nova conta de usuário e envia um e-mail de confirmação.
5) O usuário recebe o e-mail de confirmação e clica no link para ativar a conta.
6) O sistema ativa a conta do usuário e permite o acesso ao sistema.

Fluxo Alternativo:
- Se as informações fornecidas forem inválidas, o sistema exibe mensagens de erro apropriadas e solicita correções.


#### Atribuição do Cargo de Moderador (CSU03)

Descrição: Este caso de uso descreve como um administrador pode alterar as permissões dos usuarios o site

Ator Principal: Administrador

Pré-condições:
- O administrador deve estar autenticado no sistema.
- O usuário a ser promovido deve ter uma conta ativa.
- O usuário não pode ser promovido além do cargo de Moderador.

Fluxo Principal:
1) O administrador acessa o painel de administração.
2) O administrador navega até a seção de gerenciamento de usuários.
3) O administrador seleciona o usuário que será promovido a moderador.
4) O administrador clica na opção “Promover a Moderador”.
5) O sistema atualiza o cargo do usuário para moderador.
6) O sistema notifica o usuário sobre a nova função.

Fluxo Alternativo:
- Se o usuário não tiver uma conta ativa, o sistema exibe uma mensagem de erro.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema.

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-2-pe3-t2-g3-pixelnews/blob/main/src/diagramaDeClasse.png)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuario |	Acessar e visualizar conteúdo público e o forúm, avaliar e comentar conteúdo do site e forúm, editar perfil pessoal, gerenciar biblioteca de jogos, favoritar conteúdo |
| 2	| Moderador |	Todas as permissões de um usuário comum, editar ou excluir comentários de outros usuários no forúm, moderar discussões e postagens. |
| 3 |	Administrador |	Todas as permissões de um moderador, gerenciar cargos e permissões de todos os usuários, acessar e modificar configurações do sistema; criar, editar ou excluir qualquer conteúdo, bloquear ou desbloquear qualquer usuario, acessar relatórios de atividades suspeitas. |
