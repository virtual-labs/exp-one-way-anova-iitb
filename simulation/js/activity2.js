function activity2() {
    let btn = (document.getElementById('act1-p4-btn-1'));
    btn && btn.remove();
    maindiv.innerHTML += `
   <div class='divide'>
      <div style='margin-top: 2vw;'>
         <h4 class="fb-700 fs-28px" style="text-align:center">Activity 2</h4>
         <br>
         <p class='fs-22px fb-600 text-center '>With unequal sample sizes</p>
         <br>

         <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='act2-temp-btn-1' >Next</button>
      </div>
   </div>
   `;
    a2_internal_calculation1();
    hide_all_steps();
}
function start_act2() {
    let temp_btn = (document.getElementById('act2-temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Dataset', 'act2-div');
    maindiv.innerHTML += `
   ${btn_text}
   <div class="collapse divide center-text" id="act2-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
      <br>
      <div class="row justify-content-center fs-20px fb-500">
         <div class="col-md-4">
            n1 = ${n_a2[0]}
         </div>
         <div class="col-md-4">
            n2 = ${n_a2[1]}
         </div>
         <div class="col-md-4">
            n3 = ${n_a2[2]}
         </div>
      </div>
      <div class="row justify-content-center fs-20px fb-500">
         <div class="col-md-4">
            n4 = ${n_a2[3]}
         </div>
         <div class="col-md-4">
            n5 = ${n_a2[4]}
         </div>
         <div class="col-md-4">
            k = ${k}
         </div>
      </div>
      <br>
      <div id="act2-tb-box1"></div> 
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    a2_show_table1();
}
function a2_internal_calculation1() {
    mu_a2 = [];
    mu_bar_a2 = 0;
    N = 0;
    SSb = 0;
    SSw = 0;
    SSt = 0;
    F_a2 = 0;
    a2_table_data1 = [];
    for (let i = 0; i < k; i++) {
        let arr = [];
        let sum = 0;
        while (arr.length < n_a2[i]) {
            let rv = parseFloat((Math.random() * (50 - 20 + 1) + 20).toFixed(3));
            if (arr.indexOf(rv) === -1) {
                arr.push(rv);
                sum += rv;
            }
        }
        sum_mu[i] = parseFloat(sum.toFixed(3));
        bar_mu[i] = parseFloat((sum_mu[i] / n_a2[i]).toFixed(3));
        mu_a2.push(arr);
        mu_bar_a2 += bar_mu[i] / k;
    }
    mu_bar_a2 = parseFloat(mu_bar_a2.toFixed(3));
    n_a2.map((data) => (N += data));
    for (let i = 0; i < k; i++) {
        SSb += n_a2[i] * Math.pow((bar_mu[i] - mu_bar_a2), 2);
        let temp = 0;
        for (let j = 0; j < n_a2[i]; j++) {
            SSw += Math.pow((mu_a2[i][j] - mu_bar_a2), 2);
            temp += Math.pow((mu_a2[i][j] - bar_mu[i]), 2);
        }
        temp = parseFloat(temp.toFixed(3));
        S_mu[i] = temp;
    }
    SSb = parseFloat(SSb.toFixed(3));
    SSw = parseFloat(SSw.toFixed(3));
    SSt = parseFloat((SSb + SSw).toFixed(3));
    F_a2 = parseFloat((SSb / (k - 1) / (SSw / (N - k))).toFixed(3));
    for (let i = 0; i < 15; i++) {
        let arr = [];
        for (let j = 0; j < mu_a2.length; j++) {
            arr.push(mu_a2[j][i] || '');
        }
        a2_table_data1.push(arr);
    }
}
function a2_show_table1() {
    let header = [
        'N(&mu;<sub>1</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>2</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>3</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>4</sub>, &sigma;<sup>2</sup>)',
        'N(&mu;<sub>5</sub>, &sigma;<sup>2</sup>)',
    ];
    let tb_box1 = (document.getElementById('act2-tb-box1'));
    let tab1 = new Display_Table(header, a2_table_data1, tb_box1);
    tab1.load_table();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <div id="act2-vf-table-div" class='table-responsive' style='margin: auto;'>
      <table class='table table-bordered' style='background-color: white;' id="act2-verification-table">
         <tr>
            <th class='table-dark'></th>
            <th class='table-dark'>N(&mu;<sub>1</sub>, &sigma;<sup>2</sup>)</th>
            <th class='table-dark'>N(&mu;<sub>2</sub>, &sigma;<sup>2</sup>)</th>
            <th class='table-dark'>N(&mu;<sub>3</sub>, &sigma;<sup>2</sup>)</th>
            <th class='table-dark'>N(&mu;<sub>4</sub>, &sigma;<sup>2</sup>)</th>
            <th class='table-dark'>N(&mu;<sub>5</sub>, &sigma;<sup>2</sup>)</th>
         </tr>
         <tr id="act2-mean-row">
         
         </tr>
         <tr id="act2-var-row">
         
         </tr>
      </table>
      <br>
      <button class='btn btn-info std-btn' onclick='a2_verify_table2();' style='position: relative; left: 0w;' id='act2-vf-table2-btn'>Verify</button>
   </div>
   `;
    a2_load_mean_table2_data(false);
    a2_load_var_table2_data(false);
}
function a2_load_mean_table2_data(show) {
    let mean_row = (document.getElementById('act2-mean-row'));
    mean_row.innerHTML = '';
    mean_row.innerHTML = `<th class='table-dark'>Mean</th>`;
    if (show) {
        for (let i = 0; i < 5; i++) {
            mean_row.innerHTML += `
         <td>
            <input type='number' id='act2-mu${i + 1}-mean-inp' class='form-control fs-16px' value="${bar_mu[i]}" disabled/>
         </td>
         `;
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            mean_row.innerHTML += `
         <td>
            <input type='number' id='act2-mu${i + 1}-mean-inp' class='form-control fs-16px'/>
         </td>
         `;
        }
    }
}
function a2_load_var_table2_data(show) {
    let var_row = (document.getElementById('act2-var-row'));
    var_row.innerHTML = '';
    var_row.innerHTML = `<th class='table-dark'>Var(S)</th>`;
    if (show) {
        for (let i = 0; i < 5; i++) {
            var_row.innerHTML += `
         <td>
            <input type='number' id='act2-mu${i + 1}-var-inp' class='form-control fs-16px' value="${S_mu[i]}" disabled />
         </td>
         `;
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            var_row.innerHTML += `
         <td>
            <input type='number' id='act2-mu${i + 1}-var-inp' class='form-control fs-16px' />
         </td>
         `;
        }
    }
}
function a2_verify_mean_table2() {
    let mu1_bar_inp = (document.getElementById('act2-mu1-mean-inp'));
    let mu2_bar_inp = (document.getElementById('act2-mu2-mean-inp'));
    let mu3_bar_inp = (document.getElementById('act2-mu3-mean-inp'));
    let mu4_bar_inp = (document.getElementById('act2-mu4-mean-inp'));
    let mu5_bar_inp = (document.getElementById('act2-mu5-mean-inp'));
    if (!verify_values(parseFloat(mu1_bar_inp.value), bar_mu[0])) {
        mu1_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu1 mean value');
        return false;
    }
    else {
        mu1_bar_inp.style.border = '1px solid #ced4da';
        mu1_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu2_bar_inp.value), bar_mu[1])) {
        mu2_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu2 mean value');
        return false;
    }
    else {
        mu2_bar_inp.style.border = '1px solid #ced4da';
        mu2_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu3_bar_inp.value), bar_mu[2])) {
        mu3_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu3 mean value');
        return false;
    }
    else {
        mu3_bar_inp.style.border = '1px solid #ced4da';
        mu3_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu4_bar_inp.value), bar_mu[3])) {
        mu4_bar_inp.style.border = '1px solid red';
        alert('Incorrect mu4 mean value');
        return false;
    }
    else {
        mu4_bar_inp.style.border = '1px solid #ced4da';
        mu4_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu5_bar_inp.value), bar_mu[4])) {
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
function a2_verify_var_table2() {
    let mu1_var_inp = (document.getElementById('act2-mu1-var-inp'));
    let mu2_var_inp = (document.getElementById('act2-mu2-var-inp'));
    let mu3_var_inp = (document.getElementById('act2-mu3-var-inp'));
    let mu4_var_inp = (document.getElementById('act2-mu4-var-inp'));
    let mu5_var_inp = (document.getElementById('act2-mu5-var-inp'));
    if (!verify_values(parseFloat(mu1_var_inp.value), S_mu[0])) {
        mu1_var_inp.style.border = '1px solid red';
        alert('Incorrect mu1 variance value');
        return false;
    }
    else {
        mu1_var_inp.style.border = '1px solid #ced4da';
        mu1_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu2_var_inp.value), S_mu[1])) {
        mu2_var_inp.style.border = '1px solid red';
        alert('Incorrect mu2 variance value');
        return false;
    }
    else {
        mu2_var_inp.style.border = '1px solid #ced4da';
        mu2_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu3_var_inp.value), S_mu[2])) {
        mu3_var_inp.style.border = '1px solid red';
        alert('Incorrect mu3 variance value');
        return false;
    }
    else {
        mu3_var_inp.style.border = '1px solid #ced4da';
        mu3_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu4_var_inp.value), S_mu[3])) {
        mu4_var_inp.style.border = '1px solid red';
        alert('Incorrect mu4 variance value');
        return false;
    }
    else {
        mu4_var_inp.style.border = '1px solid #ced4da';
        mu4_var_inp.disabled = true;
    }
    if (!verify_values(parseFloat(mu5_var_inp.value), S_mu[4])) {
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
function a2_verify_table2() {
    console.log(bar_mu);
    console.log(S_mu);
    if (a2_verify_mean_table2() && a2_verify_var_table2()) {
        let btn = (document.getElementById('act2-vf-table2-btn'));
        // btn && btn.remove();
        btn.removeEventListener('click', a2_verify_table2);
        btn.addEventListener('click', activity2_p1);
        btn.innerText = 'Next';
        alert('Great!! Your calculation is correct.');
        a2_load_mean_table2_data(true);
        a2_load_var_table2_data(true);
        // activity2_p1();
    }
    return;
}
// activity2();
//# sourceMappingURL=activity2.js.map