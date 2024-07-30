from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response

class AmigoComponent:
    @staticmethod
    def agregar_amigo(user_id, amigo_id):
        try:
            result = False
            message = None
            sql = "INSERT INTO dawa.tb_amigos (user_id, amigo_id) VALUES (%s, %s)"
            record = (user_id, amigo_id)
            resultado = DataBaseHandle.ExecuteNonQuery(sql, record)
            if resultado['result']:
                result = True
                message = 'Amigo agregado exitosamente'
            else:
                message = 'Error al agregar amigo -> ' + resultado['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, None, message)

    @staticmethod
    def listar_amigos(user_id):
        try:
            result = False
            data = None
            message = None
            sql = "SELECT * FROM dawa.tb_amigos WHERE user_id = %s"
            record = (user_id,)
            resultado = DataBaseHandle.getRecords(sql, 0, record)
            if resultado['result']:
                result = True
                data = resultado['data']
            else:
                message = 'Error al listar amigos -> ' + resultado['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)