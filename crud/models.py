from django.db import models

# Create your models here.
class Producto(models.Model):
    producto  = models.CharField(max_length=200)
    fecha = models.DateField()
    categoria = models.CharField(max_length=1)
    precio = models.DecimalField(max_digits=5, decimal_places=3)
    stock = models.IntegerField()