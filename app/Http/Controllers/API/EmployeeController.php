<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee; 

class EmployeeController extends Controller
{
  
    public function list(Request $request){
      echo("tes");
      $roles = App\Models\Role::all();
	
      return response()->json(['roles' => $roles]);
    }    
}