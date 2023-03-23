<template>
    <div id="tags-view-container" ref="scrollContainer" class="tags-view-container">
      <div
        ref="scrollWrapper"
        class="tags-view-wrapper"
        :class="{
          'is-left-shadow': isLeftShadow,
          'is-right-shadow': isRightShadow, 
        }"
      >
        <span class="tags-view-item tags-view-item-home" :class="{ active: isDashboard }">
          <n-link ref="tag" to="/dashboard">
            <i class="icon icon-tab-home"></i>
            <span class="sr-only">{{ '홈' }}</span>
          </n-link>
        </span>
  
        <!-- <router-link v-for="(tag, i) in visitedViews" ref="tag" :key="i" v-slot="{ navigate }" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" custom @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''" @contextmenu.prevent.native="openMenu(tag, $event)"> -->
        <router-link v-for="(tag, i) in visitedViews" ref="tag" :key="i" v-slot="{ navigate }" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" custom >
          <span role="link" class="tags-view-item" :class="{ active: isActive(tag) }" @click="navigate" @keypress.enter="navigate">
            {{ tag.title }}
            <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
          </span>
        </router-link>
      </div>
  
      <div ref="tagsControl" class="tags-view-control">
        <button type="button" class="tags-view-control__prev" :class="isLeftShadow ? '' : 'is-disabled'" @click.prevent="scrollTabLeft">
          <i class="el-icon-arrow-left"></i>
          <span class="sr-only">{{ '이전'}}</span>
        </button>
        <button type="button" class="tags-view-control__next" :class="isRightShadow ? '' : 'is-disabled'" @click.prevent="scrollTabRight">
          <i class="el-icon-arrow-right"></i>
          <span class="sr-only">{{ '다음' }}</span>
        </button>
        <button type="button" class="tags-view-control__close" @click.prevent="closeAllTabs">
          <i class="el-icon-close"></i>
          <span class="sr-only">{{ '모두닫기' }}</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  const tagAndTagSpacing = 4; // tagAndTagSpacing
  export default {
    components: {
      // ScrollPane: () => import("./ScrollPane"),
    },
    data() {
      return {
        visible: false,
        top: 0,
        left: 0,
        selectedTag: {},
        affixTags: [],
        tabsList: [],
        tabsIndex: 0,
        isDashboard: true,
        isLeftShadow: false,
        isRightShadow: false,
        isTabScroll: true, // 탭 스크롤 진행시 true 로 추가 이벤트 발생 방지
      };
    },
    computed: {
      scrollWrapper() {
        return this.$refs.scrollWrapper;
      },
      visitedViews() {
        // return this.$store.state.tagsView.visitedViews;
        return [
            {
                fullPath: 'table-test',
                meta: {},
                name: 'test table',
                path: 'table-test',
                title: '판매현황 분석',
            },
            {
                fullPath: 'table-test',
                meta: {},
                name: 'test table',
                path: 'table-test',
                title: '재고현황 분석',
            },
            {
                fullPath: 'table-test',
                meta: {},
                name: 'test table',
                path: 'table-test',
                title: '입고현황 분석',
            },
        ]
      },
      routes() {
        // return this.$store.state.permission.routes
        return [];
      },
    },
    watch: {
      $route() {
        this.moveToCurrentTag();
      },
      visible(value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu);
        } else {
          document.body.removeEventListener('click', this.closeMenu);
        }
      },
    },
    mounted() {
      this.moveToCurrentTag();
      window.addEventListener('resize', this.handleResize);
    },
    unmounted() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      isActive(route) {
        return route.path === this.$route.path;
      },
      isAffix(tag) {
        return tag.meta && tag.meta.affix;
      },
      moveToCurrentTag() {
        // 대시보드 탭 active 여부 판단
        if (this.$route.path.includes('dashboard')) {
          this.isDashboard = true;
        } else {
          this.isDashboard = false;
        }
        const tags = this.$refs.tag;
        if (this.$refs.tag.length === undefined) return false;
        /* 현재 URI */
        const arr = this.$route.path.split('/');
        if (arr.length > 0) {
          this.$store.commit('CHANGE_CRRRT', arr[arr.length - 1]);
          // this.$store.commit('CHANGE_CRRNAME', '');
          // this.$store.commit('CHANGE_CRRPGMCD', '');
        }
  
        this.$nextTick(() => {
          for (let i = 0; i < tags.length; i++) {
            const tag = tags[i];
            if (tag.to.path === this.$route.path) {
              // this.$refs.scrollPane.moveToTabsTarget(tag);
              this.moveToTabsTarget(tag);
              // when query is different then update
              if (tag.to.fullPath !== this.$route.fullPath) {
                this.$store.dispatch('tagsView/updateVisitedView', this.$route);
              }
              break;
            }
          }
          // 탭패널의 좌우 그림자 체크
          this.checkTabs();
        });
  
        return true;
      },
      closeSelectedTag(view) {
        // console.log(view)
        this.$store.dispatch('tagsView/addCachedView', view);
        this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
        // this.$nextTick(() => {
        //   const route = this.$router.options.routes.find(route => route.path === view.fullPath);
        //   console.log(
        //     'view: ', view,
        //     'fullPath', view.fullPath,
        //     ' :: ', route.name,
        //     route);
        //   // route.component.$destroyed() // $refs.beforeDestroy();
        //   console.log(route.component)
        //   // this.$store.getters['pageData/pgd'][this.crrntRtNm];
        // });
      },
  
      toLastView(visitedViews, view) {
        const latestView = visitedViews.slice(-1)[0];
        if (latestView) {
          this.$router.push(latestView.fullPath);
        } else if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath });
        } else {
          this.$router.push('/dashboard');
        }
      },
      openMenu(tag, e) {
        this.isDashboard = false;
        const menuMinWidth = 105;
        const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
        const offsetWidth = this.$el.offsetWidth; // container width
        const maxLeft = offsetWidth - menuMinWidth; // left boundary
        const left = e.clientX - offsetLeft + 15; // 15: margin right
  
        if (left > maxLeft) {
          this.left = maxLeft;
        } else {
          this.left = left;
        }
  
        this.top = e.clientY;
        this.visible = true;
        this.selectedTag = tag;
      },
      closeMenu() {
        console.log('closeMenu')
        this.visible = false;
      },
      handleScroll() {
        this.closeMenu();
      },
      moveToTabsTarget(currentTag) {
        const $container = this.$refs.scrollContainer;
        const $containerWidth = $container.offsetWidth;
        const $scrollWrapper = this.scrollWrapper;
        const tagList = this.$refs.tag;
  
        let firstTag = null;
        let lastTag = null;
  
        // find first tag and last tag
        if (tagList.length > 0) {
          firstTag = tagList[0];
          lastTag = tagList[tagList.length - 1];
        }
        if (firstTag === currentTag) {
          $scrollWrapper.scrollLeft = 0;
        } else if (lastTag === currentTag) {
          $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth;
          // $scrollWrapper.scrollWidth - $containerWidth;
        } else {
          // find preTag and nextTag
          const currentIndex = tagList.findIndex((item) => item === currentTag);
          const prevTag = tagList[currentIndex - 1];
          const nextTag = tagList[currentIndex + 1];
  
          // the tag's offsetLeft after of nextTag
          const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing;
  
          // the tag's offsetLeft before of prevTag
          const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing;
  
          if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
            $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth;
          } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
            $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft;
          }
        }
      },
      // 탭패널 요소 각각의 width 를 배열 변수 할당
      initTabsList() {
        this.tabsList = [];
        const tagList = this.$refs.tag;
        this.tabsList.push(80);
        for (let i = 0; i < tagList.length; i++) {
          this.tabsList.push(tagList[i].$el.offsetWidth);
          // this.tabsList.push(tagList[i].$el.getBoundingClientRect().width);
        }
      },
      // 탭패널 좌우 스크롤 애니메이션
      scrollTabMove(scrollWidth) {
        const $scrollWrapper = this.$refs.scrollWrapper;
        return new Promise(function (resolve, reject) {
          $scrollWrapper.scroll({
            left: scrollWidth,
            top: 0,
            behavior: 'smooth',
          });
          setTimeout(function () {
            if ($scrollWrapper.scrollLeft < 30 && $scrollWrapper.scrollLeft > 0) {
              $scrollWrapper.scroll({
                left: 0,
                top: 0,
                behavior: 'smooth',
              });
              resolve(0);
            } else {
              resolve($scrollWrapper.scrollLeft);
            }
          }, 200);
        });
      },
      // 탭패널 좌우 그림자 체크 및 tabsIndex 변수 할당
      checkTabs(scrollLeft) {
        const $container = this.$refs.scrollContainer;
        const $scrollWrapper = this.$refs.scrollWrapper;
        if (scrollLeft === undefined) {
          scrollLeft = $scrollWrapper.scrollLeft;
        }
        const sumScroll = $container.offsetWidth + scrollLeft - this.$refs.tagsControl.offsetWidth + 3;
        if (scrollLeft <= 30) {
          this.isLeftShadow = false;
        } else {
          this.isLeftShadow = true;
        }
        if (sumScroll >= $scrollWrapper.scrollWidth) {
          // console.log(">> 끝 도달");
          let tempSum = 0;
          for (let i = 0; i < this.tabsList.length; i++) {
            tempSum += this.tabsList[i];
            if (scrollLeft < tempSum) {
              this.tabsIndex = i - 1;
              break;
            }
          }
          this.isRightShadow = false;
        } else {
          this.isRightShadow = true;
          // tab scroll
          this.initTabsList();
          let tempSum = 0;
          for (let i = 0; i < this.tabsList.length; i++) {
            tempSum += this.tabsList[i];
            if (scrollLeft < tempSum) {
              this.tabsIndex = i + 1;
              break;
            }
          }
          if (scrollLeft <= 30) {
            this.tabsIndex = 1;
          }
        }
        return sumScroll;
      },
      // 탭패널 좌측 이동
      async scrollTabLeft() {
        if (this.isTabScroll) {
          this.isTabScroll = false;
          this.initTabsList();
          this.checkTabs();
          const $scrollWrapper = this.scrollWrapper;
          const scrollWidth = $scrollWrapper.scrollLeft - this.tabsList[this.tabsIndex - 2];
          const scrollLeft = await this.scrollTabMove(scrollWidth);
          this.checkTabs(scrollLeft);
          this.isTabScroll = true;
        } else {
          return false;
        }
      },
      // 탭패널 우측 이동
      async scrollTabRight() {
        if (this.isTabScroll) {
          this.isTabScroll = false;
          this.initTabsList();
          this.checkTabs();
          const $scrollWrapper = this.scrollWrapper;
          const scrollWidth = $scrollWrapper.scrollLeft + this.tabsList[this.tabsIndex - 1];
          const scrollLeft = await this.scrollTabMove(scrollWidth);
          this.checkTabs(scrollLeft);
          this.isTabScroll = true;
        } else {
          return false;
        }
      },
      // 탭패널 전체 닫기
      closeAllTabs() {
        // this.$store.dispatch('tagsView/delAllView', this.$store.state.tagsView.visitedViews).then(({ visitedViews }) => {
        //   this.$router.push('/dashboard');
        // });
        const views = this._.cloneDeep(this.$store.getters['tagsView/getVisitedViews'])
        // console.log('views : ', views.length, views)
        for(let i = 0; i < views.length; i++) {
          console.log(i, views.length)
          this.$store.dispatch('tagsView/addCachedView', views[i]);
          this.$store.dispatch('tagsView/delView', views[i])
        }
        this.$router.push('/dashboard');
      },
      handleResize(event) {
        this.checkTabs();
      },
    },
  };
  </script>
  