from flask import request
from flask_restful import Resource

from ..Components.publicacion_component import PublicacionComponent
from ..Model.Request.publicacion_request import PublicacionRequest
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success


class PublicacionService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Ejecutando servicio de Crear Publicación")
            rq_json = request.get_json()
            new_request = PublicacionRequest()
            error_en_validacion = new_request.validate(rq_json)
            if error_en_validacion:
                HandleLogs.write_error("Error al validar el request -> " + str(error_en_validacion))
                return response_error("Error al validar el request -> " + str(error_en_validacion))

            resultado = PublicacionComponent.crear_publicacion(rq_json['user_id'], rq_json['contenido'])
            if resultado['result']:
                return response_success(resultado['message'])
            else:
                return response_error(resultado['message'])
        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())

    @staticmethod
    def get(user_id):
        try:
            HandleLogs.write_log("Ejecutando servicio de Listar Publicaciones")
            resultado = PublicacionComponent.listar_publicaciones(user_id)
            if resultado['result']:
                return response_success(resultado['data'])
            else:
                return response_error(resultado['message'])
        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())
