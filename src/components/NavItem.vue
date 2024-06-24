<template>
  <nav class="align-items-start">
    
    <ul class="list-group d-flex  flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-center">
      <li class="nav-step">
        <router-link tag="div" to="/" class="nav-link d-flex justify-content-center align-items-center active exact">
            <div class="step">1</div>
            <div class="step-num">
              <span class="d-block">Step 1</span>
              <span>Your Info</span>
            </div>
        </router-link>
      </li>
      <li class="nav-step">
        <router-link  tag="div" to="/select" class="nav-link d-flex justify-content-center align-items-center active exact">
            <div class="step">2</div>
            <div class="step-num">
              <span class="d-block">Step 2</span>
              <span>Select plan</span>
            </div>
        </router-link>
      </li>
      <li class="nav-step">
        <router-link tag="div" to="/add" class="nav-link d-flex justify-content-center align-items-center active exact">
            <div class="step">3</div>
            <div class="step-num">
              <span class="d-block">Step 3</span>
              <span>Add-ons</span>
            </div>
        </router-link>
      </li>
      <li class="nav-step">
        <router-link tag="div" to="/summary" class="nav-link d-flex justify-content-center align-items-center active exact">
            <div class="step">4</div>
            <div class="step-num">
              <span class="d-block">Step 4</span>
              <span>Summary</span>
            </div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
nav {
    text-align: left;
    margin-left: -1rem;
    font-size: var(--font-size);
    margin-top: 1rem;
  }
ul.list-group{
    align-items: flex-start;
    padding-left: 20px;
    li{
        list-style: none;
        padding: 10px;
        text-align: left;
        div{
            color: var(--white);
        }
    }
    .step{
        font-size: 14px;
        border-radius: 50%;
        padding: 4px 10px;
        border:1px solid var(--light-gray);
        margin-right: 20px;  
    }
    .step-num{
      display: none;
    }
    .router-link-exact-active{
      .step{
        border:1px solid var(--light-gray);
        background: var(--light-blue);
        color: #000;  
      }
    }
}
@media (min-width: 1024px) {
  ul.list-group{
    .nav-step{
      align-self: flex-start;
    }
      .step-num{
      display: inline-block;
      text-transform: uppercase;
      font-family: var(--font-family);
      span:first-of-type{
        color: var(--step-color)!important;
        font-weight: 400;
      } 
      span:nth-of-type(2){
        color: var(--white)!important;
        font-weight: 500;
        font-size: 13px;
        line-height: 1.1;
        transform: scaleY(1.03);
        letter-spacing: 1px;
      }
    }
    }
}
</style>