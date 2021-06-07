<?php
namespace App\Services;

use App\Models\Task;

class TaskService 
{
    private $task;

    public function __construct()
    {
        $this->task = new Task;
    }

    public function getAll()
    {
        return $this->task::all();
    }
    
    public function getByUser($user_id)
    {
        return $this->task::where('user_id, $user_id')->get();
    }
}