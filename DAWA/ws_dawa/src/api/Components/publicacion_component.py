from datetime import datetime

from ...utils.database.connection_db import DataBaseHandle
from ...utils.general.logs import HandleLogs
from ...utils.general.response import internal_response

class PublicacionComponent:
    @staticmethod
    def crear_publicacion(user_id, contenido):
        try:
            result = False
            message = None
            sql = "INSERT INTO dawa.tb_publicaciones (user_id, contenido) VALUES (%s, %s)"
            record = (user_id, contenido)
            resultado = DataBaseHandle.ExecuteNonQuery(sql, record)
            if resultado['result']:
                result = True
                message = 'Publicación creada exitosamente'
            else:
                message = 'Error al crear publicación -> ' + resultado['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, None, message)

    @staticmethod
    def listar_publicaciones(user_id):
        try:
            result = False
            data = None
            message = None
            sql = "SELECT * FROM dawa.tb_publicaciones WHERE user_id = %s"
            record = (user_id,)
            resultado = DataBaseHandle.getRecords(sql, 0, record)
            if resultado['result']:
                result = True
                publicaciones = resultado['data']
                # Formatear las fechas
                data = [
                    {
                        'publicacion_id': pub['publicacion_id'],
                        'user_id': pub['user_id'],
                        'contenido': pub['contenido'],
                        'fecha': pub['fecha'].strftime('%Y-%m-%d %H:%M:%S') if isinstance(pub['fecha'], datetime) else pub['fecha']
                    } for pub in publicaciones
                ]
            else:
                message = 'Error al listar publicaciones -> ' + resultado['message']
        except Exception as err:
            HandleLogs.write_error(err)
            message = err.__str__()
        finally:
            return internal_response(result, data, message)