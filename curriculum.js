console.log("entré al documento js");
document.getElementById('imagenes').onclick = function() {
    console.log("capturé el evento");
    window.open("http://www.github.com" , "ventana1" , "width=500,height=500,scrollbars=YES");
}

document.getElementById('estilo_divertido').onclick = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#DCFCD4';
    document.getElementsByTagName('body')[0].style.fontFamily = "Sassy Frass, cursive";
    document.getElementsByTagName('h1')[0].style.color = '#FC2020';
    //document.getElementsByTagName('h2')[0].style.color = '#6BB96A';
    //document.getElementsByTagName('h3')[0].style.color = '#272A9E';
    let h_3=document.getElementsByClassName("h_tres");
	for (let i=0; i<h_3.length; i++) h_3[i].style.color="#272A9E";

    let h_2=document.getElementsByClassName("h_dos");
	for (let i=0; i<h_2.length; i++) h_2[i].style.color="#6BB96A";

    document.getElementById('estilo_divertido').style.display = 'none';
    document.getElementById('restablecer_estilo').style.display = 'block';
}

document.getElementById('restablecer_estilo').onclick = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.fontFamily = "Times New Roman";
    document.getElementsByTagName('h1')[0].style.color = 'black';

    let h_3=document.getElementsByClassName("h_tres");
	for (let i=0; i<h_3.length; i++) h_3[i].style.color="black";

    let h_2=document.getElementsByClassName("h_dos");
	for (let i=0; i<h_2.length; i++) h_2[i].style.color="black";

    document.getElementById('estilo_divertido').style.display = 'block';
    document.getElementById('restablecer_estilo').style.display = 'none';
}