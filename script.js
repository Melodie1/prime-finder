function handleSubmit(event){
    event.preventDefault();

    let number = document.getElementById("num").value;
    if(number == 1){
        document.getElementById("h4").innerText = "The number is neither prime nor composite.";
    } else{
        let i;
        let isprime = true;
        for(i=2; i<=Math.sqrt(number); i++){
            if(number % i == 0){
                isprime=false;
                break;
            }
        }

        if(isprime){
            document.getElementById("h4").innerText = "The number is prime.";
        } else {
            document.getElementById("h4").innerText = "The number is composite.";
        }
    }
}