function loadData(){
    $.ajax({
        url:'http://localhost:3000/tasks',
        type:'GET'
    })
    .then(data=>{
        $('#content').html('')
        for (let i = 0; i < data.length; i++) {
           var item = $(`<li class="list-group-item">${data[i].name}<a href="" class="btn btn-danger">Xoá</a></li>`)
           $('#content').append(item)
        }
    })
    .catch(err=>{   
        console.log(err)
    })
}
loadData()

$('#btnAdd').click(()=>{
    var name = $('#name').val()
    console.log(name)
    $.ajax({
        url:'http://localhost:3000/tasks',
        type:'POST',
        data:{
            name: name
        }
    })
    .then(data=>{
        console.log(data)
        var item = $(`<li class="list-group-item">${data.name}<a href="" class="btn btn-danger">Xoá</a></li>`)
        $('#content').append(item)
    })
    .catch()
})

