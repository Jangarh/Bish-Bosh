document.getElementById('btn').onclick = function(){
    let nrToIterate = parseInt(document.getElementById('input').value);
    let output = document.getElementById('output');
    output.innerHTML = '';
  for (let i=1; i <= nrToIterate; i++){
    let item = document.createElement('div');
    item.innerHTML = i;
   
    output.appendChild(item);
    if( i % 3 && i % 4 ) {
        document.write(i);
    } else {
        if( i % 3 == 0 ) {
            document.write("Bish ");
        }
        if( i % 4 == 0 ) {
            document.write("Bosh ");
        }
    }
    document.write('<br>');
}
}