from flask import request
from flask_restful import Resource

from ..Components.comentario_component import ComentarioComponent
from ..Model.Request.comentario_request import ComentarioRequest
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success


class ComentarioService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Ejecutando servicio de Agregar Comentario")
            rq_json = request.get_json()
            new_request = ComentarioRequest()
            error_en_validacion = new_request.validate(rq_json)
            if error_en_validacion:
                HandleLogs.write_error("Error al validar el request -> " + str(error_en_validacion))
                return response_error("Error al validar el request -> " + str(error_en_validacion))

            resultado = ComentarioComponent.agregar_comentario(rq_json['user_id'], rq_json['publicacion_id'],
                                                               rq_json['comentario'])
            if resultado['result']:
                return response_success(resultado['message'])
            else:
                return response_error(resultado['message'])
        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())