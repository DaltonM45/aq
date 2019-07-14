<template>
    
    <div>
        <ul class="menu">
            <li><router-link to="/">INICIO</router-link></li>
            <li> <router-link to="/post">post</router-link></li>
            <li><router-link to="/resultado">resultado</router-link></li>
            <li><router-link to="/resultado2">resultado2</router-link></li>
            <li><router-link to="/foo">Go to Foo</router-link></li>
        </ul>

        <router-view></router-view> 
    </div>

</template>

<script>
export default {

}
</script>

<style>


.menu{
    list-style: none;
    padding: 0;
    background: #092327;
    width: 100%;
}

.menu li  {
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 20px;
}

.menu li:hover{
    background: #ef8354;
}

.menu li{
 display: inline-block;
 text-align: center;
}

</style>
