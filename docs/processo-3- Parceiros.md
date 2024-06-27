### 3.3.3 Processo 3 – Parceiros

O processo “Parceiros” na plataforma SafeTrade envolve enviar propostas de parceria, receber respostas e, se aceitas, cadastrar novos parceiros. Uma melhoria seria a implementação de um sistema automatizado para gerenciar propostas, facilitando a comunicação e o acompanhamento do status das negociações. Isso poderia incluir alertas automáticos para seguir com parceiros que não responderam, além de análises preditivas para avaliar a probabilidade de aceitação de propostas, otimizando assim o processo de seleção e cooptação de novos parceiros.

![Processo 3 - Marketing](<images/Marketing Diagrama.png>)

#### Detalhamento das atividades - Processo 3 - Marketing

**Enviar Propostas de Parceria**

| **Campo**   | **Tipo**       | **Restrições**                                                                  | **Valor default** |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Nome do Parceiro | Caixa de texto | Obrigatório                                                                | -                 |
| E-mail      | Caixa de texto | Formato de e-mail                                                               | -                 |
| Proposta    | Área de texto | Obrigatório                                                                      | -                 |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Enviar               | Início do processo "Receber Propostas"  | default            |

**Receber Propostas**

| **Campo** | **Tipo**       | **Restrições**                                   | **Valor default** |
| --------- | -------------- | ------------------------------------------------ | ----------------- |
| Proposta  | Área de texto  | Apenas visualização                              | -                 |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Confirmar Recebimento| Início do processo "Analisar Proposta"  | default            |

**Analisar Proposta**

| **Campo** | **Tipo**       | **Restrições**                                   | **Valor default** |
| --------- | -------------- | ------------------------------------------------ | ----------------- |
| Proposta  | Área de texto  | Apenas visualização                              | -                 |
| Status da reposta | Lista suspensa | Opções: [Aceito, Recusado, Sem Resposta] | Sem reposta       |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Responder            | -              | Sem resposta       |
| Responder            | Início do processo "Responder Aceite de Proposta"              | Aceito       |
| Responder            | Início do processo "Responder Recusa de Proposta"              | Recusado       |

**Responder Recusa de Proposta**

| **Campo** | **Tipo**       | **Restrições**                                   | **Valor default** |
| --------- | -------------- | ------------------------------------------------ | ----------------- |
| Destinatario | Caixa de texto | Formato de e-mail                     | E-mail do remetente inicial                |
| E-mail      | Área de texto | Texto do e-mail                                 | -                 |
| Proposta    | Área de texto | Campo Restrito                                                                      | Proposta enviada                 |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Enviar Recusa        | Início do processo "Falha ao tentar Cooptar"        | default            |

**Falha ao tentar Cooptar**

| **Campo** | **Tipo**       | **Restrições**                                   | **Valor default** |
| --------- | -------------- | ------------------------------------------------ | ----------------- |
| Proposta  | Área de texto  | Apenas visualização                              | -                 |
| Status da reposta | Lista suspensa | Opções: [Aceito, Recusado, Sem Resposta] | Recusado       |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Finalizar       | Fim      | default            |

**Responder Aceite de Proposta**

| **Campo** | **Tipo**       | **Restrições**                                   | **Valor default** |
| --------- | -------------- | ------------------------------------------------ | ----------------- |
| Destinatario | Caixa de texto | Formato de e-mail                     | E-mail do remetente inicial                |
| E-mail      | Área de texto | Texto do e-mail                                 | -                 |
| Proposta    | Área de texto | Campo Restrito                                                                      | Proposta enviada                 |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Enviar Aceite        | Início do processo "Cadastrar Novo Parceiro"        | default            |

**Cadastrar Novos Parceiros**

| **Campo**   | **Tipo**       | **Restrições**                    | **Valor default** |
| ----------- | -------------- | --------------------------------- | ----------------- |
| Nome do Parceiro | Caixa de texto | Obrigatório                  | -                 |
| E-mail      | Caixa de Texto | Formato de e-mail, Obrigatório    | -                 |
| Informações Adicionais | Área de Texto | -                       | -                 |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Cadastrar       | Início do processo "Postar Nova Parceria"        | default            |

**Postar Nova Parceria**

| **Campo**   | **Tipo**       | **Restrições**                    | **Valor default** |
| ----------- | -------------- | --------------------------------- | ----------------- |
| Titulo Postagem | Caixa de texto | Obrigatório                  | -                 |
| Descrição Postagem      | Caixa de Texto | Obrigatório    | -                 |
| Informações Adicionais | Área de Texto | -                       | -                 |

| **Comandos**         |  **Destino**                                        | **Tipo**           |
| -------------------- | --------------------------------------------------- | ----------         |
| Postar       | Fim        | default            |
