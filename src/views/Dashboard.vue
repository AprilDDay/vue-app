<template>
    <div id="dashboard">
        <transition name="fade">
            <CommentModal v-if="showCommentModal" :post="selectedPost" @close="toggleCommentModal()"></CommentModal>
        </transition>
        <section>
            <div class="col1">
                <div class="profile">
                    <h5>{{ userProfile.name }}</h5>
                    <p>{{ userProfile.title }}</p>
                    <div class="create-post">
                        <p>create a post</p>
                        <form @submit.prevent>
                            <!-- potential problem with the following line -->
                            <textarea v-model.trim="post-content"></textarea>
                            <button @click="createPost()" :disabled="post.content === ''" class="button">post</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col2">
                <div v-if="posts.length">
                    <div v-for="post in posts" :key="post.id" class="post">
                        <h5>{{ post.userName }}</h5>
                        <span>{{ post.createdOn }}</span>
                        <!-- the following two lines look like they aren't working -->
                        <span>{{ fullPost.createdOn | formatDate }}</span>
                        <span>{{ post.content | trimLength }}</span>
                        <p>{{ post.content }}</p>
                        <ul>
                            <li><a @click="toggleCommentModal(post)">comments {{ post.comments }}</a></li>
                            <li><a @click="likePost(post.id, post.likes)">likes {{ post.likes }}</a></li>
                            <li><a>view full post</a></li>
                            <!-- not sure if the following makes sense going here -->
                            <li><a @click="toggleCommentModal(post)">comments {{ post.comments }}</a></li>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <p class="no results">There are currently no posts.</p>
                </div>  
            </div>
        </section>
    </div>
</template>

<script>

    import CommentModal from '@/components/CommentModal'
    import moment from 'moment'
    import { mapState } from 'vuex'

    // add vue instance
    export default{
        data() {
            return {
                post: {
                    content: ''
                },
                showCommentModal: false,
                selectedPost: {}
            }
        },
        computed: {
            ...mapState(['userProfile'])
        },
        methods: {
            createPost(){
                this.$store.dispatch('createPost', {content: this.post.content})
                this.post.content=''
            },
            toggleCommentModal(post){
                this.showCommentModal = !this.showCommentModal

                //if opening modal set selectedPost, else clear
                if(this.showCommentModal) {
                    this.selectedPost = post
                } else {
                    this.selectedPost = {}
                }
            },
            likePost(id, likesCount){
                this.$store.dispatch('likePost', {id, likseCount})
            }
        },
        filters: {
            formatDate(val) {
                if(!val) {return '-'}

                let date = val.toDate()
                return moment(date).fromNow()
            },
            trimLength(val) {
                if(val.length < 200) {return val}
                return `${val.substring(0, 200)}...`
            }
        },
        components: {
            CommentModal
        }

    }
</script>

<style lang="scss" scoped>

</style>