webpackJsonp([1],{"+55q":function(t,n,c){"use strict";var e=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{attrs:{id:"app"}},[c("ShoppingList"),t._v(" "),c("ShoppingCart")],1)},r=[],i={render:e,staticRenderFns:r};n.a=i},"2Udk":function(t,n,c){"use strict";function e(t){c("PwPK")}var r=c("E7GZ"),i=c("4bH+"),u=c("VU/8"),o=e,s=u(r.a,i.a,!1,o,"data-v-a24372e2",null);n.a=s.exports},"4bH+":function(t,n,c){"use strict";var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"shopping-list"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.loading?e("img",{attrs:{title:"Loading...",src:c("G/2H")}}):e("ul",{staticClass:"products-list"},t._l(t.products,function(n,c){return e("li",{key:c},[t._v("\n      "+t._s(n.title)+" - "+t._s(t._f("currency")(n.price))+" - "+t._s(n.inventory)+"\n      "),e("button",{attrs:{disabled:!t.productIsInStock(n)},on:{click:function(c){t.addProductToCart(n)}}},[t._v("Add to Cart")])])}))])},r=[],i={render:e,staticRenderFns:r};n.a=i},"8Pr9":function(t,n){},E7GZ:function(t,n,c){"use strict";var e=c("Dd8w"),r=c.n(e),i=c("NYxO");n.a={name:"ShoppingList",data:function(){return{title:"Shopping List",loading:!1}},computed:r()({},Object(i.d)("products",{products:function(t){return t.items}}),Object(i.c)("products",{productIsInStock:"productIsInStock"})),methods:r()({},Object(i.b)({fetchProducts:"products/fetchProducts",addProductToCart:"cart/addProductToCart"})),created:function(){var t=this;this.loading=!0,this.fetchProducts().then(function(){return t.loading=!1})}}},"G/2H":function(t,n,c){t.exports=c.p+"static/img/loading.f440472.gif"},IcnI:function(t,n,c){"use strict";var e=c("NYxO"),r=c("/5sW"),i=c("mUbh"),u=c("u3Ct"),o=c("Xct0");r.a.use(e.a),n.a=new e.a.Store({modules:{cart:u.a,products:o.a},state:{},getters:{},actions:i.a,mutations:{}})},M93x:function(t,n,c){"use strict";function e(t){c("8Pr9")}var r=c("xJD8"),i=c("+55q"),u=c("VU/8"),o=e,s=u(r.a,i.a,!1,o,null,null);n.a=s.exports},NHnr:function(t,n,c){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=c("/5sW"),r=c("M93x"),i=c("IcnI"),u=c("dvEi");e.a.config.productionTip=!1,e.a.filter("currency",u.a),new e.a({el:"#app",store:i.a,render:function(t){return t(r.a)}})},PwPK:function(t,n){},S49b:function(t,n,c){"use strict";var e=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5}];n.a={getProducts:function(t){setTimeout(function(){return t(e)},100)},buyProducts:function(t,n,c){setTimeout(function(){Math.random()>.5||navigator.userAgent.indexOf("PhantomJS")>-1?n():c()},100)}}},TFTN:function(t,n,c){"use strict";function e(t){c("TGGt")}var r=c("dxHS"),i=c("opOx"),u=c("VU/8"),o=e,s=u(r.a,i.a,!1,o,"data-v-4d019a78",null);n.a=s.exports},TGGt:function(t,n){},Xct0:function(t,n,c){"use strict";var e=c("//Fk"),r=c.n(e),i=c("S49b");n.a={namespaced:!0,state:{items:[]},getters:{availableProducts:function(t,n){return t.items.filter(function(t){return t.inventory>0})},productIsInStock:function(){return function(t){return t.inventory>0}}},mutations:{setProducts:function(t,n){t.items=n},decrementProductInventory:function(t,n){n.inventory--}},actions:{fetchProducts:function(t){var n=t.commit;return new r.a(function(t,c){i.a.getProducts(function(c){n("setProducts",c),t()})})}}}},dvEi:function(t,n,c){"use strict";function e(t,n,c){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";n=null!=n?n:"$",c=null!=c?c:2;var e=Math.abs(t).toFixed(c),i=c?e.slice(0,-1-c):e,u=i.length%3,o=u>0?i.slice(0,u)+(i.length>3?",":""):"",s=c?e.slice(-1-c):"";return(t<0?"-":"")+n+o+i.slice(u).replace(r,"$1,")+s}n.a=e;var r=/(\d{3})(?=\d)/g},dxHS:function(t,n,c){"use strict";var e=c("Dd8w"),r=c.n(e),i=c("NYxO");n.a={data:function(){return{title:"Shopping Cart"}},computed:r()({},Object(i.c)("cart",{products:"cartProducts",total:"cartTotal"}),Object(i.c)("products",{productIsInStock:"productIsInStock"}),Object(i.d)("cart",{checkoutStatus:function(t){return t.checkoutStatus}})),methods:r()({},Object(i.b)("cart",{checkout:"checkout"}))}},mUbh:function(t,n,c){"use strict";c("S49b");n.a={}},opOx:function(t,n,c){"use strict";var e=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"shopping-cart"},[c("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),c("ul",{staticClass:"cart-list"},t._l(t.products,function(n,e){return c("li",{key:e},[t._v("\n            "+t._s(n.title)+" - "+t._s(t._f("currency")(n.price))+" - "+t._s(n.quantity)+"\n        ")])})),t._v(" "),c("p",{staticClass:"title"},[t._v("Total: "+t._s(t._f("currency")(t.total)))]),t._v(" "),c("button",{on:{click:t.checkout}},[t._v("Checkout")]),t._v(" "),t.checkoutStatus?c("p",[t._v(t._s(t.checkoutStatus))]):t._e()])},r=[],i={render:e,staticRenderFns:r};n.a=i},u3Ct:function(t,n,c){"use strict";var e=c("S49b");n.a={namespaced:!0,state:{items:[],checkoutStatus:null},getters:{cartProducts:function(t,n,c,e){return t.items.map(function(t){var n=c.products.items.find(function(n){return n.id===t.id});return{title:n.title,price:n.price,quantity:t.quantity}})},cartTotal:function(t,n){return n.cartProducts.reduce(function(t,n){return t+n.price*n.quantity},0)}},mutations:{pushProductToCart:function(t,n){t.items.push({id:n,quantity:1})},incrementItemQuantity:function(t,n){n.quantity++},setCheckoutStatus:function(t,n){t.checkoutStatus=n},emptyCart:function(t){t.items=[]}},actions:{addProductToCart:function(t,n){var c=t.state,e=(t.getters,t.commit);t.rootState;if(t.rootGetters["products/productIsInStock"](n)){var r=c.items.find(function(t){return t.id===n.id});r?e("incrementItemQuantity",r):e("pushProductToCart",n.id),e("products/decrementProductInventory",n,{root:!0})}},checkout:function(t){var n=t.state,c=t.commit;e.a.buyProducts(n.items,function(){c("emptyCart"),c("setCheckoutStatus","success")},function(){c("setCheckoutStatus","failed")})}}}},xJD8:function(t,n,c){"use strict";var e=c("2Udk"),r=c("TFTN");n.a={name:"app",components:{ShoppingList:e.a,ShoppingCart:r.a}}}},["NHnr"]);
//# sourceMappingURL=app.77d39a3b74a4ffff7a81.js.map