function activity1_p2() {
    let btn = (document.getElementById('act1-p1-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate F', 'act1-p2-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act1-p2-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 3: </h4>
      <br>
      <p style='text-align: left;'>
         Calculate,
      </p>
      <div id="act1-p2-n-sy-div">
         <div class="row justify-content-center" style="align-items:center;"> 
            <div class="col-md-7">
               $$ ns_{\\bar{y}}^2 = \\frac{n\\sum_{i=1}^k{\\left(\\bar{y_i} - \\bar{y}\\right)^2}}{k-1} = \\frac{\\sum_i{y_i^2/n - y^2/kn}}{k-1} =  $$
            </div>
            <div class="col-md-5" style="text-align:left">
               <input type='number' id='n-sy-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_n_sy();' style='position: relative; left: 0w;' id='vf-n-sy-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p2-div');
    }, 150);
}
function verify_n_sy() {
    let inp = (document.getElementById('n-sy-inp'));
    console.log(n_Sy_sq);
    if (!verify_values(parseFloat(inp.value), n_Sy_sq)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p2-n-sy-div'));
    div.innerHTML = '';
    div.innerHTML = `
   $$ ns_{\\bar{y}}^2 = \\frac{n\\sum_{i=1}^k{\\left(\\bar{y_i} - \\bar{y}\\right)^2}}{k-1} = \\frac{\\sum_i{y_i^2/n - y^2/kn}}{k-1} =  ${n_Sy_sq} $$
   
   <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p2-btn-1' onclick='a1_load_f_div()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function a1_load_f_div() {
    let btn = (document.getElementById('act1-p2-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-p2-div'));
    div.innerHTML += `
   <div id="act1-p2-f-div">
      <div class="row justify-content-center" style="align-items:center;"> 
         <div class="col-lg-9">
            $$ F = \\frac{ns_y^2}{s_e^2} = \\frac{\\left(\\sum_i y_i^2/n - y^2/kn \\right)/\\left(k-1\\right)}{\\left(\\sum_{ij} y_{ij}^2 - \\sum{y_i^2/n}/\\left(k(n-1) \\right) \\right)} = \\frac{SS_b/(k-1)}{SS_w/k(n-1)} = \\frac{MS_b}{MS_e} = $$
         </div>
         <div class="col-lg-3" style="text-align:left">
            <input type='number' id='f-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='verify_f();' style='position: relative; left: 0w;' id='vf-f-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_f() {
    let f_inp = (document.getElementById('f-inp'));
    console.log(F);
    if (!verify_values(parseFloat(f_inp.value), F)) {
        f_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        f_inp.style.border = '1px solid #ced4da';
        f_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p2-f-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <br>
      $$ F = \\frac{ns_y^2}{s_e^2} = \\frac{\\left(\\sum_i y_i^2/n - y^2/kn \\right)/\\left(k-1\\right)}{\\left(\\sum_{ij} y_{ij}^2 - \\sum{y_i^2/n}/\\left(k(n-1) \\right) \\right)} = \\frac{SS_b/(k-1)}{SS_w/k(n-1)} = \\frac{MS_b}{MS_e} = ${F} $$
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p2-btn-2' onclick='activity1_p3()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map