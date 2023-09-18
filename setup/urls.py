from django.contrib import admin
from django.urls import path, include
from todo_list.views import TodosViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('todos', TodosViewSet, basename='Todos') 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
