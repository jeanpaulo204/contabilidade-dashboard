# 📊 Dashboard Contábil

Dashboard web moderno para **contadores e pequenas empresas**, focado em visualização financeira, controle de despesas, faturamento e obrigações fiscais.

Projeto desenvolvido com foco em **usabilidade**, **performance** e **visual profissional**, ideal para portfólio ou evolução para um SaaS.

---

## 🚀 Funcionalidades

- 🔐 Autenticação de usuários
- 🏢 Gestão de empresas
- 💰 Controle de receitas e despesas
- 📊 Dashboard financeiro com indicadores
- 🧾 Gestão de obrigações fiscais (DAS, FGTS, INSS)
- 📈 Relatórios mensais e comparativos
- 🔔 Visualização de vencimentos e status
- 📱 Layout responsivo (desktop e mobile)

---

## 🧠 Indicadores Financeiros

- Faturamento mensal  
- Despesas totais  
- Lucro líquido  
- Impostos estimados  
- Margem de lucro  
- Crescimento mensal (%)  

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- ⚛️ React  
- ⚡ Vite  
- 🎨 Tailwind CSS  
- 🧩 shadcn/ui  
- 📊 Recharts  

### Backend & Infra
- 🗄️ Supabase (PostgreSQL + Auth)  
- 🔐 Row Level Security (RLS)  
- ☁️ Vercel (deploy)  

---

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/
│   ├── charts/
│   └── layout/
├── pages/
│   ├── Dashboard.tsx
│   ├── Financeiro.tsx
│   ├── Obrigacoes.tsx
│   └── Relatorios.tsx
├── services/
├── contexts/
├── hooks/
└── types/
```

---

## 📸 Preview

> 🔧 Em desenvolvimento  
> (prints do dashboard serão adicionados em breve)

---

## 🧪 Dados de Teste

O projeto utiliza dados mockados para demonstração do layout e gráficos.
Futuramente será integrado com dados reais via Supabase.

---

## 🧑‍💻 Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/dashboard-contabil.git

# Entrar na pasta
cd dashboard-contabil

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## 🎯 Objetivo do Projeto

Este projeto foi criado para:
- Demonstrar habilidades em frontend moderno
- Aplicar boas práticas de UI/UX
- Trabalhar com dashboards e visualização de dados
- Servir como base para um sistema contábil real ou SaaS

---

## 🚧 Próximos Passos

- [ ] Integração completa com Supabase  
- [ ] CRUD de receitas e despesas  
- [ ] Exportação de relatórios em PDF  
- [ ] Alertas de vencimento  
- [ ] Modo escuro  
- [ ] Multiempresas por usuário  

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👤 Autor

**Jean Paulo**  
Desenvolvedor Frontend / Full Stack  

- GitHub: https://github.com/seu-usuario  
- LinkedIn: https://linkedin.com/in/seu-linkedin  
