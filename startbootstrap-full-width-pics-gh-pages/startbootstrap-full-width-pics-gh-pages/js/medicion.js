function cambio_unidades(){
    const resultado = document.getElementById("result");
    let input=document.getElementById("inputP").value;
    let data01=document.getElementById("data01").value;
   let data02=document.getElementById("data02").value;
        if(data01==1 && data02==2){
            let conversion = input *10;
           resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==1 && data02==3 ){
            let conversion = input *100;
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 1 && data02 ==4){
            let conversion = input *1000;
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==1 && data02==5 ){
            let conversion = input *10000;
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 1 && data02 ==6){
            let conversion = input *100000;
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 1 && data02 ==7){
            let conversion = input *1000000;
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==2 && data02==1){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==2 && data02==3 ){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 2 && data02 ==4){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==2 && data02==5 ){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 2 && data02 ==6){
            let conversion = input *10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 2 && data02 ==7){
            let conversion = input *100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==3 && data02==1){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==3 && data02==2 ){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 3 && data02 ==4){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==3 && data02==5 ){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 3 && data02 ==6){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 3 && data02 ==7){
            let conversion = input *10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==4 && data02==1){
            let conversion = input /1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==4 && data02==2 ){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 4 && data02 ==3){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==4 && data02==5 ){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 4 && data02 ==6){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 4 && data02 ==7){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==5 && data02==1){
            let conversion = input /10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==5 && data02==2 ){
            let conversion = input /1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 5 && data02 ==3){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==5 && data02==4 ){
            let conversion = input/10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 5 && data02 ==6){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 5 && data02 ==7){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==6 && data02==1){
            let conversion = input /100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==6 && data02==2 ){
            let conversion = input /10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 6 && data02 ==3){
            let conversion = input /1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==6 && data02==4 ){
            let conversion = input/100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 6 && data02 ==5){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 6 && data02 ==7){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
       else if(data01==7 && data02==1){
            let conversion = input /1000000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==7 && data02==2 ){
            let conversion = input /100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 7 && data02 ==3){
            let conversion = input /10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==7 && data02==4 ){
            let conversion = input/1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 7 && data02 ==5){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 7 && data02 ==6){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==8 && data02==9){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==8 && data02==10){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 8 && data02 ==12){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==8 && data02==5 ){
            let conversion = input *10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 8 && data02 ==13){
            let conversion = input *100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 8 && data02 ==14){
            let conversion = input *1000000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
      else if(data01==9 && data02==8){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==9 && data02==10){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 9 && data02 ==11){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==9 && data02==12){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 9 && data02 ==13){
            let conversion = input *10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 9 && data02 ==14){
            let conversion = input *100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==10 && data02==8){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==10 && data02==9){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 10 && data02 ==11){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==10 && data02==12){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 10 && data02 ==13){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 10 && data02 ==14){
            let conversion = input *10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==11&& data02==8){
            let conversion = input /1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==11 && data02==9){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 ==11 && data02 ==10){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==11 && data02==12 ){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 11 && data02 ==13){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 11 && data02 ==14){
            let conversion = input *1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
       else if(data01==12 && data02==8){
            let conversion = input /10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==12 && data02==9){
            let conversion = input /1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 12 && data02 ==10){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==12 && data02==11){
            let conversion = input/10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 12 && data02==13){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 12 && data02 ==14){
            let conversion = input *100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
       else if(data01==13 && data02==8){
            let conversion = input /100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==13 && data02==9){
            let conversion = input /10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 13 && data02==10){
            let conversion = input /1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==13 && data02==11){
            let conversion = input/100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 13 && data02 ==12){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 13 && data02 ==14){
            let conversion = input *10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else if(data01==14 && data02==8){
            let conversion = input /1000000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==14 && data02==9){
            let conversion = input /100000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 14 && data02==10){
            let conversion = input /10000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if(data01==14 && data02==11){
            let conversion = input/1000
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 == 14 && data02 ==12){
            let conversion = input /100
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        } else if (data01 ==14 && data02 ==13){
            let conversion = input /10
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+conversion+'</P>';
        }
        else{
            let mesaje= "Paila :)"
            resultado.innerHTML='<P class="text-center mt-4" style="padding:1px; background-color: white; border-radius: 5px;">'+mesaje+'</P>';
        }
}
function cinematica(){
    let form = document.getElementById("form").value;
    let select = document.getElementById("select");
        if(form==1){
            select.innerHTML =`<div class="selecto col-12 mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="dat1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad" style="width: 20em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="dat2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 20em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="calc()">Calcular</button>
                            </div>`;
        } else if (form==2) {
            select.innerHTML =`<div class="selecto col-12 mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="dat1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia" style="width: 20em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="dat2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad" style="width: 20em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="calc()">Calcular</button>
                            </div>`;
        } else if (form==3){
            select.innerHTML =`<div class="selecto col-12 mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="dat1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia" style="width: 20em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="dat2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 20em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="calc()">Calcular</button>
                            </div>`;
        }
}
function calc(){
    let form = document.getElementById("form").value;
    let result = document.getElementById("resulta");
    let data01 = document.getElementById("dat1").value;
    let data02 = document.getElementById("dat2").value;
    if (form==1){
        let calculo= data01*data02;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+calculo+'</P>';
    } else if (form==2){
        let calculo= data01/data02;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+calculo.toFixed(2)+'</P>';
    }  else if (form==3){
        let calculo= data01/data02;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+calculo.toFixed(2)+'</P>';
    }
}
function cinematica_ma(){
    let forma = document.getElementById("for").value;
    let select = document.getElementById("select0");
        if(forma==1){
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Aceleración" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ma()">Calcular</button>
                            </div>`;
        } else if (forma==2) {
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad final" style="width: 10em;">
                </div>
                <div class="col-12 col-md-12 d-flex justify-content-center">
                    <input type="number" id="data4" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ma()">Calcular</button>
                            </div>`;
        } else if (forma==3){
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia Inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Aceleración" style="width: 10em;">
                </div>
                <div class="col-12 col-md-12 d-flex justify-content-center">
                    <input type="number" id="data4" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ma()">Calcular</button>
                            </div>`;
        } else if (forma==4){
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Aceleración" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-12 d-flex justify-content-center">
                    <input type="number" id="data4" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia final" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ma()">Calcular</button>
                            </div>`;
        } else if (forma==5){
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad final" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data3" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-12 d-flex justify-content-center">
                    <input type="number" id="data4" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo final" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ma()">Calcular</button>
                            </div>`;
        } 
}
function ma(){
    let form = document.getElementById("for").value;
    let result= document.getElementById("resul0");
    if (form==1){
        let data1=document.getElementById("data1").value;
        data1=parseInt(data1);
        let data2=document.getElementById("data2").value;
        let data3=document.getElementById("data3").value;
        let ecuation=(data2*data3);
        let final = data1+ecuation;
        console.log(final)
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final+'</P>';
    } else if (form==2){
        let data1=document.getElementById("data1").value;
        data1=parseInt(data1);
        let data2=document.getElementById("data2").value;
        data2=parseInt(data2);
        let data3=document.getElementById("data3").value;
        data3=parseInt(data3);
        let data4=document.getElementById("data4").value;
        data4=parseInt(data4);
        let ecuation=((data2+data3)*data4)/2;
        let final = data1+ecuation;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final+'</P>';
    } else if (form==3){
        let data1=document.getElementById("data1").value;
        data1=parseInt(data1);
        let data2=document.getElementById("data2").value;
        data2=parseInt(data2);
        let data3=document.getElementById("data3").value;
        data3=parseInt(data3);
        let data4=document.getElementById("data4").value;
        data4=parseInt(data4);
        let ecuation=(data3*(data4*data4))/2;
        let final = (data1+(data2*data4))+ecuation;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final+'</P>';
    }  else if (form==4){
        let data1=document.getElementById("data1").value;
        data1=parseInt(data1);
        let data2=document.getElementById("data2").value;
        data2=parseInt(data2);
        let data3=document.getElementById("data3").value;
        data3=parseInt(data3);
        let data4=document.getElementById("data4").value;
        data4=parseInt(data4);
        let ecuation=((data1*data1)+((2*data2)*(data4-data3)));
        let final = Math.sqrt(ecuation);
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final.toFixed(2)+'</P>';
    } else if (form==5){
        let data1=document.getElementById("data1").value;
        data1=parseInt(data1);
        let data2=document.getElementById("data2").value;
        data2=parseInt(data2);
        let data3=document.getElementById("data3").value;
        data3=parseInt(data3);
        let data4=document.getElementById("data4").value;
        data4=parseInt(data4);
        let ecuation=(data2-data1)/(data4-data3);
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+ecuation+'</P>';
    }
}
function cinematica_ca(){
    let forma = document.getElementById("forma2").value;
    let select = document.getElementById("select1");
        if(forma==1){
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6  d-flex justify-content-center">
                    <input type="number" id="data01" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="data03" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ca()">Calcular</button>
                            </div>`;
        } else if (forma==2) {
            select.innerHTML =`<div class=" mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data01" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data02" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data03" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad final" style="width: 10em;">
                </div>
                <div class="col-12 col-md-12 d-flex justify-content-center">
                    <input type="number" id="data04" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ca()">Calcular</button>
                            </div>`;
        } else if (forma==3){
            select.innerHTML =`<div class=" mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data01" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia Inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data02" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                </div>
                <div class="col-12 col-md-4 d-flex justify-content-center">
                    <input type="number" id="data04" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ca()">Calcular</button>
                            </div>`;
        } else if (forma==4){
            select.innerHTML =`<div class=" mt-2 d-flex justify-content-center">
                                    <div class="row g-3 ">
                                        <div class="col-12 col-md-4 d-flex justify-content-center">
                                            <input type="number" id="data01" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad inicial" style="width: 10em;">
                                        </div>
                                        <div class="col-12 col-md-4 d-flex justify-content-center">
                                            <input type="number" id="data03" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia inicial" style="width: 10em;">
                                        </div>
                                        <div class="col-12 col-md-4 d-flex justify-content-center">
                                            <input type="number" id="data04" class="form-control" aria-describedby="passwordHelpInline" placeholder="Distancia final" style="width: 10em;">
                                        </div>
                                      </div>        
                                    </div>
                                    <div class="buton d-flex justify-content-center mt-2">
                                                        <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="ca()">Calcular</button>
                                                    </div>`;
        }
}
function ca(){
    let form = document.getElementById("forma2").value;
    let result = document.getElementById("resultado");
    let a=-9.8;
    if (form==1){
        let data01=document.getElementById("data01").value;
        data01=parseInt(data01);
        let data03=document.getElementById("data03").value;
        let ecuation=(a*data03);
        let final = data01+ecuation;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final+'</P>';
    } else if (form==2){
        let data01=document.getElementById("data01").value;
        data01=parseInt(data01);
        let data02=document.getElementById("data02").value;
        data02=parseInt(data02);
        let data03=document.getElementById("data03").value;
        data03=parseInt(data03);
        let data04=document.getElementById("data04").value;
        data04=parseInt(data04);
        let ecuation=((data02+data03)*data04)/2;
        let final = data01+ecuation;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final+'</P>';
    } else if (form==3){
        let data01=document.getElementById("data01").value;
        data01=parseInt(data01);
        let data02=document.getElementById("data02").value;
        data02=parseInt(data02);
        let data04=document.getElementById("data04").value;
        data04=parseInt(data04);
        let ecuation=(a*(data04*data04))/2;
        let final = (data01+(data02*data04))+ecuation;
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final+'</P>';
    }  else if (form==4){
        let data01=document.getElementById("data01").value;
        data01=parseInt(data01);
        let data03=document.getElementById("data03").value;
        data03=parseInt(data03);
        let data04=document.getElementById("data04").value;
        data04=parseInt(data04);
        let ecuation=((data01*data01)+((2*a)*(data04-data03)));
        //turn in positive
        let final = Math.sqrt(Math.abs(ecuation));
        result.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+final.toFixed(2)+'</P>';
    }
}
function forms_genetare(){
    let select = document.getElementById("select1");
        select.innerHTML =`<div class="num col-12 mb-4 mt-2 d-flex justify-content-center">
                                <select id="for" class="form-select w-50" aria-label="Default select example">
                                    <option selected>¿Qué quieres encontrar?</option>
                                    <option value="1">Tiempo de vuelo</option>
                                    <option value="2">Alcance maxima</option>
                                    <option value="3">Altura maxima</option>
                                  </select>
                            </div>
                            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick=" movimiento_para()">Buscar formula</button>
                            </div>
                            <div id="select2"></div>
                            <div id="select3"></div>`;
    
}
function cal_2(){
    let selec=document.getElementById("select0");
    let dat1=document.getElementById("da1").value;
    dat1=parseInt(dat1);
    let dat2=document.getElementById("da2").value;
    dat2=parseInt(dat2);
    console.log(dat2)
    let sin= (Math.sin(dat2*(Math.PI/180)));
    let vx= dat1 * (Math.cos(dat2*(Math.PI/180)));
    let vy= dat1* sin;
    console.log(sin);
    selec.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+"Velocidad en x: "+vx+'</P>';
    selec.innerHTML+='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+"Velocidad en y: "+Math.round(vy)+'</P>';
    selec.innerHTML+=`<div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="forms_genetare()">Formulas</button>
                            </div>`;
    selec.innerHTML+=`<div id="select1></div>"`;
}
function movimiento_para(){
    let forma = document.getElementById("for").value;
    let select = document.getElementById("select2");
        if(forma==1){
            select.innerHTML =`<div class="container mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="d1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad i y" style="width: 10em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="d2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Gravedad" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="para()">Calcular</button>
                            </div>
                        <div id="select3"></div>`;
        } else if (forma==2) {
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="d1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad i x" style="width: 10em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="d2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo de vuelo" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="para()">Calcular</button>
                            </div>
                            <div id="select3"></div>`;
        } else if (forma==3){
            select.innerHTML =`<div class="mt-2 d-flex justify-content-center">
            <div class="row g-3">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="d1" class="form-control" aria-describedby="passwordHelpInline" placeholder="Velocidad i y" style="width: 10em;">
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <input type="number" id="d2" class="form-control" aria-describedby="passwordHelpInline" placeholder="Tiempo de subida" style="width: 10em;">
                </div>
              </div>        
            </div>
            <div class="buton d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mt-2 mx-auto" style="justify-content: center;" type="submit" onclick="para()">Calcular</button>
                            </div>
                            <div id="select3"></div>`;
        }
}
function para(){ 
    let da1 = document.getElementById("d1").value;
    let da2 = document.getElementById("d2").value;
    let forma = document.getElementById("for").value;
    let select= document.getElementById("select3");
     if(forma==1){
        let ts = da1/da2;
        select.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+"Tiempo en subida: "+ts+'</P>';
        let tv= 2*ts;
        select.innerHTML+='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+"Tiempo de vuelo: "+tv+'</P>'
        console.log(ts);
     } else if (forma==2){
        let x_max=da1*da2;
        select.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+"Alcance maximo: "+x_max+'</P>';
     } else if (forma==3){
        let y_max=da1*da2-(9.8*(da2*da2/2));
        select.innerHTML='<P class="text-center mt-3" style="padding:1px; background-color: white; border-radius: 5px;">'+"Altura máxima: "+Math.round(y_max)+'</P>';
     }
}