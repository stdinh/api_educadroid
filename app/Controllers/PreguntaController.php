<?php

namespace App\Controllers;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Controllers\Controller;
use App\Models\Pregunta;
use App\Models\Tipo;
use App\Models\Encuesta;

class PreguntaController extends Controller {

	public function create(Request $request, Response $response)
	{
		/* tipo_id, texto, encuesta_id */
		$pregunta = new Pregunta;
		$pregunta->tipo_id = $request->getParam('tipo_id');
		$pregunta->texto = ucfirst(strtolower($request->getParam('texto')));
		$pregunta->encuesta_id = $request->getParam('encuesta_id');
		$pregunta->save();
		return $response->withJson($pregunta, 201);
	}

	public function all(Request $request, Response $response)
	{
		$preguntas = Pregunta::all();
		return $response->withJson($preguntas, 201);
	}

	public function update(Request $request, Response $response)
	{
		$pregunta = null;
		try {			
			$pregunta = Pregunta::findOrFail($request->getAttribute('id'));
		} catch (ModelNotFoundException $e) {
			return $response->withJson(["message" => "Registro de pregunta no encontrado"], 404);
		}
		try {
			$tipo = Tipo::findOrFail($request->getParam('tipo_id'));
			$tipo->preguntas()->save($pregunta);
		} catch(ModelNotFoundException $e) {
			return $response->withJson(["message" => "Formato de pregunta no encontrado"], 404);
		}
		try {
			$encuesta = Encuesta::findOrFail($request->getParam('encuesta_id'));
			$encuesta->preguntas()->save($pregunta);
		} catch(ModelNotFoundException $e) {
			return $response->withJson(["message" => "Registro de encuesta no encontrado"], 404);
		}
		$pregunta->texto = ($request->getParam('texto') != null) ? ucfirst(strtolower($request->getParam('texto'))) : $pregunta->texto;
		$pregunta->save();
		return $response->withJson(["message" => "Se actualizó el registro"], 200);
	}

	public function delete(Request $request, Response $response)
	{
		$pregunta = null;
		try {
			$pregunta = Pregunta::findOrFail($request->getAttribute('id'));
		} catch (ModelNotFoundException $e) {
			return $response->withJson(["message" => "Registro de pregunta no encontrado"], 404);
		}
		$pregunta->delete();
		return $response->withJson(["message" => "Se eliminó el registro"], 200);
	}
}