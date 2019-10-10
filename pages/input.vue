<template>
    <div class="container">
        <p>{{num}}</p>
       <button @click="add(10,$event)">按钮</button>
    </div>
</template>
<script>
    export default {
        name: "ComputedAndWatch",
        data(){
            return {
                firstName:'firstName',
                lastName:'lastName',
                num: 100
            }
        },
        methods: { 
            add(count,e){
                this.num += count;
                console.log(count,e);
            }
        }
    }
</script>