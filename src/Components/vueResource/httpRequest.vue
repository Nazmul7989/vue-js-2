<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <h3>Http Request Handle</h3>
        <form>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <input type="text" v-model="userData.name" class="form-control" placeholder="Name">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input type="email" v-model="userData.email" class="form-control" placeholder="Email">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input type="text" v-model.lazy="userData.phone" class="form-control" placeholder="Phone No">
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="">Select Skills:</label>
                <select name="" id="" class="form-control" v-model="userData.selectedSkill">
                  <option v-for="skill in userData.skills" :key="skill">{{ skill }}</option>
                </select>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" v-model="userData.languages" type="checkbox" id="inlineCheckbox1" value="Bangla">
                  <label class="form-check-label" for="inlineCheckbox1">Bangla</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" v-model="userData.languages" type="checkbox" id="inlineCheckbox2" value="English">
                  <label class="form-check-label" for="inlineCheckbox2">English</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" v-model="userData.languages" type="checkbox" id="inlineCheckbox3" value="Hindi">
                  <label class="form-check-label" for="inlineCheckbox3">Hindi</label>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-check form-check-inline">
                <input class="form-check-input" v-model="userData.gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male">
                <label class="form-check-label" for="inlineRadio1">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" v-model="userData.gender" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female">
                <label class="form-check-label" for="inlineRadio2">Female</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <textarea v-model="userData.message" id="message" cols="30" rows="4" placeholder="Message" class="form-control"></textarea>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <input @click.prevent="submitData" type="submit" class="btn btn-primary" value="Send">
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-6" v-if="userData.isSubmitted">
        <p>Name:{{ userData.name }}</p>
        <p>Email: {{ userData.email}}</p>
        <p>Phone: {{ userData.phone}}</p>
        <p>
          <span> Language:</span>
        <ul>
          <li v-for="language in userData.languages" :key="language">
            {{ language }}
          </li>
        </ul>
        </p>
        <p>Gender: {{ userData.gender }}</p>
        <p>Skills: {{ userData.selectedSkill }}</p>
        <p style="white-space: pre-line;">Message: {{ userData.message}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div v-for="(post, id) in userData.posts" :key="id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data(){
    return{
      userData:{
        name:'',
        email:'',
        phone:'',
        languages: [],
        gender: '',
        skills:['HTML','CSS','JS','PHP'],
        selectedSkill: 'CSS',
        message:'',
        isSubmitted: false,
        posts: []
      }
    }
  },

  methods:{
    submitData(){
      this.userData.isSubmitted = true;
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        name: this.userData.name,
        email: this.userData.email,
        phone: this.userData.phone,
        languages: this.userData.languages,
        gender: this.userData.gender,
        skills: this.userData.skills,
        message: this.userData.message

      }).then( (res)=>{
        console.log(res);
      })
    }
  },
 created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
      this.userData.posts = res.body.slice(0, 10);
    })
 }

}
</script>