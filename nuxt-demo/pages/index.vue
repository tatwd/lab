<template>
  <div class="d-flex">
    <div class="w-75">
      <div>
        <div class="input-group mb-3">
          <input class="form-control" type="search" placeholder="搜索帖子" aria-label="Search">
        </div>
        <div>
          <button class="btn btn-secondary btn-sm">所有</button>
          <button class="btn btn-outline-primary btn-sm">问答</button>
          <button class="btn btn-outline-info btn-sm">笔记</button>
          <button class="btn btn-outline-danger btn-sm">学习</button>
        </div>
      </div>
      <div class="list-group my-3">
        <nuxt-link
          class="list-group-item list-group-item-action flex-column align-items-start"
          v-for="post in posts"
          :key="post.id"
          :to="`/post/${post.id}`"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" style="max-width: 90%">{{ post.title }}</h5>
            <div>
              <span :class="`badge badge-${ctrlTopic[post.topic.id]}`">{{ post.topic.name }}</span>
            </div>
          </div>
          <small>{{ post.time }}</small>
        </nuxt-link>
      </div>

      <button class="btn btn-block btn-sm btn-light">加载更多</button>

    </div>
    <div class="mx-2"></div>
    <div class="w-25">
      <div>
        <a class="btn btn-md btn-block btn-success text-white">发帖子</a>
      </div>
      <div class="mt-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">欢迎加入</h5>
            <h6 class="card-subtitle mb-2 text-muted">.NET Core 社区 · 中国</h6>
            <p class="card-text">全球首个 .NET Core 中文社区，创建于 2018 年 10 月！</p>
            <a href="https://dot.net" target="_blank" class="card-link">.NET Core 官网</a>
            <a href="https://github.com/tatwd/ncc-china/" target="_blank" class="card-link">项目源码</a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Conseqionem ducimus maxime, voluptates ex in ',
          time: '刚刚',
          topic: {
            id: 1,
            name: '问答'
          }
        },
        {
          id: 2,
          title: '你好，世界',
          time: '1 分钟前',
          topic: {
            id: 2,
            name: '笔记'
          }
        },
        {
          id: 3,
          title: '加入我们吧！',
          time: '3 天前',
          topic: {
            id: 3,
            name: '学习'
          }
        },
        {
          id: 4,
          title: '.NET Core 是一个开源的项目',
          time: '2 小时前',
          topic: {
            id: 2,
            name: '笔记'
          }
        },
        {
          id: 5,
          title: '让我们一起壮大这个社区',
          time: '2018-10-19',
          topic: {
            id: 1,
            name: '问答'
          }
        },
        {
          id: 6,
          title: '让我们一起壮大这个社区',
          time: '2018-10-19',
          topic: {
            id: 3,
            name: '学习'
          }
        },
        {
          id: 7,
          title: '让我们一起壮大这个社区',
          time: '2018-10-19',
          topic: {
            id: 1,
            name: '问答'
          }
        }
      ]
    }
  },
  computed: {
    ctrlTopic () {
      return {
        '1': 'primary',
        '2': 'info',
        '3': 'danger'
      }
    }
  }
}
</script>
