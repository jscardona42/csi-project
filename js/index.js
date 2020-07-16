$("#btnModalSignIn").off("click").on("click", function () {
    $("#modalSignIn").modal("show");
})

$("#btnModalSignUp").off("click").on("click", function () {
    $("#modalSignUp").modal("show");
})

$("#btnSignIn").off("click").on("click", function () {
    var usuario = $("#usuario").val();
    var clave = $("#clave").val();
    if (usuario == "admin" && clave == "1234") {
        location.href = "dashboard/eventos.html";
    }else if (usuario == "user" && clave == "1234") {
        location.href = "dashboard/index2.html";
    }
    else{
        alert("Contraseña incorrecta");
    }
})

