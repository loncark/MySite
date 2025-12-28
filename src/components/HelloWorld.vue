<template>
  <section>
    <p>{{ msg }}</p>
    <button @click="count++">count is: {{ count }}</button>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: { type: String, default: '' }
  },
  data() { return { count: 0 } }
}
</script>
