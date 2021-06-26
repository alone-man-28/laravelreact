<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function list(Request $request){
        // $roles = App\Models\Role::all();
    
        return view('/welcome');
      }    
}
