function f1() {
var sh = parseInt(document.getElementById('sh').value);
var ta = parseInt(document.getElementById('ta').value);
var tl = parseInt(document.getElementById('tl').value);
var co = document.getElementById('co').value;
var al = document.getElementById('al').value;
var im = document.getElementById('im');
im.alt = 'text';
im.setAttribute('alt', 'new alt');
if (isNaN(sh)){
	alert("Введите число");
}
else 
{
	im.height = sh;
}

if (isNaN(ta)){
	alert("Введите число");
}
else 
{
	im.width = ta;
}

if (isNaN(tl)){
	alert("Введите число");
}
else 
{
	im.border = tl;
}
im.style.borderColor = co;
im.alt = al;

}