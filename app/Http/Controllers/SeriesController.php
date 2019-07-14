<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Serie;

class SeriesController extends Controller
{
   
    // metodo mostrar
    public function index(Request $request)
    {

        //if(!$request->ajax()) return redirect('/');
    //    $series = Serie::select('nombre', 'descripcion', 'created_at')->orderBy('id' , 'desc')->get();
       $series = Serie::orderBy('id' , 'desc')->get();
       return ["series" => $series];
       
       
    }

  
    public function create()
    {
        //
    }

    //metodo insertar datos INSERT
    public function store(Request $request)
    {
        $serie = new Serie();
        $serie->nombre = $request->nombre;
        $serie->descripcion = $request->descripcion;
    
        $serie->save(); // guardando datos

    }

    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

  
    public function update(Request $request, $id)
    {

        if(!$request->ajax()) return redirect('/');
        $series = Serie::find($id);
        $series->nombre = $request->nombre;
        $series->descripcion = $request->descripcion;
        $series->save();

        return $series;

        // Serie::find($id)->update($request->all());

        // return;

    }

  
    public function destroy($id ,Request $request)
    {

        if(!$request->ajax()) return redirect('/');
        $series = Serie::find($id);
        $series->delete();


    }

    public function vistaImagen(){
        return view('layouts/principal');
    }
}
