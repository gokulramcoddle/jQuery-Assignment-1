$(document).ready(()=>{

    //id selector
$("#ocbtn").click(()=>{
    //class selector
    //toggle event
    $(".div-box").toggle();
    let visible=$(".div-box").is(":visible");
    $("#ocbtn").text(visible ? "Close" : "Open");
})
    //click event
$("#changeclr").click(() => {
    $("#changeclr").text(function(_,txt) {
        if (txt === "Change") {
            $(".box").css({"background-color": "black","color":"red"});
            return "Reset";
        } else {
            $(".box").css({"background-color": "red","color":"white"});
            return "Change";
        }
    });
});
    //mouse event
$("#ocbtn").mouseenter(()=>{
    $("#ocbtn").css({"background-color":"blue", "color":"white"});
 }).mouseleave(()=>{
    $("#ocbtn").css({"background-color":"", "color":""});
 });

 //tag selector
 $("a").click(()=>{
    $("h2").text("jQuery Assignment-1");
 })

 //input type selector
//change event
 $("input[type='checkbox']").change(()=>{
    if($("input[type='checkbox']").is(":checked")){
      alert("Do you want to Check?");
    }
    else{
        alert("Do you want to Uncheck?")
    }
 })

 //append
$("#addbtn").click(()=>{
    let val=$(".additem input").val();
  if(val.trim()!== ""){
   let listdiv=$("<div>").text(val).css({"margin":"5px 0px","padding":"10px","border":"solid 1px black","height":"30px","width":"300px"});
  $(".todolist").append(listdiv);
  }
});

});

//key event
$(document).keyup((e)=>{
   if(e.key==="g"){
    alert("G is pressed");
   }
})