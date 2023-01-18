const search_data = () => {
    const input =document.querySelector('#input_data').value.toUpperCase();
    const table = document.querySelector('#table');
    const tr = table.getElementsByTagName('tr');

    for(let i =0 ; i<tr.length ; i++){
        const td = tr[i].getElementsByTagName('td')[0];
        if(td){
            const textValue = td.textContent || td.innerHTML ;

            if(textValue.toUpperCase().indexOf(input)>-1){
                tr[i].style.display="";
            }else{
                tr[i].style.display='none'
            }
        }
    }
}