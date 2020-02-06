var KeyHolder;
var essaie_permis=0;
function check_equals (){

    if(KeyHolder == document.getElementById("input").value){
        alert("true code");
    }else{
        alert("false");
        essaie_permis++;
    }
    if(essaie_permis == 5){
        alert("Aborting 5");
        window.close();
    }
}


setInterval(
    () => {

      let time = 59 - new Date().getSeconds();
      
      if (time == 0) {
        setTimeout(() =>Pm_Am_(), 500);
          
      }
    }
    , 1000)

    function Pm_Am_(){
    new Date().getHours() >= 12 ?Get_New_Key_For_AM() : Get_New_Key_For_Pm ();
      }
    function _Revers_Left(Last_elemnt , zdk){
      let alpha = [];
      while (Last_elemnt > 0) {
      for (let i = zdk.length -1 ; i >0; i--) {
        alpha[i-1] = zdk[i]
      }
      alpha[zdk.length-1] = zdk[0];
      zdk = alpha
      alpha = [];
      Last_elemnt--;
    }
    return zdk;
    }
    function _Revers_right(Last_elemnt , zdk){
      let alpha = [];
      while (Last_elemnt > 0) {
      for (let i = 0; i < zdk.length - 1; i++) {
        alpha[i + 1] = zdk[i]
      }
      alpha[0] = zdk[zdk.length - 1];
      zdk = alpha
      alpha = [];
      Last_elemnt--;
  }
  return zdk

    }
    function Get_us_Keys(Callback , ele ,list){
        let zdk = Callback(ele , list);
      let beta = zdk.toString().replace(/,/g, '');
    let j = 0;
    let table = [];
    while (j < zdk.length) {

      table.push(zdk[j]);
      j++;
    }
    let array = table.reverse();
    array = array.toString().replace(/,/g, '');
    let dision;
    if (array < beta) {
      dision = beta / array;
    } else {
      dision = array / beta;
    }

    return dision;
    }
    function Get_us_current_Date(){
      let Current_Date = new Date();

let zdk = (Current_Date.getDate() + "" + (Current_Date.getMonth()+1) + "" + Current_Date.getFullYear()+((Current_Date.getHours() < 10 ? "0" : "")+ Current_Date.getHours()) + (Current_Date.getMinutes() < 10 ? "0" : '') + Current_Date.getMinutes());
      
      return zdk;
  }
    function Get_New_Key_For_Pm(){
     

    let zdk = Get_us_current_Date();
    
    let First_elemnt = parseInt(zdk[zdk.length -1 ]);
    let Returned_string = Get_us_Keys(_Revers_Left ,First_elemnt , zdk);
    //We use A function 
    let Secret_code = (Returned_string/ (1+Returned_string)).toString();
    KeyHolder = Secret_code.substr(4,8);

    Append_to_list();

    
    }
    function Get_New_Key_For_AM() {

    let zdk = Get_us_current_Date();
   

    let Last_elemnt = parseInt(zdk[zdk.length - 1]);
  
    let Returnedstring= Get_us_Keys( _Revers_right,Last_elemnt , zdk);;
        //We use another function
    let Secret_code = ((2 / Math.PI) * Math.atan((Math.PI / 2) *Returnedstring)).toString();
    KeyHolder = Secret_code.substr(4,8);
    Append_to_list();


  }
  function Append_to_list(){
    var ul = document.getElementById("ListAppend");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(KeyHolder));
    ul.appendChild(li);

  }
