#### 3.3.2. Processo 2 – Gerenciar Anúncio

O processo de gerenciamento de anúncios na plataforma SafeTrade inclui o preenchimento de detalhes do anúncio, publicação, edição ou exclusão do mesmo, monitoramento de anúncios ativos. Uma melhoria significativa seria a integração de uma ferramenta analítica que fornece métricas de desempenho em tempo real, permitindo ajustes estratégicos para aumentar a visibilidade.

![Processo 2- Gerenciar Anuncio](<images/Gerenciar Anuncio Diagrama.png>)


#### Detalhamento das atividades - Processo 2 - Gerenciar Inventário

Acessar "Meus Anúncios"

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Meus Anúncios        | Início do processo "Selecionar um anúncio"  | default            |
| Criar Novo Anúncio             | Início do processo "Criar novo anúncio"  | default            |


Selecionar um anúncio

| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Anúncio     | Seleção Única | Escolher apenas 1                                                              | -                 |

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Editar              | Início do processo "Editar anúncio"  | default            |
| Excluir              | Início do processo "Excluir anúncio"  | default            |

 
Excluir anúncio

| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Anúncio     | Seleção Única | Anúncio não é mais selecionável                                         | Anúncio escolhido na tela anterior                 |

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Confirmar Exclusão              | Fim do processo  | default            |


Editar anúncio

| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Anúncio     | Seleção Única | Anúncio não é mais selecionável                  | Anúncio escolhido na tela anterior                 |
| Título      | Caixa de texto  | Máximmo 20 caracteres                                                   | -                  |
| Descrição      | Área de texto | Máximmo 100 caracteres                                                   | -                  |


| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Confirmar Edição              | Início do processo “Salvar” | default            |


Salvar 

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Salvar             | Fim do processo  | default            |


Criar novo anúncio

| Criar Novo Anúncio             | Início do processo "Preencher Informações"  | default            |


Preencher Informações

| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Título      | Caixa de texto  | Máximo 20 caracteres                                                   | -                  |
| Descrição      | Área de texto | Máximo 100 caracteres                                                   | -                  |


| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Confirmar               | Início do processo “Salvar Anúncio” | default            |

Salvar Anúncio

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Salvar              | Fim do processo  | default            |
