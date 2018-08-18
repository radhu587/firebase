import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import signup from '@/components/signup'
import signin from '@/components/signin'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '*',
      redirect:'/sign-in'
    },
    {
      path: '/',
      redirect:'/sign-in'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        requiresAuth:true
      }
    },
    {
      path : '/sign-up',
      name: 'signup',
      component: signup
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: signin
    }
  ]
})
 
router.beforeEach((to,from,next)=>{
  let currentUser= firebase.auth().currentUser;
  let requiresAuth= to.matched.some(record=>record.meta.requiresAuth);

  if(requiresAuth && !currentUser){
    next('sign-in');  
  }else if(!requiresAuth && currentUser){
    next('hello');
  }else{
    next();   
  }
});
export default router