# myWebpack (Сборка Webpack-5)

### _Инициализация проекта_

npm i

---

### _Режим разработки на webpack-dev-server_

npm start

---

### _Режим разработки (сборка проекта)_

npm run dev

---

### _Режим продакшена (сборка проекта)_

npm run prod

---

## Вопросы и комментарии:

- Спрайты работают через svg-sprite-loader, спрайт собирается в <body></body> из отдельных svg-изображений. SvgChunkWebpackPlugin не смог завести, в инструкции спрайт внедряется через шаблонизатор twig.

- Не работает шаблонизация HtmlWebpackPlugin в случае вставки в html-файл. Конструкция <title><%= htmlWebpackPlugin.options.title %></title> не отрабатывает, победить не смог. Вставка другого контента через такой шаблон также не отрабатывает. Пробовал handlebars-loader, как указано в документации, используя {template: 'index.hbs'}, но тоже не заработал.

- Экспорт из html в html используя html-loader + extract-loader в работе
