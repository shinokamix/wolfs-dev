# wolves-web

Микрофронтенд на React для платформы [BroJS](https://www.npmjs.com/package/@brojs/cli).

## Запуск

```bash
npm install
npm start          # dev-сервер: http://localhost:8099/wolves-web
```

## Скрипты

| Команда | Что делает |
|---|---|
| `npm start` | dev-сервер с hot reload |
| `npm run build:prod` | production-сборка в `dist` |
| `npm run check` | форматирование, линт и проверка типов |
| `npm run lint` / `lint:fix` | oxlint |
| `npm run format` | oxfmt |
| `npm run typecheck` | TypeScript |

## Деплой

Пуш в `main` запускает сборку в Jenkins, бандл выкладывается в
`https://static.brojs.ru/wolves-web/main/`. Активная версия, навигация, конфиг и фичи
настраиваются в админке BroJS.
