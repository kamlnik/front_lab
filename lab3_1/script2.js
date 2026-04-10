
let op_1 = 0;
let oper = null;
let op_2 = 0;
let flag = 0;

function task(el){
    
    if(el == 'C'){
        op_1 = 0;
        op_2 =0;
        oper = '';
        flag = 0;
        document.getElementById("pole").innerHTML = '0';
    }else{
        if(flag == 1){
            if(Number.isFinite(el)){
                val_input(el);
        }else{
            if(el == '='){
                document.getElementById("pole").innerHTML = Number(operation()); 
                flag = 0;
                op_1 = 0;
                op_2 = 0;
                oper = '';
            }
        }
        }else{
            if(Number.isFinite(el)){
                
                val_input(el);
            }else{
                if(el != '='){
                    oper = el;
                    flag = 1;
                }
            }
        } 
    }
    

}

function val_input(num){
    if(flag == 0){
        op_1 = op_1 * 10 + num;
        document.getElementById("pole").innerHTML = op_1;
    }else{
        op_2 = op_2 * 10 + num;
        document.getElementById("pole").innerHTML = op_2;
    }
 
    
}
function operation(){
    switch(oper){
        case '+':
            return op_1 + op_2

        case '-':
            return op_1 - op_2

        case '*':
            return op_1 * op_2

        case '/':
            return op_1 / op_2

    }
}
