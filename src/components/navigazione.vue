<script>
export default{
    name:"navigazione",
    props:["nav"]
}
</script>

<template>
    <ul>
        <li>
           <a href="#">
            {{ nav }}
           </a> 
        </li>
    </ul>

  
</template>

<style lang="scss" scoped>
li{
    list-style: none;
}
a:hover{
    color: #3aafbf;
}
a{
    text-decoration: none;
    color: white;
}

</style>
