
# Relatório de Visualização de Dados – Trabalho Alternativo (BI)

## (i) Introdução

Com o avanço da pandemia de COVID-19, o controle vacinal se tornou essencial para reduzir a mortalidade e o impacto no sistema de saúde brasileiro. Este projeto tem como objetivo explorar os dados públicos de vacinação disponibilizados pelo Ministério da Saúde por meio de um dashboard interativo, permitindo visualizar padrões de cobertura vacinal no Brasil por estado, faixa etária e tipo de imunizante.

A análise visa fornecer insights que auxiliem na compreensão da evolução da vacinação no país, reforçando o papel do Business Intelligence na gestão de políticas públicas de saúde.

## (ii) Metodologia / Base de Dados

A base utilizada foi extraída da plataforma oficial de dados abertos do Governo Federal, disponível em:  
https://opendatasus.saude.gov.br/dataset/covid-19-vacinacao

### Etapas da preparação:
- **Extração:** obtida a partir dos arquivos CSV por estado
- **Limpeza:** removidos campos irrelevantes e registros sem data ou dose aplicável
- **Filtro aplicado:** apenas registros de 2021 a 2023, considerando D1 e D2
- **Ferramenta de BI:** Power BI Desktop

### Campos utilizados:
- Data de aplicação
- UF (estado)
- Sexo
- Faixa etária
- Tipo de vacina (fabricante)
- Dose (1ª ou 2ª)

## (iii) Resultados

### Caracterização do dataset:
- Mais de 400 milhões de registros foram processados.
- A distribuição por estado evidencia concentração em regiões mais populosas.
- A maior faixa etária vacinada foi entre 30 e 59 anos.

### Visualizações:
- Mapa de calor por estado com total de doses aplicadas
- Gráfico de linha com evolução mensal das doses
- Tabela dinâmica por fabricante e tipo de dose
- Gráfico de barras comparando a aplicação da 1ª e 2ª dose por região

## (iv) Discussão

Os dados analisados mostram que a cobertura vacinal foi maior em estados do sudeste e sul, alinhando-se à densidade populacional e capacidade logística. Também é possível observar um intervalo médio de 30 a 60 dias entre as doses, com diferenças regionais consideráveis.

A análise destaca a importância de dashboards em tempo real para tomada de decisões mais eficientes em políticas públicas. Como limitação, destacam-se dados ausentes de alguns municípios e registros incompletos em fases iniciais da vacinação.

---

**Ferramenta usada:** Power BI Desktop  
**Gráficos exportados:** disponíveis em anexo (PDF ou PNG)  
**Autor:** Henrique Peixoto  
**Data:** Maio de 2025
