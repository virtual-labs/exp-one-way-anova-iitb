function activity2_p1() {
    let btn = (document.getElementById('act2-vf-table2-btn'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Calculate F', 'act2-p1-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class='divide collapse text-center' id="act2-p1-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 2: </h4>
      <br>
      <p style='text-align: left;'>
         Calculate the overall mean :
      </p>
      <div id="act2-p1-calc">
         <div id="act2-p1-mu-bar-div">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-sm-4">
                  $$ \\bar{y} = \\sum_{i=1}^k{\\bar{y_i}/k} =  $$
               </div>
               <div class="col-sm-4" style="text-align:left">
                  <input type='number' id='act2-mu-bar-inp' class='form-control fs-16px' />
               </div>
            </div>
            <br>
            <button class='btn btn-info std-btn' onclick='a2_verify_mu_bar();' style='position: relative; left: 0w;' id='act2-vf-bar-btn'>Verify</button>
         </div>
      
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p1-div');
    }, 150);
}
function a2_verify_mu_bar() {
    let inp = (document.getElementById('act2-mu-bar-inp'));
    console.log(mu_bar_a2);
    if (!verify_values(parseFloat(inp.value), mu_bar_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p1-mu-bar-div'));
    let outer_div = (document.getElementById('act2-p1-calc'));
    div.innerHTML = '';
    div.innerHTML = `
      $$
      \\bar{y} = \\sum_{i=1}^k{\\bar{y_i}/k} =  ${mu_bar_a2}
      $$
   `;
    outer_div.innerHTML += `
   <br>
   <div id="act2-p1-ssb-div">
      <p style="text-align:left;">Calculate SS<sub>b</sub> :</p>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-5">
            $$ SS_b =  \\sum_{i=1}^k{n_i\\left(\\bar{y_i} - \\bar{y} \\right)^2} =  $$
         </div>
         <div class="col-sm-5">
            <input type='number' id='act2-ssb-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='verify_ssb();' style='position: relative; left: 0w;' id='vf-ssb-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_ssb() {
    let inp = (document.getElementById('act2-ssb-inp'));
    console.log(SSb);
    if (!verify_values(parseFloat(inp.value), SSb)) {
        inp.style.border = '1px solid red';
        alert('Incorrect SSb value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p1-ssb-div'));
    let outer_div = (document.getElementById('act2-p1-calc'));
    div.innerHTML = '';
    div.innerHTML = `
   <p style="text-align:left;">Calculate SS<sub>b</sub> :</p>
   $$ SS_b =  \\sum_{i=1}^k{n_i\\left(\\bar{y_i} - \\bar{y} \\right)^2} = ${SSb} $$
   `;
    outer_div.innerHTML += `
      <br>

      <div id="act2-p1-ssw-div">
         <p style="text-align:left;">Calculate SS<sub>w</sub> :</p>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$ SS_w = \\sum_{i=1}^k{\\sum_{j=1}^{n_i}{\\left(y_{ij} - \\bar{y_i} \\right)^2}} =  $$
            </div>
            <div class="col-md-4">
               <input type='number' id='act2-ssw-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_ssw();' style='position: relative; left: 0w;' id='vf-ssw-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_ssw() {
    let inp = (document.getElementById('act2-ssw-inp'));
    console.log(SSw);
    if (!verify_values(parseFloat(inp.value), SSw)) {
        inp.style.border = '1px solid red';
        alert('Incorrect SSw value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p1-ssw-div'));
    let outer_div = (document.getElementById('act2-p1-calc'));
    div.innerHTML = '';
    div.innerHTML += `
      <p style="text-align:left;">Calculate SS<sub>w</sub> :</p>
         $$ SS_w = \\sum_{i=1}^k{\\sum_{j=1}^{n_i}{\\left(y_{ij} - \\bar{y_i} \\right)^2}} = ${SSw} $$
   `;
    outer_div.innerHTML += `
      <br>
      <div id="act2-p1-N-div">
         <p style="text-align:left;">Calculate N :</p>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-sm-4">
               $$ N = \\sum_{i=1}^k{n_i} =  $$
            </div>
            <div class="col-sm-4">
               <input type='number' id='N-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_N();' style='position: relative; left: 0w;' id='vf-N-btn'>Verify</button>
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_N() {
    let inp = (document.getElementById('N-inp'));
    console.log(N);
    if (!verify_values(parseFloat(inp.value), N)) {
        inp.style.border = '1px solid red';
        alert('Incorrect N value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p1-N-div'));
    let outer_div = (document.getElementById('act2-p1-calc'));
    div.innerHTML = '';
    div.innerHTML = `
   <p style="text-align:left;">Calculate N :</p>
   $$ N = \\sum_{i=1}^k{n_i} = ${N} $$
   `;
    outer_div.innerHTML += `
   <br>

   <div id="act2-p1-f-div">
      <p style="text-align:left;">Calculate F :</p>
      
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-4">
            $$ F = \\frac{SS_b / (k - 1)}{SS_w / (N - k)} =  $$
         </div>
         <div class="col-sm-4">
            <input type='number' id='act2-f-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='a2_verify_f();' style='position: relative; left: 0w;' id='act2-vf-f-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function a2_verify_f() {
    let inp = (document.getElementById('act2-f-inp'));
    console.log(F_a2);
    if (!verify_values(parseFloat(inp.value), F_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect F value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p1-f-div'));
    let outer_div = (document.getElementById('act2-p1-calc'));
    div.innerHTML = '';
    div.innerHTML = `
   <p style="text-align:left;">Calculate F :</p>
   $$ F = \\frac{SS_b / (k - 1)}{SS_w / (N - k)} = ${F_a2} $$
   `;
    outer_div.innerHTML += `
   <br>

   <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p1-btn-1' onclick='activity2_p2()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
// activity2_p1();
//# sourceMappingURL=activity2_p1.js.map