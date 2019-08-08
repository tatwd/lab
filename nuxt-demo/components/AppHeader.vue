<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-indigo">
    <container>
      <a class="navbar-brand" href="/">
        <span class="h4">
          { .NET Core } 社区
          <img style="height: 32px" src="~/assets/cn.png" alt="中国">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <form class="nav-item form-inline mx-3">
            <div class=" input-group input-group-sm">
              <input class="form-control" type="search" placeholder="搜索" aria-label="Search">
            </div>
          </form> -->
          <a class="nav-item nav-link active" href="/">首页 <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">项目</a>
          <!-- <a class="nav-item nav-link" href="#">Wiki</a> -->
        </div>
        <div>
          <a href="/login" class="btn text-white">登录</a>
          <a href="/register" class="btn btn-outline-light">注册</a>
        </div>
      </div>
    </container>
  </nav>
</template>

<script>
import Container from '@/components/Container.vue';

export default {
  components: {
    Container
  }
}
</script>

<style scoped>
.bg-indigo{
  background-color: var(--primary);
}
</style>

