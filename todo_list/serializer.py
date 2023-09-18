from rest_framework import serializers
from todo_list.admin import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'nome', 'criado', 'expiracao', 'prioridade', 'concluido']