function activity2_p3() {
    let btn = (document.getElementById('act2-p2-btn-1'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Conclusion', 'act2-p3-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide" id="act2-p3-div">
      <div class="row justify-content-center fs-18px">
         <div class="col-sm-5">
            $$ F = ${F_a2} $$
         </div>
         <div class="col-sm-5">
            $$ F_{\\alpha,k-1,N-k} = ${F_alpha_a2} $$
         </div>
      </div>
      <br>
      <div class="fs-18px" style="text-align:left;">
         If <span style="display:inline-block;">$$ F > F_{\\alpha,k-1,N-k} $$</span> then we will reject the null nypothesis else we fail to reject the null hypothesis.
      </div>
      <div class="fs-18px" style="text-align:left;">
         So what can we conclude from the estimated values?
      </div>
      <br>
      <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-6" >
               <button id="act2-null-hypo-btn1" onclick="a2_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>
               Reject the null hypothesis
               </button>
            </div>
            <div class="col-lg-6">
               <button id="act2-null-hypo-btn2" onclick="a2_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center; margin-top:5px;'>
               Fail to reject the null hypothesis
               </button>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act2-p3-btn-1' onclick='activity2_p4();' >Next</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act2-p3-div');
    }, 150);
    a2_find_null_hypothesis();
}
function a2_find_null_hypothesis() {
    if (F_a2 > F_alpha_a2) {
        hypo_test_reject_op_a2 = 1;
    }
    else {
        hypo_test_reject_op_a2 = 2;
    }
}
function a2_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act2-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act2-p3-btn-1'));
    if (hypo_test_reject_op_a2 == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op_a2 == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op_a2) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a2_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act2-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
// activity1_p4();
//# sourceMappingURL=activity2_p3.js.map