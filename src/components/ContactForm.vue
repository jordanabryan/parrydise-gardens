<template>
  <div class='content-section'>
    <div class='content-wrap'>
      <div ref='contactForm' id='contactForm' class='content-inner'>
        <h3>Get in contact</h3>
        
        <div class='error-return' v-if="errorsMsg">
          <p>Please fix the errors within the from to continue.</p>
        </div>

        <form @submit.prevent="submit">

          <div v-bind:class="[errors.has('name') ? 'error' : '', 'input-wrapper']">
            <label for='name'>Name</label>
            <div>
              <input
                id='name'
                name='name'
                type='text'
                class='input name'
                placeholder='Full name'
                v-model='form.name'
                v-validate="'required|alpha'" />
            </div>
            <div 
              class='error-msg'
              v-if="errors.has('name')">{{ errors.first('name') }}</div>
          </div>
         
          <div v-bind:class="[errors.has('email') ? 'error' : '', 'input-wrapper']">
            <label for='email'>Email</label>
            <div class=''>
              <input
              id='email'
              name='email'
              type='text'
              class='input'
              placeholder='Email address'
              v-validate="'required|email'"
              v-model='form.email'/>
            </div>
            <div 
              class='error-msg' 
              v-if="errors.has('email')">{{ errors.first('email') }}</div>
          </div>
          
          <div v-bind:class="[errors.has('phone') ? 'error' : '', 'input-wrapper']">
            <label for='phone'>Phone</label>
            <div class=''>
              <input
              id='phone'
              name='phone'
              type='text'
              class='input'
              placeholder='Contact number'
              v-validate="'required|numeric'"
              v-model='form.phone'/>
            </div>
            <div 
              class='error-msg'
              v-if="errors.has('phone')">{{ errors.first('phone') }}</div>
          </div>
          
          <div v-bind:class="[errors.has('service') ? 'error' : '', 'input-wrapper']">
            <label for='service'>Service</label>
            <div class=''>
              <select 
                id='service'
                name='service'
                class='input'
                v-validate="'included:1,2,3,4,5,6'"
                v-model='form.service'>
                <option value='' disabled selected>Please select a service</option>
                <option value='1'>Lawn Maintenance</option>
                <option value='2'>Flower and Tree Planting</option>
                <option value='3'>Seasonal Preperation</option>
                <option value='4'>General Maintenance</option>
                <option value='5'>Fence Maintenance</option>
                <option value='6'>Re Turfing</option>
              </select>
              <div 
                class='error-msg' 
                v-if="errors.has('service')">{{ errors.first('service') }}</div>
            </div>
          </div>
          <div class='input-wrapper'>
            <label for='info'>Extra Info</label>
            <div class=''>
              <textarea
              id='info'
              name='info'
              type='text'
              class='textarea'
              rows='5'
              placeholder='extra info you require'
              v-model='form.info'></textarea>
            </div>
          </div>
          <div class='input-wrapper'>
            <div class=''>
              <button
                id='submit'
                name='submit'
                type='submit'
                v-bind:class="[sending == true ? 'disabled' : '', 'input submit']">
                submit
              </button>
            </div>
          </div>

          <div v-if='postResults'>
            <div v-bind:class='postResults.returnClass'>
              <p>{{ postResults.id }}</p>
              <p>{{ postResults.createdAt }}</p>
            </div>
          </div>

        </form>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactForm',
  props: ['title', 'content'],
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        info: '',
      },
      errorsMsg: false,
      sending: false,
      postResults: '',
      url: '/',
    };
  },
  methods: {
    getCoords(elem) {
      const el = elem.getBoundingClientRect();

      const body = document.body;
      const docEl = document.documentElement;

      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      const clientTop = docEl.clientTop || body.clientTop || 0;
      const clientLeft = docEl.clientLeft || body.clientLeft || 0;

      const top = el.top + scrollTop - clientTop;
      const left = el.left + scrollLeft - clientLeft;

      return { 
        top: Math.round(top),
        left: Math.round(left)
      };

    },

    submit(event) {

      event.preventDefault();

      if (this.sending === false){

        if (
          (this.form.name) && 
          (this.form.email) && 
          (this.form.phone) && 
          (this.form.service) && 
          (this.form.date) 
        ){
          return true;
        }

        this.errorsMsg = false;

        this.$validator.validateAll().then((result) => {

          if(result){
            
            this.sending = true;

            fetch(this.url, {
              method: 'POST',
              // mode: "no-cors",
              body: JSON.stringify(this.form),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
            .then(response => response.json())
            .then((json) => {
              this.postResults = json;
              this.sending = false;
              return true;
            })
            .catch(() => {
              this.sending = false;
              return true;
            });

          } else {

            let coords = this.getCoords(this.$refs.contactForm);
            window.scrollTo(coords);

            this.errorsMsg = true;

            console.log('not valid');
          
          }

        });
      }
    },
  },
};

</script>

<style lang="scss" scoped>

$white: #fff;

.content-section{
  background: $white;
  z-index: 3;
  position: relative;

  .content-wrap{
    position: relative;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1100px;
    display: flex;
    align-items: center;
    background: $white;

    .content-inner{
      position: relative;
      z-index: 2;
      padding: 100px 20px;
      width: 100%;

      h3{
        font-size: 2.6em;
        margin: 0 0 20px 0;
      }

      p{
        font-size: 1.6em;
      }
    }
  }
}

form{
  padding: 30px 0;
}

.input-wrapper{
  margin: 0px 0 35px 0;
}

label{
  margin-bottom: 5px;
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
}

.input{
  width: 100%;
  max-width: 700px;
  height: 50px;
  padding: 10px;
  font-size: 1em;
  border: solid 1px #ddd;
  border-radius: 5px;
  background: #fff;
}

.textarea{
  width: 100%;
  max-width: 700px;
  min-height: 50px;
  padding: 10px;
  font-size: 1em;
  border: solid 1px #ddd;
  border-radius: 5px;
  background: #fff;
}

.error-msg{
  display: none;
}

.submit{
  background: #25b725;
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.error{
  label{
    color: red;
  }
  input{
    border-color: red;
    color: red;
  }
  .error-msg{
    margin-top: 5px;
    display: block;
    color: red;
  }
}

.error-return{
  background: #ff9a9a;
  padding: 10px;
  border: solid 2px #f00;
  margin-bottom: 20px;
  max-width: 700px;
  width: 100%;
  font-size: 0.8em;

  p{
    margin-bottom: 0px;
  }

  ul{
    li{
      margin-bottom: 5px;
      display: block;
    }
  }
}


</style>

