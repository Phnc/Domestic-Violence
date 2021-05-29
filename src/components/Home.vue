<template>
    <div>
        
        <intro/>
    </div>
</template>

<script>
import Introduction from './intro/Introduction'
import Analisis from './analisis/Analisis'
import Conclusion from './conclusion/Conclusion'

export default {
    components: {
        "navbar": Navbar,
        "intro": Introduction,
        "analisis": Analisis,
        "conclusion": Conclusion,
    },
    name: "Home",
}
</script>

<style>

</style>