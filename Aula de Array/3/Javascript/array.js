Array = []
function crescente(){
    var N1 = document.getElementById('texto1')
    var N2 = document.getElementById('texto2')
    var N3 = document.getElementById('texto3')

    Array[0] = N1.value
    Array[1] = N2.value
    Array[2] = N3.value

    console.log(Array)

    Array[0] = N3.value
    Array[1] = N2.value
    Array[2] = N1.value
    console.log(Array)
}