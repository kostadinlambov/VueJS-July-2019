<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Registration</h1>
          <hr />
          <div class="form-group">
            <label for="email">Email</label>
            <input 
				v-model.trim="$v.email.$model" 
				type="text" 
				id="email" 
				class= "form-control"
			/>
			<p v-if="$v.email.$error" class="alert alert-danger">
					Email is not valid!
			</p>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" id="password" class="form-control" />
            <!---->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input v-model.number="age" type="number" id="age" class="form-control" />
          </div>
          <!---->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="description">Description</label>
          <br />
          <textarea v-model="description" id="description" rows="5" class="form-control"></textarea>
          <!---->
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <h3>Skill Set</h3>
            <label for="js">
              <input  v-model="skillSet" type="checkbox" id="js" value="JavaScript" /> JavaScript
            </label>
            <label for="csharp">
              <input  v-model="skillSet" type="checkbox" id="csharp" value="C#" /> C#
            </label>
            <label for="java">
              <input  v-model="skillSet" type="checkbox" id="java" value="Java" /> Java
            </label>
            <label for="php">
              <input  v-model="skillSet" type="checkbox" id="php" value="PHP" /> PHP
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input v-model="gender" name="gender" type="radio" id="male" value="Male" /> Male
          </label>
          <label for="female">
            <input v-model="gender" name="gender" type="radio" id="female" value="Female" /> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="country">Country</label>
          <select v-model="country" id="country" class="form-control">
            <option 
				v-for="country in countries" 
				:key="country.value" 
				:value="country.id" 
				>
					{{country.text}}
			</option>
           
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button :disabled="$v.$invalid" class="btn btn-primary">Submit!</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{submitedData.email}}</p>
              <p>Password: {{submitedData.password}}</p>
              <p>Age: {{submitedData.age}}</p>
              <p>Description: {{submitedData.description}}</p>
              <p>
                <strong>Skill Set?</strong>
              </p>
              <ul>
                <li v-for="(skill, index) in submitedData.skillSet" :key="index"> {{skill}}</li>
              </ul>
              <p>Gender: {{submitedData.gender}}</p>
              <p>Country: {{submitedData.country}} </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {required, email, minLength} from "vuelidate/lib/validators";

export default {
  name: "app",
  data() {
    return {
      email: "",
      password: "",
      age: 0,
      description: "",
	  disabled: false,
	  skillSet: [],
	  gender: '',
	  country: '',
	  countries: [
		  {id: 'bg', text: 'Bulgaria'},
		  {id: 'de', text: 'Germany'},
		  {id: 'en', text: 'England'},
	  ],
	  submitedData: {},
    };
  },
  components: {
  },
  methods:{
	  onSubmit(){
		  console.log("submit")
		  console.log(this.email)
		  console.log(this.age);
		  this.submitedData= {
			  email: this.email,
			  password: this.password,
			  age: this.age,
			  description: this.description,
			  email: this.email,
			  skillSet: this.skillSet,
			  gender: this.gender,
			  country: this.country,
		  }
	  }
  },
  validations: {
	  email: {
		  required,
		  email,
		  minLength: minLength(4),
		  notAbv: (value) => !value.split('@').pop().startsWith('abv')
	  }

  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
