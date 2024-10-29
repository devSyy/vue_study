<template>
  <div id="app">
    <main class="main-container">
      <div class="form-container">
        <form @submit.prevent="loginSubmit" class="login-form">
          <div class="input-group">
            <i class="fas fa-user icon"></i>
            <label for="email"></label>
            <input
              type="text"
              class="default-input"
              id="email"
              placeholder="email"
              v-model="email"
              required
            />
          </div>
          <div class="input-group">
            <i class="fas fa-lock icon"></i>
            <label for="password"></label>
            <input
              type="password"
              class="default-input"
              id="password"
              placeholder="password"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="login-btn default-btn" >Login</button>
        </form>
      </div>
    </main>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        email: null,
        password: null,
      };
    },
    methods: {
      loginSubmit() {
        let loginReq = {};
        loginReq.email = this.email;
        loginReq.password = this.password;

        try {
          this.$axios
            .post(this.$serverUrl + "/app/account/sign-in", JSON.stringify(loginReq), {
              headers: {
                "Content-Type": 'application/json',
              },
            })
            .then((res) => {
              if (res.status === 200) {
                // 로그인 성공시 처리해줘야할 부분
                alert(res.data.message);
                localStorage.setItem('user_token', res.data.result.jwt);
              }
            });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
