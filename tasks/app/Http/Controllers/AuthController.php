<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'create', 'unauthorized']]);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(!$validator->fails()){
            $emailExists = User::where('email', $request->input('email'))->count();

            if($emailExists === 0){
                $user = new User();
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $user->password = Hash::make($request->input('password'));
                $user->save();

                $token = auth()->attempt([
                    'email' => $request->input('email'),
                    'password' => $request->input('password')
                ]);
                return response()->json(['user' => auth()->user(), 'token' => $token]);
            }else{
                return response()->json(['message' => 'Email já cadastrado'], 203);
            }
        }else{
            return response()->json(['message' => 'Dados enviados são inválidos'], 403);
        }
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['message' => 'Login não autorizado, verifique credenciais'], 401);
        }

        return response()->json(['user' => auth()->user(), 'token' => $token]);
    }

    public function me()
    {
        return response()->json(['user' => auth()->user(), 'token' => request('token')]);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Logout realizado com sucesso']);
    }

    public function refresh()
    {
        return response()->json(
            [
                'user' => auth()->user(), 
                'token' => auth()->refresh()
            ]
        );
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function unauthorized()
    {
        return response()->json([
            'message' => 'Requisição não autorizada'
        ], 403);
    }
}