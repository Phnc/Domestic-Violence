<template>
    <div>
        <navbar/>
        <intro/>
        <analisis/>
        <conclusion/>
    </div>
</template>

<script>
import Navbar from './navbar/Navbar'
import Introduction from './intro/Introduction'
import Analisis from './analisis/Analisis'
import Conclusion from './conclusion/Conclusion'

export default {
    components: {
        "navbar": Navbar,
        "intro": Introduction,
        "analisis": Analisis,
        "conclusion": Conclusion
    },
    name: "Home",
}
</script>

<style>

</style>