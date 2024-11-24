<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TasksController extends Controller
{
    public function index()
    {
        return DB::table('tasks')
            ->orderBy('id', 'asc')
            ->get();
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'description' => 'required',
            'date' => 'required',
            'location' => 'required|max:255',
            'responsible' => 'required|max:255',
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        $task = Tasks::create([
            'title' => $request->title,
            'description' => $request->description,
            'date' => $request->date,
            'location' => $request->location,
            'responsible' => $request->responsible,
        ]);
    }

    public function update(Request $request)
    {
        Tasks::where('id', $request->id)
            ->update([
                'title' => $request->title,
                'description' => $request->description,
                'date' => $request->date,
                'location' => $request->location,
                'responsible' => $request->responsible,
            ]);
    }

    public function updateLike(Request $request)
    {
        $task = Tasks::where('id', $request->id)->first();
        $likes = $task->likes;
        Tasks::where('id', $request->id)
            ->update([
                'likes' => $likes + 1
            ]);
    }

    public function deleteTask(Request $request)
    {
        $task = Tasks::where('id', $request->id)->delete();
    }
}
