function activity2_p4() {
    let btn = (document.getElementById('act2-p3-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('ANOVA Table', 'act2-p4-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide text-center" id="act2-p4-div">
      <div id="act2-tb-box2">
         <div class='table-responsive' >
            <table class='table table-stripped'>
               <thead  class='table-dark' >
                  <th>Source of variation</th>
                  <th>Sum of squares</th>
                  <th>df</th>
                  <th>Mean sum of squares</th>
               </thead>
               <tbody>
                  <tr>
                     <td>Treatments</td>
                     <td>SS<sub>b</sub> = ${SSb}</td>
                     <td>k-1 = ${k - 1}</td>
                     <td>MS<sub>b</sub> = SS<sub>b</sub> / (k-1) = ${(SSb /
        (k - 1)).toFixed(3)}</td>
                  </tr>
                  <tr>
                     <td>Error</td>
                     <td>SS<sub>w</sub> = ${SSw}</td>
                     <td>N-k = ${N - k}</td>
                     <td>MS<sub>e</sub> = SS<sub>w</sub> / (N-k) = ${(SSw /
        (N - k)).toFixed(3)}</td>
                  </tr>
                  <tr>
                     <td>Total</td>
                     <td>SS<sub>T</sub> = ${SSt}</td>
                     <td>N-1 = ${N - 1}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
      <br>
      <p style="text-align:left">Calculate SS<sub>T</sub> : </p>
      <div id="sst-div">
         <div class="row justify-content-center" style="align-items:center;"> 
            <div class="col-md-5">
               $$ SS_T = \\sum_{i=1}^k{\\sum_{j=1}^b{\\left(y_{ij} - \\bar{y}\\right)^2}} = SS_b + SS_w =   $$
            </div>
            <div class="col-md-4" style="text-align:left">
               <input type='number' id='act2-sst-inp'  class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a2_verify_sst_alpha();' style='position: relative; left: 0w;' id='act2-vf-sst-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p4-div');
    }, 150);
}
function a2_verify_sst_alpha() {
    let inp = (document.getElementById('act2-sst-inp'));
    console.log(SSt);
    if (!verify_values(parseFloat(inp.value), SSt)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('sst-div'));
    let outer_div = (document.getElementById('act2-p4-div'));
    div.innerHTML = '';
    div.innerHTML = `
      $$ SS_T = \\sum_{i=1}^k{\\sum_{j=1}^b{\\left(y_{ij} - \\bar{y}\\right)^2}} = SS_b + SS_w = ${SSt}  $$
   `;
    outer_div.innerHTML += `
   <br>
   <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p4-btn-1' onclick='exp_completed()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function exp_completed() {
    let btn = (document.getElementById('act2-p4-btn-1'));
    btn && btn.remove();
    alert('Experiment completed');
}
// activity2_p4();
//# sourceMappingURL=activity2_p4.js.map