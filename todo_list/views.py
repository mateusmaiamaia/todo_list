from django.shortcuts import render
from rest_framework import viewsets, generics
from todo_list.models import Todo

class TodosViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    

# Create your views here.
