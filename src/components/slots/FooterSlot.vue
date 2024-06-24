<template>
    <footer>
        <div class="d-flex justify-content-between align-items-center">
            <div class="back">
                <slot name="back"></slot>
            </div>
            <div class="align-self-end">
                <slot name="next"></slot>
            </div>
        </div>
    </footer>
     
  </template>
  <style lang="scss" scoped>
   footer{
    div{
        margin-top: 30px;
    } 
    margin-bottom: 50px;
    padding-bottom: 20px ;
   }
   @media (min-width: 1024px) {
    footer{
        div{
            margin-top: 50px;
        }
        margin-bottom: 0;
        padding-bottom: 0;
    }
   }
  </style>