<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
  public function list(Request $request){
    echo("tes");
    $roles = App\Models\Role::all();

    return response()->json(['roles' => $roles]);
  }    
}