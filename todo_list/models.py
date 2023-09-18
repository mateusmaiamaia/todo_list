from django.db import models
from django.utils import timezone

class Todo(models.Model):
    
    PRIORIDADE = {
        ('B', 'Baixa'),
        ('M', 'Média'),
        ('A', 'Alta'),
    }

    nome = models.CharField(max_length=50)
    criado = models.DateField(default=timezone.now)
    expiracao = models.DateField(default=timezone.now)
    prioridade =  models.CharField(max_length=1, choices=PRIORIDADE, blank=False, null=False, default='B')
    concluido = models.BooleanField()

    def __str__(self):
        return self.nome