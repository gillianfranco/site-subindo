function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[0].value = item;
}

function dropdown(index){
    var element = document.getElementsByClassName('dropDown')[0];
    var display = ['block', 'none'];
    element.style.display = display[index];

    var t = ['0px', '0px, -10px'];

    setTimeout(function(){
        element.style.transform = 'translate('+t[index]+')';
    }, 0);
    
}