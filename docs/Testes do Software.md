## 7. Testes do software

Nesta sessão são apresentados os testes realizados no software implementado:

### Plano de Testes

**Caso de Teste** | **CT01 - Cadastrar usuário**
 :--------------: | ------------
**Procedimento**  | Cadastrar novo usuário. |
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro. |
**Resultado obtido** | Dado cadastrado com sucesso. |
**Teste associado** | `UsuarioTest.testNewUser()` |

**Caso de Teste** | **CT02 - Cadastrar usuário já existente**
 :--------------: | ------------
**Procedimento**  | Cadastrar usuário já existente.
**Dados de entrada** | Inserção de dados válidos com nome de usuário já existente no banco.
**Resultado obtido** | Dado não cadastrado.
**Teste associado** | `UsuarioTest.testExistingUser()` |

**Caso de Teste** | **CT03 - Login de usuário**
 :--------------: | ------------
**Procedimento**  | Realizar login com usuário e senha válidos.
**Dados de entrada** | Inserção de dados de login corretos.
**Resultado obtido** | Login realizado com sucesso.
**Teste associado** | `LoginTest.testValidLogin()` |

**Caso de Teste** | **CT04 - Login com dados incorretos**
 :--------------: | ------------
**Procedimento**  | Realizar login com usuário ou senha incorretos.
**Dados de entrada** | Inserção de dados de login incorretos.
**Resultado obtido** | Falha no login.
**Teste associado** | `LoginTest.testInvalidLogin()` |

**Caso de Teste** | **CT05 - Publicar anúncio**
 :--------------: | ------------
**Procedimento**  | Publicar um novo anúncio.
**Dados de entrada** | Inserção de dados válidos no formulário de anúncio.
**Resultado obtido** | Anúncio publicado com sucesso.
**Teste associado** | `AnuncioTest.testNewAnuncio()` |

**Caso de Teste** | **CT06 - Editar anúncio**
 :--------------: | ------------
**Procedimento**  | Editar um anúncio existente.
**Dados de entrada** | Alteração dos dados do anúncio.
**Resultado obtido** | Anúncio editado com sucesso.
**Teste associado** | `AnuncioTest.testEditAnuncio()` |

**Caso de Teste** | **CT07 - Excluir anúncio**
 :--------------: | ------------
**Procedimento**  | Excluir um anúncio existente.
**Dados de entrada** | Identificação do anúncio a ser excluído.
**Resultado obtido** | Anúncio excluído com sucesso.
**Teste associado** | `AnuncioTest.testDeleteAnuncio()` |

**Caso de Teste** | **CT08 - Gerenciar troca**
 :--------------: | ------------
**Procedimento**  | Realizar uma troca de contas.
**Dados de entrada** | Dados das contas a serem trocadas.
**Resultado obtido** | Troca realizada com sucesso.
**Teste associado** | `TrocaTest.testNewTroca()` |

### Avaliação dos Testes de Software

_Discorra sobre os resultados do teste, ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes._

**Resultados do Teste:**

- **Pontos Fortes:**
  - A maioria dos testes de cadastro, login, e anúncio foram concluídos com sucesso, indicando que as funcionalidades básicas estão implementadas corretamente.
  - A interface intuitiva e os processos claros ajudaram a realizar os testes de forma eficiente.

- **Pontos Fracos:**
  - Alguns casos de teste revelaram falhas na segurança, especialmente na validação de dados durante o processo de troca.
  - A ausência de um sistema automatizado de monitoramento de comportamento foi notada, o que pode aumentar a vulnerabilidade a fraudes.

**Ações para Próximas Iterações:**

- **Segurança:**
  - Implementar um sistema de autenticação de dois fatores para aumentar a segurança das contas.
  - Desenvolver um sistema automatizado de monitoramento de comportamento para detectar atividades suspeitas.

- **Usabilidade:**
  - Melhorar a interface de usuário baseada no feedback obtido durante os testes.
  - Adicionar mais filtros de busca e opções de navegação para facilitar a localização de anúncios.

- **Performance:**
  - Otimizar o tempo de resposta do sistema, especialmente durante o processo de troca de contas.
  - Realizar testes de carga para garantir que a plataforma possa lidar com um grande número de usuários simultaneamente.

**Falhas Detectadas e Melhorias:**

- **Falha 1:** Problemas na validação de dados durante a troca de contas.
  - **Melhoria:** Implementar uma validação mais robusta para garantir a autenticidade das contas antes da troca.

- **Falha 2:** Dificuldade de uso na interface de publicação de anúncios.
  - **Melhoria:** Refinar a interface para torná-la mais intuitiva e fácil de usar.

- **Falha 3:** Ausência de notificação sobre atividades suspeitas.
  - **Melhoria:** Implementar notificações automáticas para alertar sobre comportamentos suspeitos.

Essas melhorias serão priorizadas nas próximas iterações de desenvolvimento para assegurar que a plataforma SafeTrade ofereça uma experiência segura, eficiente e agradável para todos os usuários.
