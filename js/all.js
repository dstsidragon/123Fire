var body = document.body;

//鍵盤按鍵 1 2 3 對應的火箭會發射
function goRocket(e){
    
    switch(e.keyCode){
        case 49:
            document.querySelector('.rocket-1').style.bottom = '2000px'
            break;
        case 50:
            document.querySelector('.rocket-2').style.bottom = '2000px'
            break;
        case 51: 
            document.querySelector('.rocket-3').style.bottom = '2000px'
            break;
    }
}

//點選火箭圖片對應的火箭會發射

var  rocket= document.querySelectorAll('.rocket');

function goRocket1(e){
   console.log(e.target.className)
    switch(e.target.className )
    {
        case 'rocket rocket-1':
            document.querySelector('.rocket-1').style.bottom = '2000px'
            break;
        case 'rocket rocket-2':
            document.querySelector('.rocket-2').style.bottom = '2000px'
            break;
        case 'rocket rocket-3': 
            document.querySelector('.rocket-3').style.bottom = '2000px'
            break;
    }
}




//事件
body.addEventListener('keydown',goRocket,false)
body.addEventListener('click',goRocket1,false)
