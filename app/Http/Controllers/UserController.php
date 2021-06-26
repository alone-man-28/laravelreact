<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Role;

class UserController extends Controller
{
    public function list(Request $request){
        $roles = Role::all();
        return response()->json(['roles' => $roles]);
    }

    public function detail(Role $role){
      return response()->json(['role' => $role]);
    }

    // public function edit(Request $request){
    //   Log::info("test");
    //   //return response()->json(['role' => $role]);
    //   redirect()->action('TestController@list');
    // }

    public function editdone(Request $request,Role $role){
      // Log::info($request->all());
      // Log::info($role);
      Log::info("tets");
      redirect()->action('TestController@list');
      // return response("OK", 200);
    }
    
    public function delete(Role $role){
      $role->delete();
      return response("OK", 200);
    }
}
