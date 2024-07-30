from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response

class ReaccionComponent:
    @staticmethod
    def reaccionar(user_id, publicacion_id, tipo_reaccion):
        try:
            result = False
            message = None
            sql = "INSERT INTO dawa.tb_reacciones (user_id, publicacion_id, tipo_reaccion) VALUES (%s, %s, %s)"
            record = (user_id, publicacion_id, tipo_reaccion)
            resultado = DataBaseHandle.ExecuteNonQuery(sql, record)
            if resultado['result']:
                result = True
                message = 'Reacción registrada exitosamente'
            else:
                message = 'Error al registrar reacción -> ' + resultado['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, None, message)