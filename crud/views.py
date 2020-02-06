from django.shortcuts import render, redirect
from .models import Producto

# Create your views here.
def index(request):
    return render(request, 'index.html')

def create(request):

    producto = Producto(producto=request.POST['producto'], categoria=request.POST['categoria'], fecha=request.POST['fecha'], precio=request.POST['precio'], stock=request.POST['stock'])
    producto.save()    
    return redirect('/')

def read(request):
    producto = Producto.objects.all()

    # Modificando el formato de fecha (por defecto era en ingles)
    for p in producto:
        p.fecha = '{:%d-%m-%Y}'.format(p.fecha)
    context = {'producto': producto}

    return render(request, 'result.html', context)

def delete(request, id):
    producto = Producto.objects.get(id=id)
    producto.delete()
    return redirect('/crud/')



def edit(request, id):
    producto = Producto.objects.get(id=id)
    fe = producto.fecha
    producto.fecha = '{:%Y-%m-%d}'.format(fe)
    context = {'producto': producto}
    return render(request, 'edit.html', context)


def update(request, id):

    producto = Producto.objects.get(id=id)

    producto.producto = request.POST['producto']
    producto.categoria = request.POST['categoria']
    producto.fecha = request.POST['fecha']
    producto.precio = request.POST['precio']
    producto.stock = request.POST['stock']

    producto.save()
    return redirect('/crud/')
