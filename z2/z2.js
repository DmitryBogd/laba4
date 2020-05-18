  
window.addEventListener("load",function(){
		//записываем основные переменные, которые будем использовать в дальнейшем
    var button = document.getElementById("add_tr");
    var table = document.getElementById('table');
    var delete_tr = document.getElementsByClassName("delete_tr");
    var diagrama = document.getElementById("diagrama");
    var block_for_diagrama = document.getElementsByClassName("block_for_diagrama");
		//при нажатии на кнопку срабатывает скрипт
    button.addEventListener('click',function(){
        var stud = prompt("Введите студента");
        var sq = +prompt("Введите бал 0-100");
		//если значения не подходят, то выводем алерт
        if(sq>100||sq<1){
            alert("Введите значение от 0 до 100");
        }
        else{
			//создаем элементы, которые будем добавлять
				var tr = document.createElement('tr');		
			table.appendChild(tr);
			tr.classList.add("tr");
			tr.classList.add("tr:nth-child(2n)");

			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			//закидываем их
			tr.appendChild(td2);
			td2.classList.add("td");
			td2.innerHTML = stud;

			tr.appendChild(td3);
			td3.classList.add("td");
			td3.innerHTML = sq;

			tr.appendChild(td1);
			td1.classList.add("td");
			//делаем кнопку удаления
			td1.innerHTML = "<button class='delete_tr'>Удалить</button>";
			//создаем блок
			var block = document.createElement("div");
			diagrama.appendChild(block);
			block.classList.add("block_for_diagrama");
			block.style.height = sq + "%";
			block.setAttribute("title",sq + "%");

			var p = document.createElement("p");
			block.appendChild(p);
			p.innerText = stud;
			p.classList.add("rotate");//перевернуть текст

			for(let k=0;k<delete_tr.length;k++){
				delete_tr[k].addEventListener("click", function(){
					var row = delete_tr[k].parentNode.parentNode;
					row.parentNode.removeChild(row);//удаление строки
					diagrama.removeChild(block_for_diagrama[k]);//удаление блока в диаграме
				})
			}
        }

        
    })

    for(let i=0;i<delete_tr.length;i++){
        delete_tr[i].addEventListener("click", function(){
            var row = delete_tr[i].parentNode.parentNode;
            row.parentNode.removeChild(row);
            diagrama.removeChild(block_for_diagrama[i]);
        })
    }

})