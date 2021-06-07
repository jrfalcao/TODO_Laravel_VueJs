<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/ping', function () {
//     return ['pong'=> true];
// });

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'api','prefix' => 'auth'], function () {
    Route::post('login', [ AuthController::class, 'login' ]);
    Route::post('logout', [ AuthController::class, 'logout']);
    Route::post('refresh', [ AuthController::class, 'refresh']);
});

Route::get('/401', [ AuthController::class, 'unauthorized'])->name('login');

Route::group(['prefix' => 'user'], function () {
    Route::post('create', [ AuthController::class, 'create']);
    Route::post('me', [ AuthController::class, 'me' ]);
});

Route::resource('task', TaskController::class)->only([
    'index', 'store', 'show', 'update', 'destroy'
]);
