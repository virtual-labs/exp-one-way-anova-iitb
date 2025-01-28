let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing: One way ANOVA</h4>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Dataset', 'act1-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
         <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
         <br>
         <div class="row justify-content-center fs-20px fb-500">
            <div class="col-md-4">
               n = ${n}
            </div>
            <div class="col-md-4">
               k = ${k}
            </div>
         </div>
         <br>
         <div id="act1-tb-box1"></div> 
         
      </div>
   `;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    a1_internal_calculation();
}
function a1_internal_calculation() {
    mu1 = [];
    mu2 = [];
    mu3 = [];
    mu4 = [];
    mu5 = [];
    let sum_mu1_bar = 0;
    let sum_mu2_bar = 0;
    let sum_mu3_bar = 0;
    let sum_mu4_bar = 0;
    let sum_mu5_bar = 0;
    sum_mu1_mu1_bar_sq = 0;
    sum_mu2_mu2_bar_sq = 0;
    sum_mu3_mu3_bar_sq = 0;
    sum_mu4_mu4_bar_sq = 0;
    sum_mu5_mu5_bar_sq = 0;
    act1_table_data = [];
    act1_table_data2 = [];
    while (mu1.length < n) {
        let rv1 = parseFloat((Math.random() * (50 - 20 + 1) + 20).toFixed(3));
        if (mu1.indexOf(rv1) === -1) {
            mu1.push(rv1);
            sum_mu1_bar += rv1;
        }
    }
    while (mu2.length < n) {
        let rv2 = parseFloat((Math.random() * (50 - 20 + 1) + 20).toFixed(3));
        if (mu2.indexOf(rv2) === -1) {
            mu2.push(rv2);
            sum_mu2_bar += rv2;
        }
    }
    while (mu3.length < n) {
        let rv3 = parseFloat((Math.random() * (50 - 20 + 1) + 20).toFixed(3));
        if (mu3.indexOf(rv3) === -1) {
            mu3.push(rv3);
            sum_mu3_bar += rv3;
        }
    }
    while (mu4.length < n) {
        let rv4 = parseFloat((Math.random() * (50 - 20 + 1) + 20).toFixed(3));
        if (mu4.indexOf(rv4) === -1) {
            mu4.push(rv4);
            sum_mu4_bar += rv4;
        }
    }
    while (mu5.length < n) {
        let rv5 = parseFloat((Math.random() * (50 - 20 + 1) + 20).toFixed(3));
        if (mu5.indexOf(rv5) === -1) {
            mu5.push(rv5);
            sum_mu5_bar += rv5;
        }
    }
    for (let i = 0; i < n; i++) {
        let arr = [];
        arr.push(mu1[i]);
        arr.push(mu2[i]);
        arr.push(mu3[i]);
        arr.push(mu4[i]);
        arr.push(mu5[i]);
        act1_table_data.push(arr);
    }
    mu1_bar = parseFloat((sum_mu1_bar / n).toFixed(3));
    mu2_bar = parseFloat((sum_mu2_bar / n).toFixed(3));
    mu3_bar = parseFloat((sum_mu3_bar / n).toFixed(3));
    mu4_bar = parseFloat((sum_mu4_bar / n).toFixed(3));
    mu5_bar = parseFloat((sum_mu5_bar / n).toFixed(3));
    for (let i = 0; i < n; i++) {
        let temp1 = parseFloat((mu1[i] - mu1_bar).toFixed(3));
        let temp2 = parseFloat((mu2[i] - mu2_bar).toFixed(3));
        let temp3 = parseFloat((mu3[i] - mu3_bar).toFixed(3));
        let temp4 = parseFloat((mu4[i] - mu4_bar).toFixed(3));
        let temp5 = parseFloat((mu5[i] - mu5_bar).toFixed(3));
        sum_mu1_mu1_bar_sq += parseFloat((Math.pow(temp1, 2)).toFixed(3));
        sum_mu2_mu2_bar_sq += parseFloat((Math.pow(temp2, 2)).toFixed(3));
        sum_mu3_mu3_bar_sq += parseFloat((Math.pow(temp3, 2)).toFixed(3));
        sum_mu4_mu4_bar_sq += parseFloat((Math.pow(temp4, 2)).toFixed(3));
        sum_mu5_mu5_bar_sq += parseFloat((Math.pow(temp5, 2)).toFixed(3));
    }
    sum_mu1_mu1_bar_sq = parseFloat(sum_mu1_mu1_bar_sq.toFixed(3));
    sum_mu2_mu2_bar_sq = parseFloat(sum_mu2_mu2_bar_sq.toFixed(3));
    sum_mu3_mu3_bar_sq = parseFloat(sum_mu3_mu3_bar_sq.toFixed(3));
    sum_mu4_mu4_bar_sq = parseFloat(sum_mu4_mu4_bar_sq.toFixed(3));
    sum_mu5_mu5_bar_sq = parseFloat(sum_mu5_mu5_bar_sq.toFixed(3));
    S1_sq = parseFloat((sum_mu1_mu1_bar_sq / n - 1).toFixed(3));
    S2_sq = parseFloat((sum_mu2_mu2_bar_sq / n - 1).toFixed(3));
    S3_sq = parseFloat((sum_mu3_mu3_bar_sq / n - 1).toFixed(3));
    S4_sq = parseFloat((sum_mu4_mu4_bar_sq / n - 1).toFixed(3));
    S5_sq = parseFloat((sum_mu5_mu5_bar_sq / n - 1).toFixed(3));
    let arr1 = [mu1_bar, mu2_bar, mu3_bar, mu4_bar, mu5_bar];
    let arr2 = [S1_sq, S2_sq, S3_sq, S4_sq, S5_sq];
    act1_table_data2 = [arr1, arr2];
    show_table1();
}
function show_table1() {
    let header = [
        'N(&mu;<sub>1</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>2</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>3</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>4</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>5</sub>, &sigma;<sup>2</sup>)',
    ];
    let tb_box1 = (document.getElementById('act1-tb-box1'));
    let tab1 = new Show_Table(header, act1_table_data, tb_box1);
    tab1.load_table();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <div id="act1-vf-table-div" class='table-responsive' style='margin: auto;'>
   <table class='table table-bordered' style='background-color: white;' id="act1-verification-table">
      <tr>
         <th class='table-dark'></th>
         <th class='table-dark'>N(&mu;<sub>1</sub>, &sigma;<sup>2</sup>)</th>
         <th class='table-dark'>N(&mu;<sub>2</sub>, &sigma;<sup>2</sup>)</th>
         <th class='table-dark'>N(&mu;<sub>3</sub>, &sigma;<sup>2</sup>)</th>
         <th class='table-dark'>N(&mu;<sub>4</sub>, &sigma;<sup>2</sup>)</th>
         <th class='table-dark'>N(&mu;<sub>5</sub>, &sigma;<sup>2</sup>)</th>
      </tr>
      <tr id="mean-row">
         
      </tr>
      <tr id="var-row">
         
      </tr>
   </table>
   <br>
   <button class='btn btn-info std-btn' onclick='verify_table2();' style='position: relative; left: 0w;' id='vf-table2-btn'>Verify</button>
   
</div>
   `;
    a1_load_mean_table2_data(false);
    a1_load_var_table2_data(false);
}
function a1_load_mean_table2_data(show) {
    let mean_row = (document.getElementById('mean-row'));
    mean_row.innerHTML = '';
    mean_row.innerHTML = `<th class='table-dark'>Mean</th>`;
    if (show) {
        for (let i = 0; i < 5; i++) {
            mean_row.innerHTML += `
         <td>
            <input type='number' id='mu${i + 1}-mean-inp' class='form-control fs-16px' value="${act1_table_data2[0][i]}" disabled/>
         </td>
         `;
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            mean_row.innerHTML += `
         <td>
            <input type='number' id='mu${i + 1}-mean-inp' class='form-control fs-16px'/>
         </td>
         `;
        }
    }
}
function a1_load_var_table2_data(show) {
    let var_row = (document.getElementById('var-row'));
    var_row.innerHTML = '';
    var_row.innerHTML = `<th class='table-dark'>Var(S)</th>`;
    if (show) {
        for (let i = 0; i < 5; i++) {
            var_row.innerHTML += `
         <td>
            <input type='number' id='mu${i + 1}-var-inp' class='form-control fs-16px' value="${act1_table_data2[1][i]}" disabled />
         </td>
         `;
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            var_row.innerHTML += `
         <td>
            <input type='number' id='mu${i + 1}-var-inp' class='form-control fs-16px' />
         </td>
         `;
        }
    }
}
function verify_mean_table2() {
    let mu1_bar_inp = (document.getElementById('mu1-mean-inp'));
    let mu2_bar_inp = (document.getElementById('mu2-mean-inp'));
    let mu3_bar_inp = (document.getElementById('mu3-mean-inp'));
    let mu4_bar_inp = (document.getElementById('mu4-mean-inp'));
    let mu5_bar_inp = (document.getElementById('mu5-mean-inp'));
    if (!verify_values(parseFloat(mu1_bar_inp.value), mu1_bar)) {
        mu1_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu1 mean value');
        return false;
    }
    else {
        mu1_bar_inp.style.border = '1px solid #ced4da';
        mu1_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu2_bar_inp.value), mu2_bar)) {
        mu2_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu2 mean value');
        return false;
    }
    else {
        mu2_bar_inp.style.border = '1px solid #ced4da';
        mu2_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu3_bar_inp.value), mu3_bar)) {
        mu3_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu3 mean value');
        return false;
    }
    else {
        mu3_bar_inp.style.border = '1px solid #ced4da';
        mu3_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu4_bar_inp.value), mu4_bar)) {
        mu4_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu4 mean value');
        return false;
    }
    else {
        mu4_bar_inp.style.border = '1px solid #ced4da';
        mu4_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu5_bar_inp.value), mu5_bar)) {
        mu5_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu5 mean value');
        return false;
    }
    else {
        mu5_bar_inp.style.border = '1px solid #ced4da';
        mu5_bar_inp.disabled = true;
    }
    return true;
}
function verify_var_table2() {
    let mu1_var_inp = (document.getElementById('mu1-var-inp'));
    let mu2_var_inp = (document.getElementById('mu2-var-inp'));
    let mu3_var_inp = (document.getElementById('mu3-var-inp'));
    let mu4_var_inp = (document.getElementById('mu4-var-inp'));
    let mu5_var_inp = (document.getElementById('mu5-var-inp'));
    if (!verify_values(parseFloat(mu1_var_inp.value), S1_sq)) {
        mu1_var_inp.style.border = '1px solid red';
        alert('Incorrect mu1 variance value');
        return false;
    }
    else {
        mu1_var_inp.style.border = '1px solid #ced4da';
        mu1_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu2_var_inp.value), S2_sq)) {
        mu2_var_inp.style.border = '1px solid red';
        alert('Incorrect mu2 variance value');
        return false;
    }
    else {
        mu2_var_inp.style.border = '1px solid #ced4da';
        mu2_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu3_var_inp.value), S3_sq)) {
        mu3_var_inp.style.border = '1px solid red';
        alert('Incorrect mu3 variance value');
        return false;
    }
    else {
        mu3_var_inp.style.border = '1px solid #ced4da';
        mu3_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu4_var_inp.value), S4_sq)) {
        mu4_var_inp.style.border = '1px solid red';
        alert('Incorrect mu4 variance value');
        return false;
    }
    else {
        mu4_var_inp.style.border = '1px solid #ced4da';
        mu4_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu5_var_inp.value), S5_sq)) {
        mu5_var_inp.style.border = '1px solid red';
        alert('Incorrect mu5 variance value');
        return false;
    }
    else {
        mu5_var_inp.style.border = '1px solid #ced4da';
        mu5_var_inp.disabled = true;
    }
    return true;
}
function verify_table2() {
    console.log(mu1_bar, mu2_bar, mu3_bar, mu4_bar, mu5_bar);
    console.log(S1_sq, S2_sq, S3_sq, S4_sq, S5_sq);
    if (verify_mean_table2() && verify_var_table2()) {
        let btn = (document.getElementById('vf-table2-btn'));
        btn.removeEventListener('click', verify_table2);
        btn.addEventListener('click', activity1_p1);
        btn.innerText = 'Next';
        alert('Great!! Your calculation is correct.');
        a1_load_mean_table2_data(true);
        a1_load_var_table2_data(true);
    }
    return;
}
activity1();
//# sourceMappingURL=activity1.js.map