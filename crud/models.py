from django.db import models

class Categoria(models.Model):
    nombre = models.CharField(max_length=60)

# Create your models here.
class Producto(models.Model):
    producto  = models.CharField(max_length=200)
    fecha = models.DateField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    precio = models.DecimalField(max_digits=5, decimal_places=3)
    stock = models.IntegerField()