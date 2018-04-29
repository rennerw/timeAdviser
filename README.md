# timeAdviser
Conta o tempo total na página e o tempo que o usuário/funcionario digita
e salva esse tempo em uma tabela Timesheet

Esse é um projeto sem fins lucrativos desenvolvido por mim utilizando jquery, ajax, laravel (Controller, Migration e Route) e php.
---------------------------------------------------------------------------------------------------------------------

-- Coloque o arquivo web.php dentro da sua pasta "routes" do seu projeto Laravel OU apenas copie a linha abaixo dentro do arquivo web.php

Route::group(['middleware' => 'auth'], function()
{
	// TimeSheet
	Route::resource('timesheet', 'TimeSheetController');

});

-- Copie o arquivo 2018_03_19_194200_create_timesheets_table dentro da pasta 'database/migrations' do seu projeto Laravel 
e digite php artisan migrate no console

-- Copie o arquivo TimeSheetController para dentro da pasta 'app/Http/Controllers' 

TUDO PRONTO
-- Para utilizar coloque o arquivo timeAdvise.js e jquery nas páginas em que deseja analisar o tempo na página      

<script type="text/javascript" src="/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="/js/timeAdvise.js"></script>

----------------------------------------------------------------------------------------------------------------------

