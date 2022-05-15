/* FIXAR MENU AO ROLAR A TELA*/
const targetHeader = document.getElementById('header');
const fixedMenu = 'active-menu';

window.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop > 100){
        targetHeader.className = fixedMenu;
    }else{
        targetHeader.className = '';
    }
})

//DESTACAR BOTAO CLICADO E FILTRAR POSTS
const targetService = document.querySelectorAll('.element-item');
var buttons = []

for(var i=0;i<5;i++){
    buttons[i] = document.getElementById((i+1).toString());
}

const selectButton = 'active-button';


window.addEventListener('click', function(){
    for(var i=0;i<5;i++){
        buttons[i].addEventListener('click', function (event) {
            var r = event.target
            for(var j=0;j<5;j++){
                buttons[j].className = '';
                   
            }
            for(var j=0;j<5;j++){
                if(r == buttons[j]){
                    buttons[j].className = 'active-button';
                    filterPosts(j);
                    break;
                }      
            }
        }) 
    }    
})

function filterPosts(value){
    for(var l=0;l<targetService.length;l++){
        targetService[l].classList.remove("hidden");
    }
    switch (parseInt(buttons[value].id)) {
        case 1:
            for(var l=0;l<targetService.length;l++){
                targetService[l].classList.remove("hidden");
            }
            break;
        case 2:
            for(var l=0;l<targetService.length;l++){
                if(!targetService[l].classList.contains("apps")){
                    targetService[l].classList.add("hidden");
                }
            }
            break;
        case 3:
            for(var l=0;l<targetService.length;l++){
                if(!targetService[l].classList.contains("email")){
                    targetService[l].classList.add("hidden");
                }
            }
            break;
        case 4:
            for(var l=0;l<targetService.length;l++){
                if(!targetService[l].classList.contains("graphics")){
                    targetService[l].classList.add("hidden");
                }
            }
            break;
        case 5:
            for(var l=0;l<targetService.length;l++){
                if(!targetService[l].classList.contains("website")){
                    targetService[l].classList.add("hidden");
                }
            }
            break;
        default:
            console.log("nada a fazer")
            break;
    }
}
