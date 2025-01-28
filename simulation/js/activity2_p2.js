function activity2_p2() {
    let btn = (document.getElementById('act2-p1-btn-1'));
    btn && btn.remove();
    F_alpha_a2 = 0;
    F_alpha_a2 = a2_calculate_f_alpha();
    let btn_txt = get_collapse_btn_text('F-table', 'act2-p2-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide text-center" id="act2-p2-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 3: </h4>
      <br>
      <div id="act2-p2-tb-box"></div>
      <br>
      <div id="act2-f-alpha-div">
         <div class="fs-18px">
            $$ \α = ${alpha} $$ 
         </div>
         <br>
         <div class="row justify-content-center" style="align-items:center;"> 
            <div class="col-sm-4">
               $$ F_{\\alpha,k-1,N-k} =  $$
            </div>
            <div class="col-sm-4" style="text-align:left">
               <input type='number' id='act2-f-alpha-inp'  class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' onclick='a2_verify_f_alpha();' style='position: relative; left: 0w;' id='act2-vf-f-alpha-btn'>Verify</button>
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
    let tb_box = (document.getElementById('act2-p2-tb-box'));
    let tab = new Display_Table(header, f_table_data, tb_box);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p2-div');
    }, 150);
}
function a2_verify_f_alpha() {
    let inp = (document.getElementById('act2-f-alpha-inp'));
    console.log(F_alpha_a2);
    if (!verify_values(parseFloat(inp.value), F_alpha_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-f-alpha-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center">
         <div class="col-sm-4">
            $$ \α = ${alpha} $$
         </div>
         <div class="col-sm-4">
            $$ F_{\\alpha,k-1,N-k} = ${F_alpha_a2} $$
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act2-p2-btn-1' onclick='activity2_p3()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function a2_calculate_f_alpha() {
    let x = N - k;
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
//# sourceMappingURL=activity2_p2.js.map