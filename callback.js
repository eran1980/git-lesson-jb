

/*function domination(){

alert("print_mj");     
print_mj(print_sp);                  


}
function print_mj(callback) {
alert(23);
callback();

}
function print_sp() {

alert(33);

}
*/
/*
function domination(){
alert(print_mj);     
print_mj(print_sp);                  
}

function print_mj(callback) {
alert(23);
callback(33);
}
                                                                         
function print_sp(num) {
    alert(num);
}
*/
/*
function domination(){
    alert(print_mj);     
    print_mj(print_sp);                  
    }
    
    function print_mj(callback) {
    alert(23);
    callback(33);
    }
                                                                             
    function print_sp(num) {
        alert(num);
    }
    */
   function main_application() {
    
    alert(call_server);

    call_server(
        name => alert("Success: " + name),
        err => alert("Failed: " + err.message)); // Asynchronous call

    alert("Finished test()");
}


function call_server(success_callback, failed_callback) { // callback = server_process
    // 1. Creates parallel thread, doesn't stop main thread - continues the program
    // 2. Creates delay
    setTimeout(() => {
        const a = 2;              

        if (a === 1) {
            success_callback("Tomer Sagi");
        } else {
            failed_callback(new Error("Can't find Tomer in the database."));
        }
    }, 10);   
}
