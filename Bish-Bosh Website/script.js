document.getElementById('btn').onclick = function(){
    let nrToIterate = parseInt(document.getElementById('input').value);
    let bishNr = parseInt(document.getElementById('bishNr').value);
    let boshNr = document.querySelector('#boshNr').value;
    let output = document.getElementById('output');
    output.innerHTML = '';
  for (let i=1; i <= nrToIterate; i++){
    // let item = document.createElement('div');
    // item.innerHTML = i;
    
    
    // output.appendChild(item);
    if( i % bishNr == 0 && i % boshNr == 0 ) 
    {
        // document.write(i);
        output.innerHTML +=  ' ' + "Bish-Bosh";
        //output.classList.add("")
    } 
    else if (i % bishNr == 0)
    {
        
            // document.write("Bish ");
            output.innerHTML += ' ' + "Bish"; 
    }
    else if (i % boshNr == 0 )
    {
        output.innerHTML += ' ' + "Bosh";
    }
    else
    {
        output.innerHTML += ' ' + i;
    }

    // document.write('<br>');
}
}