@echo off
title Create NodeJS Fullstack Project Structure

:: Nama project
set PROJECT=BusinessAutomationPlatform

echo ========================================
echo Creating Project: %PROJECT%
echo ========================================

:: Root
mkdir "%PROJECT%"
cd "%PROJECT%"

:: =====================================================
:: FRONTEND
:: =====================================================

mkdir frontend
cd frontend

mkdir node_modules
mkdir public
mkdir public\images

mkdir src
mkdir src\assets
mkdir src\assets\css
mkdir src\assets\images
mkdir src\assets\icons

mkdir src\components
mkdir src\pages
mkdir src\layouts
mkdir src\services
mkdir src\utils

type nul > public\favicon.ico
type nul > src\App.js
type nul > src\main.js
type nul > src\services\api.js

type nul > .gitignore
:: type nul > package.json
:: type nul > package-lock.json
type nul > README.md

cd ..

:: =====================================================
:: BACKEND
:: =====================================================

mkdir backend
cd backend

mkdir node_modules
mkdir public
mkdir public\uploads

mkdir src
mkdir src\config
mkdir src\controllers
mkdir src\models
mkdir src\routes
mkdir src\middlewares
mkdir src\services
mkdir src\utils
mkdir src\migrations

mkdir tests

type nul > src\config\database.js
type nul > src\controllers\userController.js
type nul > src\models\User.js
type nul > src\routes\userRoutes.js
type nul > src\middlewares\auth.js
type nul > src\services\userService.js
type nul > src\utils\helper.js

type nul > src\app.js
type nul > src\server.js

type nul > .env
type nul > .gitignore
:: type nul > package.json
:: type nul > package-lock.json
type nul > README.md

cd ..

:: =====================================================
:: ROOT
:: =====================================================

type nul > README.md

echo.
echo ========================================
echo Project Structure Created Successfully!
echo ========================================
pause