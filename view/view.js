const { question, salirDelPrograma, initSingleModeView, displayLogo, putPlayer, editPlayer, deletePlayer, about, getAllplayersOption } = require('../controllers/viewController')
const { pushToMap } = require('../controllers/mapController')
async function main() {
    
    console.log("Iniciando el programa...");
    displayLogo()
    console.log("Bienvenido a ballstats!, porfavor elija una opción \n 0:salir del programa \n 1:Iniciar programa \n 2: listar jugadores \n 3: agregar jugador \n 4: editar agregar \n 5: eliminar usuario \n 6: about \n")
    let option = ""
    while(option != '0'){
        pushToMap()
        option = await question("");
    switch (option){
        
        case "0": 
            console.log(" Saliendo del programa");
            salirDelPrograma();

        case '1': 
            option = await question("1 para singles 2 para doubles");
            console.log(' Iniciando programa ');
            if(option == '1'){
                await initSingleModeView();
            }
            else {
                //opción para dobules
            }
            main()
            break;
        case '2': 
            //Solucionar refresh
            console.log("Listando jugadores ");
            await getAllplayersOption();
            main()
            break;
        case '3': 
            //deprecated
            console.log("Agregar jugador " + option);
            await putPlayer();
            main()
            break;
        case '4':
            //deprecated
            console.log("Editar jugador " + option); 
            await editPlayer();
            main()
            break;
        case '5': 
            //deprecated
            console.log("Eliminar usuario " + option);
            await deletePlayer();
            main()
            break;
        case '6': 
            console.log("About " + option);
            await about();
            main()
            break;  
      
        default:    
            //deprecated
            console.log("opción inválida");
            process.exit(0);
        }
    } 
  }
  
  main();






  module.exports = {main}