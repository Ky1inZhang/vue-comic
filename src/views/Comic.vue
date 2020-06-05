<template>

  <div id="comic" class="v-cloak">
    <div class="container">
      <div class="row">
        <table class="table table-hover table-bordered">
          <caption class="h2 text-warning text-center" style="text-align: center;caption-side: top;">章节目录</caption>
          <diV class="button">
            <button class="btn btn-default" @click="sortAsc($event)">正序</button>
            <button class="btn btn-default" @click="sortDesc($event)">倒序</button>
          </diV>
          <div class="col-md-12">
            <div class="titles" v-for="(item,index) in titles" :key="index">
              <div v-if="item.title">
                <router-link  :to='"/p/" + comicId + item.url' :title="item.title">{{item.title | toFixed}}</router-link>
              </div>
            </div>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import cheerio from 'cheerio'
export default {
  name: 'Comic',
  data () {
    return {
      titles: [],
      sort: 'asc'
    }
  },
  props: {
    comicId: {
      type: String
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // 反转数组
    reverse: a => [...a].map(a.pop, a),
    getData () {
      const url = `${this.HOST}/${this.comicId}/`
      this.$axios
        .get(url, {
          // headers:{origin:"Access-Control-Allow-Origin"}
        })
        .then(res => {
          var $ = cheerio.load(res.data.toString()) // 利用cheerio对页面进行解析
          // eslint-disable-next-line no-array-constructor
          const arrays = new Array()
          $('#chapter-list-1 li a').each(function () {
            var obj = {}
            obj.title = $(this).prop('title')
            obj.url = $(this).prop('href').match('/[1-9]\\d*(?=.html)')[0]
            arrays.push(obj)
          })
          this.titles = arrays
        })
        .catch(err => {
          console.error(err)
        })
    },
    sortAsc (e) {
      if (this.sort === 'asc') return
      this.titles = this.reverse(this.titles)
      this.sort = 'asc'
    },
    sortDesc () {
      if (this.sort === 'desc') return
      this.titles = this.reverse(this.titles)
      this.sort = 'desc'
    }
  },
  filters: {
    toFixed (input) {
      // return (input === undefined ? '' : input).substr(0, 10)
      return input.length > 10 ? input.substr(0, 5) + '...' : input
    }
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style lang="less" scoped>
[v-cloak] {
    display: none;
}

.imgs {
  width: 100%;
  border-radius: 4px 4px 0 0;
}

.titles{
    // float: left;
    // line-height:24px;
    // padding:10px 20px;
    // word-break:break-all;
    // word-wrap : break-word;
    // width: 16.6%;

    float: left;
    width: 20%;
    height: 24px;
    color: aliceblue;
    padding: 0 2px;
    line-height: 30px;
    overflow: hidden

}

table{
  word-break:break-all;
}
button{
  display: inline-block;
  text-align: right;
  color: rgb(207, 227, 228);
}
</style>
