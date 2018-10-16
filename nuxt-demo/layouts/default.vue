<template>
  <div>
    <app-header/>
    <container>
      <div class="py-3">
        <nuxt/>
      </div>
      <footer>
        <small>
          遵循 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT 开源协议</a>
          <br>
          Copyright &copy; {{ now.getFullYear() }} 
          <a target="_blank" href="https://github.com/tatwd">Jaron King</a>
        </small>
      </footer>
    </container>
  </div>
</template>

<script>
import Container from '@/components/Container.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    Container,
    AppHeader
  },
  data () {
    return {
      now: new Date()
    }
  }
}
</script>