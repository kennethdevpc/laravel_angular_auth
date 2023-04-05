<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function index(){

        return User::all();
    }

    public function user(Request $request){
        //dd("aui", $request->user());

        return( $request->user());
    }
    public function register(UserRegisterRequest $request){
       $user=User::create(
            [
                'name'=> $request->name,
                'last_name'=> $request->last_name,
                'email'=> $request->email,
                'password'=>Hash::make( $request->password),
            ]
        );
        return 'User created successfully!';
      return $user;

       // return( $request->user());
    }
}
