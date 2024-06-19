### 3.3.1 Processo 1 – Gerenciar Usuário 

O processo “Gerenciar Usuário” na plataforma SafeTrade envolve etapas como acessar a tela de login, verificar a existência da conta, cadastrar ou editar usuários conforme necessário. Uma oportunidade de melhoria seria otimizar a verificação da existência da conta para agilizar o processo. Além disso, poderia ser implementada uma funcionalidade de autoatendimento para que os usuários possam recuperar ou redefinir suas credenciais de forma independente e eficiente.

![Processo 1 - Gerenciar Usuario](<images/Gerenciar Login Diagrama.png>)


#### Detalhamento das atividades - Processo 1 - Gerenciar usuário


Entrar no site -
| *Campo*   | *Tipo* |*Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Logo      | Imagem  | Logo Safe Trade                                                               | -                 |
| Imagem de Fundo   | Imagem | -                                                                     | -                 |


[|comandos|destino|tipo|]

[Entrar | Preencher Dados/Logar | default | ]

* Preencher Dados *

[|campo|tipo|Restrições|Valor Default|]

[ nome | caixa de texto | texto com no máximo 100 carácteres | - ]
[ email | caixa de texto | formato de e-mail| -  ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| - |]
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | - ]
[CPF | número | 11 números | - ]
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | - ]

[|comandos|destino|tipo|]

[|Confirmar| Início do processo “Coletar Dados” | default ]

*Coletar Dados*

| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
[ nome | caixa de texto | texto com no máximo 100 carácteres | - ]
[ email | caixa de texto | formato de e-mail| -  ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| - |]
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | - ]
[CPF | número | 11 números | - ]
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | - ]

[|comandos|destino|tipo|]

[|Salvar dados| Início dos processos “Validar CPF/Verificar Informações” | default ]


*Validar CPF/Verificar Informações * 

| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
[ nome | caixa de texto | texto com no máximo 100 caracteres | Nome cadastrado | ]
[ email | caixa de texto | formato de e-mail | E-mail cadastrado | ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| Senha cadastrada |]
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | Data cadastrada | ]
[CPF | número | 11 números | CPF cadastrado | ]
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | Telefone Cadastrado | ]

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Validar              | Início do processo "Cadastrar Usuário"  | default            |
| Reprovar             | Início do processo "Comunicar ao Usuário"  | default            |


*Cadastrar Usuário *

[|campo|tipo|Restrições|Valor Default|]

[ nome | caixa de texto | texto com no máximo 100 carácteres | nome informado anteriormente ]
[ email | caixa de texto | formato de e-mail| email informado anteriormente  ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| senha informada pelo usuário |]
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | data de nascimento nascimento ]
[CPF | número | 11 números | CPF informado anteriormente ]
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | telefone informado anteriormente ]

[|comandos|destino|tipo|]

[|Confirmar cadastro do usuário | Fim do processo de cadastro | default ]

* Logar * 

[|comandos|destino|tipo|]

[ |Logar| Início do processo de login | default ]

[|campo|tipo|Restrições|Valor Default|]

[ email | caixa de texto | formato de e-mail| email que foi utilizado no cadastro ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| senha informada pelo usuário no cadastro |]
[CPF | número | 11 números | CPF informado anteriormente durante o cadastro ]

*Comunicar ao Usuário*
| *Campo*   | *Tipo*       | *Restrições*                                                                  | *Valor default* |
| ----------- | -------------- | ------------------------------------------------------------------------------- | ----------------- |
| Texto     | Caixa de Texto | Texto padrão                                                             | “Não foi possível fazer o cadastro”                 |

| *Comandos*         |  *Destino*                                        | *Tipo*           |
| -------------------- | --------------------------------------------------- | ----------         |
| Voltar ao Cadastro   | Início do processo "Corrigir Informações"  | default            |


* Corrigir Informações*

| Campo | Tipo | Restrições| Valor Default|

[ nome | caixa de texto | texto com no máximo 100 carácteres | - ]
[ email | caixa de texto | formato de e-mail| -  ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| - |]
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | - ]
[CPF | número | 11 números | - ]
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | - ]

[|comandos|destino|tipo|]

[|Confirmar| Início do processo “Coletar Dados” | default ]

*Cadastrar Usuário 

[|campo|tipo|Restrições|Valor Default|]

[ nome | caixa de texto | texto com no máximo 100 carácteres | nome informado anteriormente ]
[ email | caixa de texto | formato de e-mail| email informado anteriormente  ]
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especial| senha informada pelo usuário |]
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | data de nascimento nascimento ]
[CPF | número | 11 números | CPF informado anteriormente ]
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | telefone informado anteriormente ]


| comandos | destino | tipo |

| Confirmar cadastro do usuário | Fim | default |



* Editar/Salvar *

[|comandos|destino|tipo|]

[ |Salvar| Fim | default ]

[|campo|tipo|Restrições|Valor Default|]

[ nome | caixa de texto | texto com no máximo 100 carácteres | - |
[ email | caixa de texto | formato de e-mail| - |
[ senha| caixa de texto| Mínimo 12 caracteres com no mínimo uma letra, um número e um caractere especia l| - |
[data de nascimento | data | formato dd/mm/aaaa e anterior a data corrente | - |
[CPF | número | 11 números | - |
[telefone | caixa de texto | telefones seguindo o plano de numeração brasileiro | - |
