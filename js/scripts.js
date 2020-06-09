$(document).ready(function(){
  $("form#stressTest").submit(function(event){
    event.preventDefault();
    $("#StressorsList").show();
    const stressArray =[]
    const relaxArray=[]
    $("input:checkbox[name=stress-aggrivators]:checked").each(function(){
      const stressCauses = $(this).val();
      $("#StressorsList").append(stressCauses + "<br>");
      stressArray.push(this);
    });
    $("#RelaxorsList").show();
    $("input:checkbox[name=stress-preventors]:checked").each(function(){
      const stressRelievers = $(this).val();
      $("#RelaxorsList").append(stressRelievers + "<br>");
      relaxArray.push(this);
    });
    if(relaxArray.length > stressArray.length){
      $("#great").show();
    } else if (relaxArray.length === stressArray.length) {
      $("#okay").show();
    }else if (stressArray.length > relaxArray.length){
      $("#need-help").show();
    }

    
    $("form#stressTest").hide();

    //if relaxors > stressors == Doing great! 
    //if else relaxors = stressors == okay
    //if stress > relazors == need help
    
  

  });
});