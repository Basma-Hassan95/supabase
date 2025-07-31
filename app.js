
// import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cuxzktmfddfiwbgvufid.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1eHprdG1mZGRmaXdiZ3Z1ZmlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDc3MzUsImV4cCI6MjA2OTQ4MzczNX0._4UKpGJa9xDMRkqO5NXXGii43yltxEh0z87GCRdtxQ8'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)


let sbtn = document.getElementById("sbtn")
if(sbtn){
    
sbtn.addEventListener('click',async() =>{
    let email = document.getElementById('semail').value.trim()
    let password = document.getElementById('spass').value.trim()
    
    const { data, error } = await supabase.auth.signUp({
  email,
  password,
})

if(error){
    console.log('error =>',error);
    
}else{
    console.log("data =>", data);
    
}
})
}

// login Oauth

let lbtn = document.getElementById("lbtn")
if(lbtn){
lbtn.addEventListener('click', async() =>{

    let email = document.getElementById("lemail").value.trim()
    let password = document.getElementById("lpass").value.trim()

    const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
})
let getData = error ? error : data
 console.log(getData);
 
})
}

