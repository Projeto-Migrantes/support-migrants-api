## Comandos

### Instalação de Dependências

```plaintext
npm install
```

### Executar Scripts

*   Para **desenvolvimento**:

```plaintext
npm run dev
```

*   Para **teste**:

```plaintext
npm run test
```

*   Para **produção**:

```plaintext
npm run prod
```

### Criar o Banco de Dados

```plaintext
npx sequelize-cli db:create
```

### Executar Migrações

```plaintext
npx sequelize-cli db:migrate
```

### Reverter Migrações

```plaintext
npx sequelize-cli db:migrate:undo
```

### Sincronizar o Banco de Dados

```plaintext
npx sequelize-cli db:sync
```