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
    
})