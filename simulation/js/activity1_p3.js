function activity1_p3() {
    let btn = (document.getElementById('act1-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('F-table', 'act1-p3-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act1-p3-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 4: </h4>
      <br>
      <div id="act1-p3-tb-box"></div>
      <br>
      <div id="f-alpha-div">
         <div class="fs-18px">
            $$ \α = ${alpha} $$ 
         </div>
         <br>
         <div class="row justify-content-center" style="align-items:center;"> 
            <div class="col-sm-4">
               $$ F_{\\alpha,k-1,k(n-1)} =  $$
            </div>
            <div class="col-sm-4" style="text-align:left">
               <input type='number' id='f-alpha-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='verify_f_alpha();' style='position: relative; left: 0w;' id='vf-f-alpha-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    let header = [
        'df<sub>1</sub>&rarr; df<sub>2</sub>&darr;',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        15,
        20,
        24,
        30,
        40,
        60,
        120,
        '&infin;',
    ];
    let tb_box = (document.getElementById('act1-p3-tb-box'));
    let tab = new Display_Table(header, f_table_data, tb_box);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p3-div');
    }, 150);
}
function verify_f_alpha() {
    let inp = (document.getElementById('f-alpha-inp'));
    console.log(F_alpha);
    if (!verify_values(parseFloat(inp.value), F_alpha)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('f-alpha-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center">
         <div class="col-sm-4">
            $$ \α = ${alpha} $$
         </div>
         <div class="col-sm-4">
            $$ F_{\\alpha,k-1,k(n-1)} = ${F_alpha} $$
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p3-btn-1' onclick='activity1_p4()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
// activity1_p3();
//# sourceMappingURL=activity1_p3.js.map