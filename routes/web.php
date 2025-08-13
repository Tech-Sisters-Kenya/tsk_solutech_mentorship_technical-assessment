<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
use App\Http\Controllers\ServiceController;

Route::get('/top-services', [ServiceController::class, 'getTopServices']);
