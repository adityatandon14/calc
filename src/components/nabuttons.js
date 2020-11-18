
function checkParam(){
  
    if(ddimer == null && btn_dd == 0){
        document.getElementById("sdd").innerHTML = "D Dimer is needed or press N/A";
        window.alert("Please Provide D Dimer value or Press NA");
    }
    
    if(cpk == null && btn_cpk == 0){
        document.getElementById("scpk").innerHTML = "CPK is needed or press N/A";
        window.alert("Please Provide CPK value or Press NA");
    }
    
    if(crp == null && btn_cpk == 0){
        document.getElementById("scrp").innerHTML = "CRP is needed or press N/A";
        window.alert("Please Provide CRP value or Press NA");
    }
   
    if(ldh == null && btn_ldh == 0){
        document.getElementById("sldh").innerHTML = "LDH is needed or press N/A";
        window.alert("Please Provide LDH value or Press NA");
    }
    
    if(tropo == null && btn_tropo == 0){
        document.getElementById("str").innerHTML = "Tropopin is needed or press N/A";
        window.alert("Please Provide Tropopin value or Press NA");
    }
    
    if(ferr == null && btn_ferr == 0){
        document.getElementById("sfr").innerHTML = "Ferritin is needed or press N/A";
        window.alert("Please Provide Ferritin value or Press NA");
    }
    
    if(absolute == null && btn_abs == 0){
        document.getElementById("salc").innerHTML = "Absolute Lymphocyte Count is needed or press N/A";
        window.alert("Plear Provide ALC value or Press NA");
    }
    
    if(ctscan == null && btn_ctscan == 0){
        document.getElementById("salc").innerHTML = "CT(Corad Score) Count is needed or press N/A";
        window.alert("Please Provise CT(Corad Score) or Press NA");
    }
   
    if(apg == null && btn_abg == 0){
        document.getElementById("salc").innerHTML = "APG(P/F Ratio) Count is needed or press N/A";
        window.alert("Please Provide APG(P/F) ratio or Press NA");
    }
    
  

}
