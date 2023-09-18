from django.contrib import admin
from todo_list.models import Todo

class Todos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'criado', 'prioridade', 'concluido')
    list_display_links = ('nome', 'id')
    search_fields = ('nome', 'id')
    list_per_page = 10


admin.site.register(Todo, Todos)
# Register your models here.
