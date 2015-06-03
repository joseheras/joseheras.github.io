var inicioApp = function()
{
	var Datos = function()
	{
		$("section > article").hide("slow");
		$("#artDatosdeUsuario").show("slow");
		$("#perfil").show("slow");
    }
    var  Antecedentes = function()
	{
		$("section > article").hide("slow");
		$("#artAntecedentes").show("slow");
    }
    var Proyectos = function()
	{
		$("section > article").hide("slow");
		$("#artProyectos").show("slow");
    }
    var Contactar = function()
	{
		$("section > article").hide("slow");
		$("#artContactar").show("slow");
    }
        $("#btnDatos").on("click",Datos);
        $("#btnAntecedentes").on("click",Antecedentes);
        $("#btnProyectos").on("click",Proyectos);
        $("#btnContactar").on("click",Contactar);

}
$(document).on("ready",inicioApp);