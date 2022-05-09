          var saldo = 5000,
          retiro;

        function retirar() {
            retiro = parseFloat(document.getElementsByName("retiro")[0].value);
        
            if (isNaN(retiro)) {
                alert("El valor ingresado no es número válido");
                return;
            }
        
            if (retiro > saldo) {
                alert("Su fondo disposible no es suficiente");
                return;
            }
            
            if (retiro < saldo){
                alert("Ha retirado: S/." + retiro);
                saldo = saldo - retiro;  
                return;
            }

            if (retiro == saldo){
                alert("Ha retirado: S/." + retiro);
                saldo = saldo - retiro;  
                return;
            }
              
        }
