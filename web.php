<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', function () {
    return view('auth/login'); //agora vai
});
// Registration Routes redirecting
Auth::routes();
// Rotas com acesso somente após autenticação
Route::group(['middleware' => 'auth'], function()
{
	// TimeSheet
	Route::resource('timesheet', 'TimeSheetController');

});