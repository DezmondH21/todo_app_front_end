$(document).ready(function(){
    $ ("#submit").click(function){
    /* variables have to be one word and you typed closet instead of closest*/
    var todo block=$(this).closet("#new-todo-block")
    /* new-todo-description is missing a hash tag in front*/
    var description= todo block.find(new-todo-description)
    $("ul").append ("<li>" <input type='checkbox'/>" + description.val() +"<span class='todo'> "+" </span></li>")
   
   
   
   description.val("")
   
            
    })
    
 })