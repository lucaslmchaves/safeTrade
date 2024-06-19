### 3.3.4 Processo 4 – Gerenciar Reputação

O processo “Gerenciar Reputação” na plataforma SafeTrade envolve a identificação e punição de usuários que tentam realizar scams, protegendo a comunidade de práticas fraudulentas. Uma melhoria significativa seria a implementação de um sistema automatizado de monitoramento de comportamento, que utilizaria algoritmos para detectar padrões suspeitos e alertar sobre possíveis tentativas de fraude. Além disso, a criação de um painel de controle para que os usuários possam reportar atividades suspeitas e a integração de um sistema de avaliação de reputação baseado em feedback dos usuários após cada transação, contribuiriam para um ambiente mais seguro e transparente.

![Processo 4 - Gerenciar Reputação](<images/Gerenciar Reputação Diagrama.png>)


#### Detalhamento das atividades - Processo 4 - Gerenciar Reputação 
Realizar uma ação na plataforma

|   *Campo*    |  *Tipo*   |  *Restrições* | *Valor Padrão*  |
|--------------|-----------|---------------|-----------------|
| ID da Ação   |  Inteiro  |Chave Primária | Auto-incremento |
|--------------|-----------|---------------|-----------------|
|   Usuário    |   Texto   |    Não Nulo   |        -        |
|--------------|-----------|---------------|-----------------|
|Ação Realizada|   Texto   |    Não Nulo   | 	    -        |
|--------------|-----------|---------------|-----------------|
| Data e Hora  |Data e Hora|	Não Nulo   |Data e hora atual|
|--------------|-----------|---------------|-----------------|
|  Detalhes    |   Texto   |	   -	   |        -        |

Detecção de comportamento suspeito:

|       *Campo*        |   *Tipo*    | *Restrições*  | *Valor Padrão*  |
|----------------------|-------------|---------------|-----------------|
|     ID Suspeição     |Inteiro	Chave|   Primária    | Auto-incremento |
|----------------------|-------------|---------------|-----------------|
|       Usuário        |    Texto    |   Não Nulo    |        -        |
|----------------------|-------------|---------------|-----------------|
|Tipo de Comportamento |    Texto    |	 Não Nulo    |        -        |
|----------------------|-------------|---------------|-----------------|
|      Data e Hora     | Data e Hora |	 Não Nulo    |Data e hora atual|
|----------------------|-------------|---------------|-----------------|
|      Detalhes        |    Texto    |	     -       |	      -        |

Análise da situação:

|       *Campo*        |    *Tipo*   | *Restrições*  |	*Valor Padrão* |
|----------------------|-------------|---------------|-----------------|
|      ID Análise      |   Inteiro   |Chave Primária | Auto-incremento |
|----------------------|-------------|---------------|-----------------|
|       Usuário        |    Texto    |	 Não Nulo    |        -        |
|----------------------|-------------|---------------|-----------------|
|   Tipo de Situação   |    Texto    |   Não Nulo    |	      -        |
|----------------------|-------------|---------------|-----------------|
|     Data e Hora      | Data e Hora |	 Não Nulo    |Data e hora atual|
|----------------------|-------------|---------------|-----------------|
|       Detalhes       |    Texto    |	     -       |	      -        |

Notificação de usuário a respeito de punição:

|       *Campo*        |   *Tipo*    |  *Restrições* |  *Valor Padrão* |
|----------------------|-------------|---------------|-----------------|
|    ID Notificação    |   Inteiro   | Chave Primária| Auto-incremento |
|----------------------|-------------|---------------|-----------------|
|       Usuário        |    Texto    |	  Não Nulo   |	      -        |
|----------------------|-------------|---------------|-----------------|
|   Tipo de Punição    |    Texto    |	  Não Nulo   |	      -        | 
|----------------------|-------------|---------------|-----------------|
|     Data e Hora      | Data e Hora |    Não Nulo   |Data e hora atual|
|----------------------|-------------|---------------|-----------------|
|       Detalhes       |    Texto    |	      -      |	      -        |

Aplicação da punição:

|       *Campo*        |    *Tipo*   |	*Restrições* |	*Valor Padrão* |
|----------------------|-------------|---------------|-----------------|
|      ID Punição      |   Inteiro   | Chave Primária|	Auto-incremento|
|----------------------|-------------|---------------|-----------------|
|       Usuário        |    Texto    |	 Não Nulo    |	      -        |
|----------------------|-------------|---------------|-----------------|
|    Tipo de Punição   |    Texto    |	 Não Nulo    |	      -        |
|----------------------|-------------|---------------|-----------------|
|     Data e Hora      | Data e Hora |	 Não Nulo    |Data e hora atual|
|----------------------|-------------|---------------|-----------------|
|       Detalhes       |    Texto    |       -       |	      -        |
