function activity1_p1() {
    let btn = (document.getElementById('vf-table2-btn'));
    btn && btn.remove();
    a1_internal_calculation2();
    let btn_txt = get_collapse_btn_text('Estimate of &sigma;<sup>2</sup>', 'act1-p1-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act1-p1-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 2: </h4>
      <br>
      <p style='text-align: left;'>
         Calculate the overall mean,
      </p>
      <div id="act1-p1-calc">
         <div id="act1-p1-mu-bar-div">
            <div class="row justify-content-center" style="align-items:center;"> 
               <div class="col-sm-4">
                  $$ \\bar{y} = \\sum_{i=1}^k{\\bar{y_i}/k} =  $$
               </div>
               <div class="col-sm-4" style="text-align:left">
                  <input type='number' id='mu-bar-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <button class='btn btn-info std-btn' onclick='verify_mu_bar();' style='position: relative; left: 0w;' id='vf-bar-btn'>Verify</button>
         </div>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
}
function a1_internal_calculation2() {
    Se_sq = 0;
    Sy_sq = 0;
    n_Sy_sq = 0;
    mu_bar = 0;
    F = 0;
    F_alpha = 0;
    let sum_S = parseFloat((S1_sq + S2_sq + S3_sq + S4_sq + S5_sq).toFixed(3));
    Se_sq = parseFloat((sum_S / k).toFixed(3));
    mu_bar = parseFloat((mu1_bar / k +
        mu2_bar / k +
        mu3_bar / k +
        mu4_bar / k +
        mu5_bar / k).toFixed(3));
    let temp_sy = parseFloat((Math.pow((mu1_bar - mu_bar), 2) +
        Math.pow((mu2_bar - mu_bar), 2) +
        Math.pow((mu3_bar - mu_bar), 2) +
        Math.pow((mu4_bar - mu_bar), 2) +
        Math.pow((mu5_bar - mu_bar), 2)).toFixed(3));
    Sy_sq = parseFloat((temp_sy / (k - 1)).toFixed(3));
    n_Sy_sq = parseFloat((n * Sy_sq).toFixed(3));
    F = parseFloat((n_Sy_sq / Se_sq).toFixed(3));
    F_alpha = calculate_f_alpha();
}
//if keys of f_table_pt_05 changes then consider rechecking this function
function calculate_f_alpha() {
    let x = df2;
    let x1;
    let x2;
    let y1;
    let y2;
    let m;
    let c;
    let y;
    if (x <= 30) {
        return f_table_pt_05[x - 1][df1];
    }
    else if (x === 40 || x === 60 || x === 120) {
        switch (x) {
            case 40:
                return f_table_pt_05[30][df1];
            case 60:
                return f_table_pt_05[31][df1];
            case 120:
                return f_table_pt_05[32][df1];
            default:
                console.log("I'm here");
        }
    }
    else if (x > 30 && x < 40) {
        x1 = 40;
        x2 = 30;
        y1 = f_table_pt_05[30][df1];
        y2 = f_table_pt_05[29][df1];
    }
    else if (x > 40 && x < 60) {
        x1 = 60;
        x2 = 40;
        y1 = f_table_pt_05[31][df1];
        y2 = f_table_pt_05[30][df1];
    }
    else if (x > 60 && x < 120) {
        x1 = 120;
        x2 = 60;
        y1 = f_table_pt_05[32][df1];
        y2 = f_table_pt_05[31][df1];
    }
    m = parseFloat(((y1 - y2) / (x1 - x2)).toFixed(4));
    c = parseFloat((y1 - m * x1).toFixed(4));
    y = parseFloat((m * x + c).toFixed(4));
    return y;
}
function verify_mu_bar() {
    let inp = (document.getElementById('mu-bar-inp'));
    console.log(mu_bar);
    if (!verify_values(parseFloat(inp.value), mu_bar)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-mu-bar-div'));
    let outer_div = (document.getElementById('act1-p1-calc'));
    div.innerHTML = '';
    div.innerHTML = `
      $$
      \\bar{y} = \\sum_{i=1}^k{\\bar{y_i}/k} =  ${mu_bar}
      $$
   `;
    outer_div.innerHTML += `
   <br>
   
   <div id="act1-p1-s-div">
      <p style="text-align:left;">
         The test involves computing and comparing two different estimates of σ<sup>2</sup>. The first estimate of σ<sup>2</sup> is a pooled, ‘within-sample’ estimator:
      </p>
      <div class="row justify-content-center" style="align-items:center;"> 
         <div class="col-md-9">
            $$ s_e^2 = \\frac{1}{k} \\sum_{i=1}^k{s_i^2} = \\frac{\\sum_{i=1}^k{\\sum_{j=1}^n}{\\left(y_{ij} - \\bar{y_i}\\right)^2}}{k(n-1)} = \\frac{\\sum_{ij}{y_{ij}^2} - \\sum{y_i^2/n}}{k(n-1)} =  $$
         </div>
         <div class="col-md-3" style="text-align:left">
            <input type='number' id='se-inp' class='form-control fs-16px' />
         </div>
      </div>
      <p style="text-align:left;">
         The second estimate is calculated from the variance of the sample means:
      </p>
      <div class="row justify-content-center" style="align-items:center;"> 
         <div class="col-sm-5">
            $$ s_{\\bar{y}}^2 = \\frac{\\sum_{i=1}^k{\\left(\\bar{y_i} - \\bar{y}\\right)^2}}{k-1} = $$
         </div>
         <div class="col-sm-4" style="text-align:left">
            <input type='number' id='sy-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='verify_se_sy();' style='position: relative; left: 0w;' id='vf-se-sy-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_se_sy() {
    let se_inp = (document.getElementById('se-inp'));
    let sy_inp = (document.getElementById('sy-inp'));
    console.log(Se_sq, Sy_sq);
    if (!verify_values(parseFloat(se_inp.value), Se_sq)) {
        se_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        se_inp.style.border = '1px solid #ced4da';
        se_inp.disabled = true;
    }
    if (!verify_values(parseFloat(sy_inp.value), Sy_sq)) {
        sy_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        sy_inp.style.border = '1px solid #ced4da';
        sy_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p1-s-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <p style="text-align:left;">
      The test involves computing and comparing two different estimates of σ<sup>2</sup>. The first estimate of σ<sup>2</sup> is a pooled, ‘within-sample’ estimator:
   </p>
   <div>
   $$ s_e^2 = \\frac{1}{k} \\sum_{i=1}^k{s_i^2} = \\frac{\\sum_{i=1}^k{\\sum_{j=1}^n}{\\left(y_{ij} - \\bar{y_i}\\right)^2}}{k(n-1)} = \\frac{\\sum_{ij}{y_{ij}^2} - \\sum{y_i^2/n}}{k(n-1)} =  ${Se_sq} $$
   </div>
   <p style="text-align:left;">
      The second estimate is calculated from the variance of the sample means:
   </p>
   <div>
      $$ s_{\\bar{y}}^2 = \\frac{\\sum_{i=1}^k{\\left(\\bar{y_i} - \\bar{y}\\right)^2}}{k-1} = ${Sy_sq} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p1-btn-1' onclick='activity1_p2()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
// activity1_p1();
//# sourceMappingURL=activity1_p1.js.map