<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Producto;

class ProductoController extends Controller
{
    public function index(){
        $producto = Producto::all();
        return response()->json($producto,200);
    }
    public function store(Request $request){
        $producto = Producto::create($request->all());
        /*
        $producto = new Producto();
        $producto->name = $request->name;
        $producto->referencia = $request->referencia;
        $prodtucto->precio = $request->precio;
        $producto->peso = $request->peso;
        $producto->stock = $request->stock;
        $producto->categoria = $request->categoria;
        $guardar = $producto->save();*/
        return response()->json($producto,200);
    }
    public function update(Request $request,$id){
        $producto = Producto::findOrFail($id);
        $producto->update($request->all());

        return response()->json($producto,200);
    }
    public function delete($id){
        $producto = Producto::findOrFail($id);
        $producto->delete();
        return response()->json(1,200);
    }
    public function getProducto($id){
        $producto = Producto::findOrFail($id);

        return response()->json($producto,200);
    }
    public function vender($id){
        $producto = Producto::findOrFail($id);
        $stock = $producto->stock;
        if($stock>0){
            $stock = $stock-1;
            
            $producto->update([
                "stock"=>$stock
            ]);
            return response()->json(1,200);

        }else{
            return response()->json(2,200);
        }
    }
}
