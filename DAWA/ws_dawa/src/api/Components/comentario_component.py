from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response

class ComentarioComponent:
    @staticmethod
    def agregar_comentario(user_id, publicacion_id, comentario):
        try:
            result = False
            message = None
            sql = "INSERT INTO dawa.tb_comentarios (user_id, publicacion_id, comentario) VALUES (%s, %s, %s)"
            record = (user_id, publicacion_id, comentario)
            resultado = DataBaseHandle.ExecuteNonQuery(sql, record)
            if resultado['result']:
                result = True
                message = 'Comentario agregado exitosamente'
            else:
                message = 'Error al agregar comentario -> ' + resultado['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, None, message)