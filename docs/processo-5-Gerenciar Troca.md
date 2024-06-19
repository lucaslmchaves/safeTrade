### 3.3.5 Processo 5 – Gerenciar troca
O processo “Gerenciar Troca” na plataforma SafeTrade consiste em encontrar um anúncio de interesse, conversar diretamente com o anunciante e oferecer uma conta em troca e, dependendo da resposta, concluir a troca ou receber uma recusa. Caso a proposta seja aceita, os participantes trocam logins e senhas e avaliam a troca. Para melhorar esse processo, poderia ser implementado um sistema de avaliação automática para as skins, proporcionando aos usuários uma estimativa de valor em tempo real. Além disso, um mecanismo de negociação mais interativo e robusto poderia facilitar as trocas, tornando o processo mais eficiente e agradável para os usuários.

![Processo 5 - Gerenciar Troca](<images/Gerenciar Troca Diagrama.png>)

#### Detalhamento das atividades - Processo 5 - Gerenciar Troca
Navegar pelos anúncios

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Anuncio      | Imagem  | Anuncio escolhido randomicamente pelo banco de dados                                                             | -                 |
| Imagem de Fundo   | Imagem | -                                                                     | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Navegar            | Início do processo de “Navegar pelos anúncios do site"  | default            |
| Voltar ao início             | Fim do processo de navegar pelos anúncios"  | default            |



Escolher o anúncio que deseja

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Botão com texto     | Texto  | Botão padrão de selecionar(submit)                                                               | -                 |
| Anuncio   | Imagem | -                                                                     | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Selecionar              | Início do processo de “troca”  | default            |
| Voltar           | Fim do processo de “escolher o anúncio"  | default            |


Entrar em contato

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| icone      | icon  | icone de contato                                                               | -                 |
| Box com o telefone de contato   | texto | -                                                                     | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Entrar em contato              | Início do processo "Entrar em contato"  | default            |
| Voltar            | Fim do processo "entrar em contato"  | default            |


Propor conta que será trocada

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Botão     | Caixa com texto | botão com texto                                                        | -                 |
| Anúncio   | Imagem | Anúncio escolhido pelo usuário                                                                   | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Realizar proposta             | Início do processo "Realizar proposta"  | default            |
| Cancelar/Voltar           | Fim do processo "Realizar proposta"  | default            |


Conversar com interessado

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Caixa de texto      | Texto  | Caixa de texto sem limite de caracteres                                                             | -                 |
| Botão   | Iniciar conversa | -                                                                     | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Contatar o interessado              | Início do processo de contato com o interessado - após isso encaminhará para o fim do processo de troca  | default            |
| Cancelar          | Fim do processo "Comunicar com o comprador"  | default            |


Sair do ambiente

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
|   Botão com texto   | botão  | botão(submit) que mostrar ao usuário o fim do processo de troca                                                           | -                 |


| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Sair            | Fim do processo de troca  | default            |



Comunicar ao interessado o aceite da conversa

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Caixa de texto para contato      | caixa de texto  | Caixa de texto sem limite de caracteres                                                               | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Contatar o usuário              | Caminha para o início do processo de troca  | default     |



Enviar dados da conta

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Caixa de texto      | caixa de texto para conversa  | caixa de texto que permita a conversa entre o interessado e o trocador.                                                      | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Enviar dados             | Parte para o fim do processo de “troca”  | default            |
| Constatar problema           | Parte para o início do processo de segurança  | default            |



Confirmar troca

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Botão     | submit  | botão com texto padrão do site                                                               | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Aceitar troca              | Fim do processo de “Troca"  | default            |




Reportar

| Campo   | Tipo       | Restrições                                                                  | Valor default |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Caixa de texto     | texto  | caixa para realização do contato com a plataforma                                                              | -                 |
| Caixa de texto   | texto | caixa para a realização de perguntas ou tirar duvidas                                                                | -                 |

| Comandos         |  Destino                                        | Tipo           |
| -------------------- | --------------------------------------------------- | ----------         |
| Reportar              | Fim do processo de troca e início do processo de segurança do site  | default            |
| Enviar duvidas             | início do processo de segurança do site  | default            |
