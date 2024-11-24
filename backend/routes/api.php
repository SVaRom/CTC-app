<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TasksController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('create', [TasksController::class, 'create']);
Route::get('read', [TasksController::class, 'index']);
Route::put('update/{id}', [TasksController::class, 'update']);
Route::post('like/{id}', [TasksController::class, 'updateLike']);
Route::delete('delete/{id}', [TasksController::class, 'deleteTask']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
