// https://github.com/declandewet/vue-meta

const title = '.NET Core 社区 · 中国'

const meta = [
  { 
    charset: 'utf-8' 
  },
  { 
    name: 'viewport', 
    content: 'width=device-width, initial-scale=1' 
  }
]

const link = [
  { 
    rel: 'stylesheet', 
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' 
  }
]

const script = [
  { 
    src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    type: 'text/javascript', 
    body: true 
  },
  { 
    src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    type: 'text/javascript', 
    body: true 
  },
  { 
    src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
    type: 'text/javascript', 
    body: true 
  },
]


export default {
  title,
  meta,
  link,
  script
}