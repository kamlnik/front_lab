function color(str, res_str) {
    let coloredHtml = '';
    
    let flag = 1;

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if(letter != ' '){
            flag = flag === 0 ? 1 : 0;
        }

        let color = flag % 2 === 0 ?  'red' : 'blue';

        coloredHtml += `<span style="color: ${color};">${letter}</span>`;
    }
    
    document.getElementById(res_str).innerHTML = coloredHtml;
}
color('Приветствуем', 'str1');
color('вас', 'str2');
color('в нашем', 'str3');
//let str = 'Приветствуем'




