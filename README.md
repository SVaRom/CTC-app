# Cuida Tu Comunidad (CTC)

Prototype platform in which citizens are able to like the community tasks offered on the platform.

## Requirements
You need to have already installed the following programs/services:

- XAMPP/WAMPP/MAMP/Laragon or any app that allows you to start apache service
- Composer
- NodeJS
- Laravel
- PostgreSQL
- Text editor

You need to have created the following:

 - Database called **ctc-database** on PostgreSQL

## Installation
Use **npm** to install the following modules


```bash
npm install
npm install react-router
npm install axios
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/icons-material
npm install @mui/x-date-pickers
npm install dayjs
```

## Configuration
**Frontend**
Create an ".env" file with the following params to create our endpoint:

```bash
VITE_API_URL=http://localhost/ctc-app/backend/public/api/
```
**Backend**
Modify the ".env" file database connection with the following params:
```bash
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=ctc-database
DB_USERNAME=postgres
DB_PASSWORD=root
```

## Initialization 

**Backend**

Go to your backend folder first:
```bash
cd backend
```

First we need to migrate our tables from laravel using the following command:
```bash
php artisan migrate
```
To start the backend service we need to run the following command:
```bash
php artisan serve
```
**Frontend**

Go to your frontend folder first:
```bash
cd frontend/ctc-project
```

To start the frontend service we need to run the following command::
```bash
npm run dev
```

## Log

- Installation of components and services
  - XAMPP
  - Composer
  - Laravel
  - Node js
  - PostgreSQL
- Introduction to PostgreSQL
- Creation of a database
- Migration of tables
- Creation of a model
- Creation of controller
- Creation of routes
- Api test using Postman
- Installation of frontend components
  - Vite (React + Javascript)
  - MaterialUI
- Creation of the main view
- Library installations
- Creation of components
- Functionality of listing
- Functionality of likes
- Modal implementation to update
- Delete from modal
- Update function
- Delete function
- Change modal buttons depending on process
- Modal implementation for creation
- Creation function

## Info
Sebastian Vargas Romo

Reach me!\
[Portfolio](svarom.com) | [Principal mailbox](mailto:info@svarom.com?subject=[GitHub]%20CTC%20Project) | [Secondary mailbox](mailto:sebastian.varom13@gmail.com?subject=[GitHub]%20CTC%20Project)