# HistoricalTextGameBack-end

На данном этапе создана база данных и подключена к коду. При отправке Post-запроса он сохраняется в базе данных и отправляется обратно на клиент. 
Это нужно для проверки работоспособности кода и, чтобы убедиться в правильности подключения БД

Создана модель GameMove в файле GameMove.js. В этом же файле описана схема этой модели(каке поля есть у неё и какие являются обязательными). Эта модель, как понятно из названия, описывает один ход в игре

Данная модель и создаётся в результате post-запроса и заносится в БД и отправляется клиенту

План на неделю: 
1)Добавить возможность отправлять не только строки, но и файлы. Это нужно для того, чтобы контент(текстовый или графический) могли заменять не программисты. Такое требование заказчика
2)Заполнить базу данных контентом
3)Начать интеграцию back-end'а и front-end'a
