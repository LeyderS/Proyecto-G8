from flask import request
from flask_restful import Resource

from ..Components.amigo_component import AmigoComponent
from ..Model.Request.amigo_request import AmigoRequest
from ...utils.general.logs import HandleLogs
from ...utils.general.response import response_error, response_success


class AmigoService(Resource):
    @staticmethod
    def post():
        try:
            HandleLogs.write_log("Ejecutando servicio de Agregar Amigo")
            rq_json = request.get_json()
            new_request = AmigoRequest()
            error_en_validacion = new_request.validate(rq_json)
            if error_en_validacion:
                HandleLogs.write_error("Error al validar el request -> " + str(error_en_validacion))
                return response_error("Error al validar el request -> " + str(error_en_validacion))

            resultado = AmigoComponent.agregar_amigo(rq_json['user_id'], rq_json['amigo_id'])
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
            HandleLogs.write_log("Ejecutando servicio de Listar Amigos")
            resultado = AmigoComponent.listar_amigos(user_id)
            if resultado['result']:
                return response_success(resultado['data'])
            else:
                return response_error(resultado['message'])
        except Exception as err:
            HandleLogs.write_error(err)
            return response_error("Error en el método: " + err.__str__())