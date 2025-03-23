//Es como el main
$(document).ready(function(){
    
    $("#p").click(function(){
        //alert("Si entra")
        let fecha = Date()
        //$("#titulo").text("La fecha y hora es: "+fecha)
        $("#titulo").html("La fecha y hora es: <mark>"+fecha+"</mark>")
        
    })

    $("#h20").click(function(){
        //$("#tabla").hide()
        //$("#tabla").show()
        //$("#tabla").toggle()   
        //$("#tabla").fadeOut(4000)
        //$("#tabla").fadeIn(4000)   
        $("#tabla").fadeToggle(4000)      
    })

    $("h1").mouseover(function(){
        
        let contenido = $("#correo").val()
        $("#principal").after("<h2>"+contenido+"</h2>")
    })

    //$("#correo").keypress(function(){
    $("#correo").keyup(function(){
        
        let texto = $(this).val()
        $("#titulo").text(texto)
    })

    $("input[type=range]").change(function(){
        
        let rojo = $("#r").val()
        let verde = $("#g").val()
        let azul = $("#b").val()

        let c = rojo+","+verde+","+azul
        let color = "rgb("+c+")"

        //rojo.toHex()
        rojo = parseInt(rojo, 16)
        $("#correo").val(rojo)

        $("#cuadro").css("background-color", color)
    })

    $("#subtitulo").dblclick(function(){
        //alert("Entrando")
        $("#x").load("cajas.html")
    })
    
})