const pre_concat_array=function(arrays)
{
    let res_array=[]
    for(let i=0; i<arrays.length;i++)
    {
        res_array=res_array.concat(arrays[i])
    }
    return res_array
}

const RemoveDuplicate=function(arra_d)
{
    let uniqueEntry = [];
    arra_d.forEach((c) => {
    if (!uniqueEntry.includes(c)) {
        uniqueEntry.push(c);
    }})

    return uniqueEntry

}

const RemoveParamchar=function(charToRem,arrayInput)
{
    let RemainderEntry = [];
    arrayInput.forEach((c) => {
    if (!c.includes(charToRem)) {
        RemainderEntry.push(c);
    }})

    return RemainderEntry
}

const RemoveWhiteSpace=function(arrayInput)
{
return arrayInput.map(item=>item.trim())

}



const concatArrays=function(char_a,...arrays){
    let array_st1=pre_concat_array(arrays)
   // console.log(array_st1)

    let array_st2=RemoveDuplicate(array_st1)

    //console.log(array_st2)

    let array_st3=RemoveParamchar(char_a,array_st2)
    //console.log(array_st3)

    let array_st4=RemoveWhiteSpace(array_st3)
    //console.log(array_st4)

    return array_st4



}

export default concatArrays;

console.log(concatArrays('r', ['robi', 'géza '], [' márton','robi'], [' hammadata']))