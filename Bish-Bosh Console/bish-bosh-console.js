
for (let i=1; i <= 100; i++){
    if( i % 3 && i % 4 ) {
        console.log(i);
    } if( i % 3 == 0 && i % 4 == 0 ) {
        console.log("Bish-Bosh");
    }else {
        if( i % 3 == 0 ) {
            console.log("Bish");
        }
        if( i % 4 == 0 ) {
            console.log("Bosh");
        }
        
    }
    
}