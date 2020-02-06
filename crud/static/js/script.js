$(document).ready(function(){    
    if($('#result') != null){
        Read();
    }
    $('#create').on('click', function(){
        $producto = $('#producto').val();
        $categoria = $('#categoria').val();
        $fecha = $('#fecha').val();
        $precio = $('#precio').val();
        $stock = $('#stock').val();

        if($producto == "" || $categoria == ""){
            alert("Por favor complete el campo requerido");
        }else{
            $.ajax({
                url: 'create',
                type: 'POST',
                data: {
                    producto: $producto,
                    categoria: $categoria,
                    fecha: $fecha,
                    precio: $precio,
                    stock: $stock,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    Read();
                    $('#producto').val('');
                    $('#categoria').val('');
                    $('#fecha').val('');
                    $('#precio').val('');
                    $('#stock').val('');

                }
            });
        }
    });

    $(document).on('click', '.edit', function(){
        $id = $(this).attr('name');
        window.location = "edit/" + $id;
    });

    $('#update').on('click', function(){
        $producto = $('#producto').val();
        $categoria = $('#categoria').val();
        $fecha = $('#fecha').val();
        $precio = $('#precio').val();
        $stock = $('#stock').val();

        if($producto == "" || $categoria == ""){
            alert("Por favor complete el campo requerido");
        }else{
            $id = $('#producto_id').val();
            $.ajax({
                url: 'update/' + $id,
                type: 'POST',
                data: {
                    categoria: $categoria,
                    producto: $producto,
                    fecha: $fecha,
                    precio: $precio,
                    stock: $stock,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    window.location = '/';
                    alert('Updated!');
                }
            });
        }

    });


    $(document).on('click', '.delete', function(){
        $id = $(this).attr('name');
        $.ajax({
            url: 'delete/' + $id,
            type: 'POST',
            data: {
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(){
                Read();
                alert("Desea Eliminar ?");
            }
        });
    });

});

function Read(){
    $.ajax({
		url: 'read',
		type: 'POST',
		async: false,
		data:{
			res: 1,
			csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
		},
		success: function(response){
			$('#result').html(response);
		}
    });
}

