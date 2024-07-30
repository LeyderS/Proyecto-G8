from marshmallow import Schema, fields

class AmigoRequest(Schema):
    user_id = fields.Integer(required=True)
    amigo_id = fields.Integer(required=True)