<template>
    <div>
        <p>Counter is: {{ douboleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'douboleCounter',
            'stringCounter'
        ])
    }
}
</script>